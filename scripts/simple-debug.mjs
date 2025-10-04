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

async function simpleDebug() {
  console.log('Starting simple database diagnostics...\n')

  try {
    // Test contact_submissions
    console.log('Testing contact_submissions table...')
    const { data: contacts, error: contactsError } = await supabase
      .from('contact_submissions')
      .select('id, name, email, created_at')
      .limit(1)

    if (contactsError) {
      if (contactsError.code === 'PGRST204') {
        console.log('✓ contact_submissions table exists but is empty')
      } else {
        console.error('✗ Error with contact_submissions:', contactsError.message)
      }
    } else {
      console.log('✓ contact_submissions table exists with data:', contacts)
    }

    // Test newsletter_subscriptions
    console.log('\nTesting newsletter_subscriptions table...')
    const { data: subs, error: subsError } = await supabase
      .from('newsletter_subscriptions')
      .select('id, email, status, subscribed_at')
      .limit(1)

    if (subsError) {
      if (subsError.code === 'PGRST204') {
        console.log('✓ newsletter_subscriptions table exists but is empty')
      } else {
        console.error('✗ Error with newsletter_subscriptions:', subsError.message)
      }
    } else {
      console.log('✓ newsletter_subscriptions table exists with data:', subs)
    }

    // Insert test data
    console.log('\nTrying to insert test data...')
    const { error: insertError } = await supabase
      .from('contact_submissions')
      .insert({
        name: 'Test User',
        email: 'test@example.com',
        message: 'This is a test submission',
        inquiry_type: 'general'
      })

    if (insertError) {
      console.error('✗ Error inserting test data:', insertError.message)
    } else {
      console.log('✓ Successfully inserted test data')
    }

  } catch (error) {
    console.error('Unexpected error:', error)
  }

  console.log('\nDiagnostics completed.')
}

simpleDebug()