# Test MCP Server Connection

This is a simple test to verify your Supabase MCP server is working.

## Test Commands to Try:

1. **Basic Connection Test:**
   ```
   Show me the tables in my Supabase database
   ```

2. **Execute Schema:**
   ```
   Execute the SQL schema from supabase/schema.sql
   ```

3. **Check Project Info:**
   ```
   What is my Supabase project ID?
   ```

4. **List Tables:**
   ```
   List all tables and their columns
   ```

## Expected Results:

- MCP should prompt for authentication on first use
- Commands should execute successfully
- You should see database information returned

## If Issues Occur:

1. Restart VS Code
2. Check `.vscode/mcp.json` exists
3. Verify Supabase credentials are correct
4. Try manual execution in Supabase dashboard

## Manual Fallback:

If MCP doesn't work, execute schema manually:
1. Go to: https://supabase.com/dashboard/project/akfspsfnwtivthgkgfnz/sql/new
2. Copy contents of `supabase/schema.sql`
3. Paste and run in SQL Editor
