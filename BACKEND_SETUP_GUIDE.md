# 🚀 Supabase Backend Setup Guide

## Step 1: Execute the SQL Schema

The SQL Editor should now be open in your browser. Follow these steps:

1. **Copy the SQL** from `supabase/complete-schema.sql`
2. **Paste it** into the Supabase SQL Editor
3. **Click "Run"** to execute the schema

This will create:
- ✅ `core_skills_applications` table
- ✅ `corporate_track_applications` table
- ✅ `join_hub_applications` table
- ✅ `contact_submissions` table (if not exists)
- ✅ `newsletter_subscriptions` table (if not exists)
- ✅ All necessary indexes for performance
- ✅ RLS policies for security
- ✅ Analytics views for dashboard

## Step 2: Verify Tables Created

After running the SQL, check in Supabase:
1. Go to **Table Editor** tab
2. You should see all 5 tables listed
3. Click each table to verify the columns

## Step 3: Test Form Submissions

Your forms are already configured to use these tables:

### Core Skills Track (`/core-skills-track`)
- Form submits to: `core_skills_applications`
- Function: `submitCoreSkillsApplication()`

### Corporate Track (`/corporate-track`)
- Form submits to: `corporate_track_applications`
- Function: `submitCorporateTrackApplication()`

### Join Hub (`/join-hub`)
- Form submits to: `join_hub_applications`
- Function: `submitJoinHubApplication()`

## Step 4: Connect Forms to Supabase

I need to update the form components to actually call the Supabase functions. Would you like me to:

1. Update `CoreSkillsTrack.tsx` to submit to Supabase ✅
2. Update `CorporateTrack.tsx` to submit to Supabase ✅
3. Update `JoinHub.tsx` to submit to Supabase ✅

## Step 5: View Submissions (Admin Dashboard)

After forms are submitted, you can view them in Supabase:

### Option A: Supabase Dashboard
1. Go to **Table Editor**
2. Click on any table (e.g., `core_skills_applications`)
3. See all submissions

### Option B: SQL Query
```sql
-- View all Core Skills applications
SELECT * FROM core_skills_applications ORDER BY created_at DESC;

-- View all Corporate Track applications
SELECT * FROM corporate_track_applications ORDER BY created_at DESC;

-- View all Join Hub applications
SELECT * FROM join_hub_applications ORDER BY created_at DESC;

-- View dashboard summary
SELECT * FROM applications_dashboard;
```

## Your Supabase Connection Details

```typescript
URL: https://akfspsfnwtivthgkgfnz.supabase.co
Anon Key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Already configured in `src/lib/supabase.ts` ✅

## Next Steps

1. ✅ Execute SQL schema (do this now in the browser)
2. ⏳ Update form components to submit to Supabase
3. ⏳ Test form submissions
4. ⏳ Set up email notifications (optional)

Let me know when you've executed the SQL, and I'll update the forms!
