import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://akfspsfnwtivthgkgfnz.supabase.co',
  process.env.SUPABASE_KEY,
  {
    auth: {
      persistSession: false
    }
  }
)

async function fullDebug() {
  console.log('🔍 Starting full website debug check...\n')

  try {
    // 1. Database Tables and Constraints Check
    console.log('📊 Checking Database Tables and Constraints...')
    
    // Test contact form with all possible inquiry types
    const inquiryTypes = ['client', 'venture', 'investment', 'general']
    for (const type of inquiryTypes) {
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: `Test ${type}`,
          email: `test_${type}@example.com`,
          message: `Test message for ${type} inquiry`,
          inquiry_type: type,
          company: 'Test Company'
        })
      
      if (error) {
        console.error(`❌ Error testing ${type} inquiry:`, error.message)
      } else {
        console.log(`✅ Successfully tested ${type} inquiry submission`)
      }
    }

    // Test newsletter subscription
    const { error: subError } = await supabase
      .from('newsletter_subscriptions')
      .insert({
        email: 'test_newsletter@example.com',
        source: 'popup'
      })

    if (subError) {
      console.error('❌ Error testing newsletter subscription:', subError.message)
    } else {
      console.log('✅ Successfully tested newsletter subscription')
    }

    // Test duplicate email prevention for newsletter
    const { error: dupError } = await supabase
      .from('newsletter_subscriptions')
      .insert({
        email: 'test_newsletter@example.com',
        source: 'popup'
      })

    if (dupError && dupError.code === '23505') {
      console.log('✅ Duplicate email prevention working correctly')
    } else if (!dupError) {
      console.error('❌ Duplicate email prevention failed')
    }

    // Test RLS Policies
    console.log('\n🔒 Testing RLS Policies...')
    
    // Create anonymous client
    const anonClient = createClient(
      'https://akfspsfnwtivthgkgfnz.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrZnNwc2Zud3RpdnRoZ2tnZm56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzMjYwMDAsImV4cCI6MjAxMTkwMjAwMH0.0dqyAFKJonUfUztrH8ni9DpLkVX_8xwL5lWDeaQ_pL0'
    )

    // Test anon insert
    const { error: anonInsertError } = await anonClient
      .from('contact_submissions')
      .insert({
        name: 'Anon Test',
        email: 'anon@test.com',
        message: 'Testing anon submission'
      })

    if (!anonInsertError) {
      console.log('✅ Anonymous submissions working correctly')
    } else {
      console.error('❌ Anonymous submissions failed:', anonInsertError.message)
    }

    // Test anon select (should fail)
    const { data: anonSelect, error: anonSelectError } = await anonClient
      .from('contact_submissions')
      .select('*')

    if (anonSelectError || !anonSelect) {
      console.log('✅ Anonymous read protection working correctly')
    } else {
      console.error('❌ Anonymous users can read data - security issue!')
    }

    // Check data integrity
    console.log('\n🔍 Checking Data Integrity...')
    const { data: submissions } = await supabase
      .from('contact_submissions')
      .select('*')
    
    console.log(`Total submissions: ${submissions?.length || 0}`)
    
    const { data: subscriptions } = await supabase
      .from('newsletter_subscriptions')
      .select('*')
    
    console.log(`Total subscriptions: ${subscriptions?.length || 0}`)

  } catch (error) {
    console.error('❌ Unexpected error during debug:', error)
  }

  console.log('\n✨ Database debug check completed.')
}

fullDebug()