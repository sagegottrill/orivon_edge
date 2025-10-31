# Complete Backend Setup Guide for Orivon Edge

## 🎯 Overview
This guide will help you set up the complete backend for all application forms:
- Core Skills Track Applications
- Corporate Track Applications  
- Join Hub Applications
- Contact Submissions
- Newsletter Subscriptions

## 📋 Step 1: Execute Database Schema

### Option A: Manual Execution (Recommended)
1. Go to your Supabase SQL Editor:
   https://supabase.com/dashboard/project/akfspsfnwtivthgkgfnz/editor

2. Open the file `supabase/complete-schema.sql` in VS Code

3. Copy the ENTIRE contents of the file

4. Paste it into the Supabase SQL Editor

5. Click the **"Run"** button (or press Ctrl+Enter)

6. Wait for the success message

### Option B: Using PowerShell Script
```powershell
# Set your service role key (get from Supabase Dashboard > Settings > API)
$env:SUPABASE_SERVICE_KEY = "your-service-role-key-here"

# Run the script
.\supabase\execute-complete-schema.ps1
```

## ✅ Step 2: Verify Tables Were Created

Go to Supabase Table Editor:
https://supabase.com/dashboard/project/akfspsfnwtivthgkgfnz/editor

You should see these tables:
- ✅ `contact_submissions`
- ✅ `newsletter_subscriptions`
- ✅ `core_skills_applications`
- ✅ `corporate_track_applications`
- ✅ `join_hub_applications`

## 🔧 Step 3: Update Frontend Code

The TypeScript types and helper functions are already updated in:
- `src/lib/supabase.ts`

Now you need to connect the forms to use these functions.

### Core Skills Track Form
Update `src/pages/CoreSkillsTrack.tsx`:

```typescript
import { submitCoreSkillsApplication } from '@/lib/supabase';

// In your form submit handler:
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  const result = await submitCoreSkillsApplication({
    full_name: formData.fullName,
    email: formData.email,
    phone: formData.phone,
    track: formData.track,
    motivation: formData.motivation
  });
  
  if (result.success) {
    setIsSubmitted(true);
  } else {
    console.error('Error:', result.error);
    alert('Failed to submit application. Please try again.');
  }
  
  setIsSubmitting(false);
};
```

### Corporate Track Form
Update `src/pages/CorporateTrack.tsx`:

```typescript
import { submitCorporateTrackApplication } from '@/lib/supabase';

// In your form submit handler:
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  const result = await submitCorporateTrackApplication({
    full_name: formData.fullName,
    email: formData.email,
    phone: formData.phone,
    current_role: formData.currentRole,
    career_goals: formData.careerGoals
  });
  
  if (result.success) {
    setIsSubmitted(true);
  } else {
    console.error('Error:', result.error);
    alert('Failed to submit application. Please try again.');
  }
  
  setIsSubmitting(false);
};
```

### Join Hub Form
Update `src/pages/JoinHub.tsx` - already has the logic, just needs testing!

## 📊 Step 4: Access Your Data

### View Applications
Go to Supabase Table Editor and click on any table to view submissions:
https://supabase.com/dashboard/project/akfspsfnwtivthgkgfnz/editor

### Analytics Dashboard
Run this query in SQL Editor to see all applications:
```sql
SELECT * FROM applications_dashboard;
```

### Export Data
You can export any table to CSV from the Supabase dashboard.

## 🔐 Security Notes

- ✅ Row Level Security (RLS) is enabled on all tables
- ✅ Anonymous users can only INSERT (submit forms)
- ✅ Only authenticated users can view/update applications
- ✅ All sensitive data is protected

## 🎉 Testing

1. Go to your website: https://your-website.vercel.app
2. Navigate to each form page:
   - `/core-skills-track`
   - `/corporate-track`
   - `/join-hub`
3. Fill out and submit a test application
4. Check Supabase dashboard to verify the data was saved

## 📧 Email Notifications (Optional - Next Step)

To send email notifications when applications are submitted:

1. Set up Edge Functions in Supabase
2. Use Resend or SendGrid API
3. Add triggers to send emails on new applications

## 🆘 Troubleshooting

**Error: "No API key found"**
- Check that your `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set correctly

**Error: "Permission denied"**
- Run the complete schema again to ensure RLS policies are created

**Forms not submitting**
- Check browser console for errors
- Verify network requests in DevTools
- Check Supabase logs in dashboard

## ✅ Checklist

- [ ] Execute complete-schema.sql in Supabase
- [ ] Verify all 5 tables exist
- [ ] Update CoreSkillsTrack.tsx with Supabase integration
- [ ] Update CorporateTrack.tsx with Supabase integration  
- [ ] Test all three forms
- [ ] Verify data appears in Supabase
- [ ] Set up email notifications (optional)
- [ ] Deploy to production

## 🚀 You're Done!

Your complete backend is now set up and ready to receive applications!
