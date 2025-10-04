# ✅ Setup Checklist

## 🎯 Backend Setup (5 minutes total)

### Step 1: Supabase Database Setup (2 min)
- [ ] Go to https://supabase.com/dashboard/project/akfspsfnwtivthgkgfnz
- [ ] Click "SQL Editor" in left sidebar
- [ ] Click "New Query"
- [ ] Open `supabase/schema.sql` file
- [ ] Copy ALL contents (Ctrl+A, Ctrl+C)
- [ ] Paste into SQL Editor
- [ ] Click "Run" button
- [ ] Go to "Table Editor" and verify you see:
  - [ ] `contact_submissions` table
  - [ ] `newsletter_subscriptions` table

### Step 2: Resend Email Setup (2 min)
- [ ] Go to https://resend.com/signup
- [ ] Create account with your email
- [ ] Verify your email
- [ ] Go to "API Keys" in dashboard
- [ ] Click "Create API Key"
- [ ] Name it: "orivon-edge-website"
- [ ] Copy the key (starts with `re_...`)
- [ ] Open `.env.local` file
- [ ] Replace `RESEND_API_KEY=` with your key
- [ ] Save the file

### Step 3: Test Locally (1 min)
- [ ] Run `npm run dev` in terminal
- [ ] Open http://localhost:8080 in browser
- [ ] Scroll to contact form
- [ ] Fill out and submit the form
- [ ] Go to Supabase dashboard → Table Editor → contact_submissions
- [ ] Verify your submission appears in the table
- [ ] Check your email for auto-reply (if Resend is configured)

---

## 🚀 Deploy to Production

### Step 4: Vercel Environment Variables
- [ ] Go to your Vercel project dashboard
- [ ] Click "Settings" → "Environment Variables"
- [ ] Add these 3 variables (click "Add" for each):

**Variable 1:**
- [ ] Key: `VITE_SUPABASE_URL`
- [ ] Value: `https://akfspsfnwtivthgkgfnz.supabase.co`
- [ ] Select: Production, Preview, Development

**Variable 2:**
- [ ] Key: `VITE_SUPABASE_ANON_KEY`
- [ ] Value: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrZnNwc2Zud3RpdnRoZ2tnZm56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1MDUyMzMsImV4cCI6MjA3NTA4MTIzM30.I7PNJ6mp7TdBYOqTB-nrfMYNEXa3FDusSXHyUi-NGrA`
- [ ] Select: Production, Preview, Development

**Variable 3:**
- [ ] Key: `RESEND_API_KEY`
- [ ] Value: Your Resend API key (from Step 2)
- [ ] Select: Production, Preview, Development

### Step 5: Deploy
- [ ] Run `vercel --prod` in terminal
- [ ] Wait for deployment to complete
- [ ] Visit your production URL
- [ ] Test contact form on production site
- [ ] Verify submission in Supabase
- [ ] Check email notifications

---

## ✅ Verification

### Backend Working Correctly:
- [ ] Contact form submissions save to Supabase
- [ ] Newsletter signups save to Supabase
- [ ] Admin receives email notifications
- [ ] Users receive auto-reply emails
- [ ] Newsletter subscribers receive welcome email
- [ ] No console errors in browser
- [ ] Forms show success messages

### Rebrand Working Correctly:
- [ ] Hero shows new typewriter phrases about venture studio
- [ ] Hero subtitle mentions "venture studio and digital agency"
- [ ] Hero has two CTAs: "Start Your Project" and "Explore Our Ventures"
- [ ] About section shows "Building Startups & Scaling Innovation"
- [ ] About section has "For Clients" and "For Ventures" cards
- [ ] Core values show innovation-focused messaging

---

## 📊 Monitor Your Backend

### Daily Checks:
- [ ] Check Supabase dashboard for new submissions
- [ ] Check Resend dashboard for email delivery
- [ ] Monitor Vercel dashboard for function errors

### Weekly Checks:
- [ ] Review contact form submissions
- [ ] Check newsletter subscriber growth
- [ ] Monitor email delivery rates

---

## 🆘 Troubleshooting

### Contact Form Not Working:
1. Check browser console for errors
2. Verify Supabase credentials in `.env.local`
3. Check Supabase dashboard → API → Settings
4. Verify tables exist in Table Editor
5. Check Vercel function logs

### Emails Not Sending:
1. Verify Resend API key is correct
2. Check Resend dashboard → Logs
3. Verify domain is set up (if using custom domain)
4. Check spam folder

### Build Errors:
1. Run `npm run build` locally
2. Check for TypeScript errors
3. Verify all imports are correct
4. Check Vercel deployment logs

---

## 🎉 Success Criteria

You're done when:
- ✅ Contact form saves to database
- ✅ Newsletter signup saves to database
- ✅ Emails send successfully
- ✅ Website shows new venture studio branding
- ✅ No errors in console
- ✅ Production site is live

---

**Total Time: ~5 minutes for backend setup + deployment**

**Need help? Check:**
- `BACKEND_SETUP.md` - Detailed setup guide
- `setup-supabase.md` - Step-by-step Supabase instructions
- `IMPLEMENTATION_SUMMARY.md` - What's been completed
