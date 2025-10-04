import { supabase } from '../src/lib/supabase';

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
    const readResult = await supabase
      .from('contact_submissions')
      .select('*');

    if (readResult.error) {
      console.log('✅ Read protection working correctly');
    } else {
      console.error('❌ Security issue: Anonymous users can read data!');
    }

  } catch (error) {
    console.error('❌ Unexpected error during testing:', error);
  }

  console.log('\n✨ Anonymous access testing completed.');
}

testAnonymousAccess();