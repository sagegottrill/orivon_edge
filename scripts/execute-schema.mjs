import { createClient } from '@supabase/supabase-js'
import fs from 'fs'

const supabase = createClient(
  'https://akfspsfnwtivthgkgfnz.supabase.co',
  process.env.SUPABASE_KEY,
  {
    auth: {
      persistSession: false
    }
  }
)

async function executeSchema() {
  try {
    const sql = fs.readFileSync('supabase/init.sql', 'utf8')
    
    const { data, error } = await supabase.rpc('exec_sql', { sql_query: sql })
    
    if (error) {
      console.error('Error executing schema:', error)
    } else {
      console.log('Schema executed successfully:', data)
      
      // Run diagnostics after schema execution
      const debugScript = await import('./debug-db.mjs')
      await debugScript.default()
    }
  } catch (error) {
    console.error('Error:', error)
  }
}

executeSchema()