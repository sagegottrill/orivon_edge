# Backend Setup Guide for Orivon Edge

This guide will help you set up the complete backend infrastructure for your website, including database, email service, and serverless functions.

## 🎯 Overview

Your backend consists of:
1. **Supabase** - PostgreSQL database for storing form submissions and newsletter subscriptions
2. **Resend** - Email service for sending notifications and welcome emails
3. **Vercel Serverless Functions** - API endpoints for handling form submissions

---

## 📋 Prerequisites

- Node.js 18+ installed
- A Vercel account (free tier works)
- A Supabase account (free tier works)
- A Resend account (free tier works)

---

## 🚀 Step 1: Set Up Supabase

### 1.1 Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Fill in:
   - **Name**: `orivon-edge-website`
   - **Database Password**: (generate a strong password and save it)
   - **Region**: Choose closest to your users
4. Click "Create new project" and wait 2-3 minutes

### 1.2 Run the Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Click "New Query"
3. Copy the entire contents of `supabase/schema.sql` from this project
4. Paste it into the SQL editor
5. Click "Run" to execute the schema

This creates:
- `contact_submissions` table
- `newsletter_subscriptions` table
- Indexes for performance
- Row Level Security policies
- Analytics views

### 1.3 Get Your Supabase Credentials

1. In Supabase dashboard, go to **Settings** → **API**
2. Copy these values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon public** key (long string starting with `eyJ...`)

---

## 📧 Step 2: Set Up Resend

### 2.1 Create a Resend Account

1. Go to [resend.com](https://resend.com) and sign up
2. Verify your email address

### 2.2 Add Your Domain (Recommended)

1. In Resend dashboard, go to **Domains**
2. Click "Add Domain"
3. Enter your domain: `orivonedge.dev`
4. Follow the DNS setup instructions:
   - Add the provided DNS records to your domain registrar
   - Wait for verification (usually 5-30 minutes)

**Note**: If you don't have a custom domain yet, you can use Resend's test domain for development.

### 2.3 Get Your API Key

1. In Resend dashboard, go to **API Keys**
2. Click "Create API Key"
3. Name it: `orivon-edge-website`
4. Copy the API key (starts with `re_...`)
5. **Save it securely** - you won't see it again!

---

## ⚙️ Step 3: Configure Environment Variables

### 3.1 Local Development

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in your credentials in `.env.local`:
   ```env
   # Supabase Configuration
   VITE_SUPABASE_URL=https://xxxxx.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

   # Resend Email Service
   RESEND_API_KEY=re_xxxxxxxxxxxxx

   # Email Configuration
   VITE_CONTACT_EMAIL=info@orivonedge.dev
   VITE_ADMIN_EMAIL=admin@orivonedge.dev

   # Environment
   VITE_ENV=development
   ```

### 3.2 Production (Vercel)

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable:
   - `VITE_SUPABASE_URL` → Your Supabase URL
   - `VITE_SUPABASE_ANON_KEY` → Your Supabase anon key
   - `RESEND_API_KEY` → Your Resend API key
   - `VITE_CONTACT_EMAIL` → `info@orivonedge.dev`
   - `VITE_ADMIN_EMAIL` → `admin@orivonedge.dev`
   - `VITE_ENV` → `production`

4. Make sure to select **Production**, **Preview**, and **Development** for each variable

---

## 🧪 Step 4: Test Your Setup

### 4.1 Test Locally

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open your browser to `http://localhost:8080`

3. Test the contact form:
   - Fill out the form
   - Submit it
   - Check your Supabase dashboard → **Table Editor** → `contact_submissions`
   - You should see your submission

4. Test the newsletter popup:
   - Wait for the popup to appear (or trigger it)
   - Enter an email
   - Check Supabase → `newsletter_subscriptions`

### 4.2 Test Email Notifications

1. Submit a contact form
2. Check your admin email (`admin@orivonedge.dev`)
3. You should receive a notification email
4. The user should receive an auto-reply

---

## 🚀 Step 5: Deploy to Vercel

### 5.1 Install Vercel CLI (Optional)

```bash
npm i -g vercel
```

### 5.2 Deploy

```bash
# Login to Vercel
vercel login

# Deploy
vercel --prod
```

Or simply push to your GitHub repository if you have Vercel connected.

### 5.3 Verify Deployment

1. Visit your deployed site
2. Test the contact form
3. Test the newsletter signup
4. Check Supabase for new entries
5. Check your email for notifications

---

## 📊 Step 6: Monitor Your Backend

### 6.1 Supabase Dashboard

- **Table Editor**: View all submissions and subscriptions
- **SQL Editor**: Run custom queries
- **Logs**: Monitor database activity
- **API**: Check API usage

### 6.2 Resend Dashboard

- **Emails**: View all sent emails
- **Logs**: Check delivery status
- **Analytics**: Monitor email performance

### 6.3 Vercel Dashboard

- **Functions**: Monitor serverless function execution
- **Logs**: View function logs
- **Analytics**: Track website performance

---

## 🔒 Security Best Practices

1. **Never commit `.env.local`** - It's already in `.gitignore`
2. **Use Row Level Security** - Already configured in the schema
3. **Rotate API keys** regularly
4. **Monitor for abuse** - Check Supabase logs for suspicious activity
5. **Set up rate limiting** - Consider adding rate limiting to your API endpoints

---

## 🐛 Troubleshooting

### Contact Form Not Submitting

1. Check browser console for errors
2. Verify Supabase credentials in `.env.local`
3. Check Supabase dashboard → **API** → **Settings** for correct URL
4. Ensure RLS policies are enabled (run schema.sql again if needed)

### Emails Not Sending

1. Verify Resend API key is correct
2. Check Resend dashboard → **Logs** for errors
3. Ensure your domain is verified (if using custom domain)
4. Check spam folder for test emails

### Serverless Functions Failing

1. Check Vercel dashboard → **Functions** → **Logs**
2. Verify environment variables are set in Vercel
3. Ensure API routes are in the `api/` directory
4. Check that `@vercel/node` is installed

---

## 📈 Next Steps

### Optional Enhancements

1. **Add reCAPTCHA** to prevent spam
2. **Set up email templates** in Resend
3. **Create admin dashboard** to view submissions
4. **Add analytics tracking** for form conversions
5. **Set up automated backups** for Supabase

### Monitoring & Alerts

1. Set up Supabase email alerts for errors
2. Configure Vercel notifications for function failures
3. Monitor Resend delivery rates

---

## 📞 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review Supabase docs: [supabase.com/docs](https://supabase.com/docs)
3. Review Resend docs: [resend.com/docs](https://resend.com/docs)
4. Check Vercel docs: [vercel.com/docs](https://vercel.com/docs)

---

## ✅ Checklist

- [ ] Supabase project created
- [ ] Database schema executed
- [ ] Supabase credentials copied
- [ ] Resend account created
- [ ] Domain added to Resend (optional)
- [ ] Resend API key obtained
- [ ] `.env.local` configured
- [ ] Local testing completed
- [ ] Vercel environment variables set
- [ ] Production deployment successful
- [ ] Contact form tested in production
- [ ] Newsletter signup tested in production
- [ ] Email notifications working

---

**Congratulations! Your backend is now fully set up and ready to handle form submissions and newsletter signups! 🎉**
