import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://akfspsfnwtivthgkgfnz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrZnNwc2Zud3RpdnRoZ2tnZm56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1MDUyMzMsImV4cCI6MjA3NTA4MTIzM30.I7PNJ6mp7TdBYOqTB-nrfMYNEXa3FDusSXHyUi-NGrA'
)

async function testAnonymousAccess() {
  console.log('🔍 Testing anonymous access to Supabase...\n');

  try {
    // Test 1: Submit a contact form
    console.log('1️⃣ Testing contact form submission...');
    const contactResult = await supabase
      .from('contact_submissions')
      .insert([{
        name: 'Test User',
        email: 'test@example.com',
        message: 'This is a test submission',
        inquiry_type: 'general'
      }]);

    if (contactResult.error) {
      console.error('❌ Contact form test failed:', contactResult.error.message);
    } else {
      console.log('✅ Contact form submission successful');
    }

    // Test 2: Subscribe to newsletter
    console.log('\n2️⃣ Testing newsletter subscription...');
    const newsletterResult = await supabase
      .from('newsletter_subscriptions')
      .insert([{
        email: `test${Date.now()}@example.com`,
        source: 'test'
      }]);

    if (newsletterResult.error) {
      console.error('❌ Newsletter subscription test failed:', newsletterResult.error.message);
    } else {
      console.log('✅ Newsletter subscription successful');
    }

    // Test 3: Try to read data (should fail due to RLS)
    console.log('\n3️⃣ Testing read protection...');
    
    console.log('Testing contact submissions read...');
    const readContactResult = await supabase
      .from('contact_submissions')
      .select('*');

    if (readContactResult.error) {
      console.log('✅ Contact submissions read protection working correctly');
    } else {
      console.error('❌ Security issue: Anonymous users can read contact submissions!');
    }

    console.log('\nTesting newsletter subscriptions read...');
    const readNewsletterResult = await supabase
      .from('newsletter_subscriptions')
      .select('*');

    if (readNewsletterResult.error) {
      console.log('✅ Newsletter subscriptions read protection working correctly');
    } else {
      console.error('❌ Security issue: Anonymous users can read newsletter subscriptions!');
    }

  } catch (error) {
    console.error('❌ Unexpected error during testing:', error);
  }

  console.log('\n✨ Anonymous access testing completed.');
}

testAnonymousAccess();