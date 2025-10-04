import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://akfspsfnwtivthgkgfnz.supabase.co',
  process.env.SUPABASE_KEY
)

async function debugDatabase() {
  // Check contact_submissions table
  const { data: contacts, error: contactsError } = await supabase
    .from('contact_submissions')
    .select('*')
    .limit(5)

  if (contactsError) {
    console.error('Error fetching contacts:', contactsError)
  } else {
    console.log('Contact Submissions sample:', contacts)
  }

  // Check newsletter_subscriptions table
  const { data: subscribers, error: subscribersError } = await supabase
    .from('newsletter_subscriptions')
    .select('*')
    .limit(5)

  if (subscribersError) {
    console.error('Error fetching subscribers:', subscribersError)
  } else {
    console.log('Newsletter Subscriptions sample:', subscribers)
  }

  // Get table information
  const { data: tables, error: tablesError } = await supabase
    .rpc('get_tables_info')

  if (tablesError) {
    console.error('Error fetching table info:', tablesError)
  } else {
    console.log('Database Tables:', tables)
  }
}

debugDatabase()