# Supabase MCP Server - Quick Setup

## ✅ MCP Server Configured

Your Supabase MCP server is now properly configured in VS Code.

### Files Created/Updated:
- `.vscode/mcp.json` - MCP server configuration
- `.vscode/settings.json` - VS Code settings with MCP enabled

### Configuration:
```json
{
  "mcpServers": {
    "supabase": {
      "type": "http",
      "url": "https://mcp.supabase.com/mcp"
    }
  }
}
```

---

## 🚀 How to Use MCP Server

### Step 1: Restart VS Code
**Important:** Restart VS Code for MCP configuration to take effect.

### Step 2: Authenticate (First Time Only)
When you first use the MCP server, VS Code will:
1. Prompt you to login to Supabase
2. Open browser for authentication
3. Grant access to MCP client
4. Remember credentials for future use

### Step 3: Ask Copilot to Execute Database Operations

Now you can ask GitHub Copilot to interact with your Supabase database:

#### Execute Schema:
```
Execute the SQL schema from supabase/schema.sql on my Supabase database
```

#### Check Tables:
```
Show me all tables in my Supabase project
```

#### View Data:
```
Show me contact submissions from today
```

#### Insert Test Data:
```
Add a test record to newsletter_subscriptions table
```

---

## 🎯 Your Supabase Project

- **Project URL:** `https://akfspsfnwtivthgkgfnz.supabase.co`
- **Project ID:** `akfspsfnwtivthgkgfnz`
- **MCP Status:** Ready to connect

---

## 🔒 Security Features

- ✅ **Manual Approval:** All queries require your approval
- ✅ **Read-Only Mode:** Recommended for safety
- ✅ **Project Scoping:** Limited to your specific project
- ✅ **Authentication:** Secure login required

---

## 📋 Quick Commands

### Database Setup:
```
Execute schema.sql on my Supabase database
```

### Verification:
```
List all tables and their schemas
```

### Testing:
```
Insert a test contact submission
Show me newsletter subscribers
```

---

## 🎉 Ready to Go!

**Restart VS Code**, then ask Copilot to execute your database schema. The MCP server will handle authentication and execution automatically!

**Example:** *"Execute the schema.sql file on my Supabase database"*

---

## 🛠️ Troubleshooting

### If MCP doesn't work:
1. Restart VS Code completely
2. Check GitHub Copilot is active
3. Try asking: "Show me my Supabase tables"
4. First time will prompt for authentication

### Manual Alternative:
Go to: https://supabase.com/dashboard/project/akfspsfnwtivthgkgfnz/sql/new
Copy schema.sql content and execute manually.

---

**MCP Server is configured and ready!** 🚀
