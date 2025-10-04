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

async function debugDatabase() {
  console.log('Starting database diagnostics...\n')

  try {
    // 1. Check if tables exist
    const { data: tableList, error: tableError } = await supabase
      .from('information_schema.tables')
      .select('table_name')
      .eq('table_schema', 'public')

    if (tableError) {
      console.error('Error checking tables:', tableError)
    } else {
      console.log('Found tables:', tableList.map(t => t.table_name).join(', '), '\n')
    }

    // 2. Check contact_submissions table
    const { data: contacts, error: contactsError } = await supabase
      .from('contact_submissions')
      .select('*')
      .limit(5)

    if (contactsError) {
      console.error('Error with contact_submissions:', contactsError)
    } else {
      console.log('Contact Submissions (up to 5 records):', 
        contacts.length ? contacts : 'No records found', '\n')
    }

    // 3. Check newsletter_subscriptions table
    const { data: subscribers, error: subscribersError } = await supabase
      .from('newsletter_subscriptions')
      .select('*')
      .limit(5)

    if (subscribersError) {
      console.error('Error with newsletter_subscriptions:', subscribersError)
    } else {
      console.log('Newsletter Subscriptions (up to 5 records):', 
        subscribers.length ? subscribers : 'No records found', '\n')
    }

    // 4. Check RLS policies
    const { data: policies, error: policiesError } = await supabase
      .from('pg_policies')
      .select('*')
      .in('tablename', ['contact_submissions', 'newsletter_subscriptions'])

    if (policiesError) {
      console.error('Error checking RLS policies:', policiesError)
    } else {
      console.log('RLS Policies:', policies || 'No policies found', '\n')
    }

    // 5. Check table columns
    const { data: columns, error: columnsError } = await supabase
      .from('information_schema.columns')
      .select('table_name,column_name,data_type,is_nullable')
      .eq('table_schema', 'public')
      .in('table_name', ['contact_submissions', 'newsletter_subscriptions'])

    if (columnsError) {
      console.error('Error checking columns:', columnsError)
    } else {
      console.log('Table Columns:', columns, '\n')
    }

  } catch (error) {
    console.error('Unexpected error during diagnostics:', error)
  }

  console.log('Database diagnostics completed.')
}

debugDatabase()