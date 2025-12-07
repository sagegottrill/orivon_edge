# ✅ Supabase Setup - COMPLETE THIS NOW

Your Supabase credentials are already configured! Now you just need to set up the database tables.

## 🎯 Step 1: Run the Database Schema (2 minutes)

1. **Go to your Supabase Dashboard**
   - Visit: https://supabase.com/dashboard/project/akfspsfnwtivthgkgfnz

2. **Open SQL Editor**
   - Click on "SQL Editor" in the left sidebar
   - Click "New Query"

3. **Copy & Paste the Schema**
   - Open the file: `supabase/schema.sql`
   - Copy ALL the contents (Ctrl+A, Ctrl+C)
   - Paste into the SQL Editor
   - Click "Run" button

4. **Verify Tables Created**
   - Go to "Table Editor" in the left sidebar
   - You should see:
     - ✅ `contact_submissions`
     - ✅ `newsletter_subscriptions`

5. **Fix Missing Table Error**
   - If you see an error about `program_applications`, open and run: `supabase/fix_missing_table.sql`
   - This creates the table needed for the Dashboard.

---

## 🎯 Step 2: Get Resend API Key (2 minutes)

1. **Go to Resend**
   - Visit: https://resend.com/signup

2. **Sign Up / Login**
   - Use your email to create an account

3. **Create API Key**
   - Go to "API Keys" in the dashboard
   - Click "Create API Key"
   - Name it: "orivon-edge-website"
   - Copy the key (starts with `re_...`)

4. **Add to .env.local**
   - Open `.env.local`
   - Replace `RESEND_API_KEY=` with your key:
   ```
   RESEND_API_KEY=re_your_key_here
   ```

---

## 🎯 Step 3: Test Your Backend (1 minute)

```bash
# Start the dev server
npm run dev

# Open browser to http://localhost:8080
# Try submitting the contact form
# Check Supabase dashboard → Table Editor → contact_submissions
```

---

## 🎯 Step 4: Deploy to Vercel

1. **Add Environment Variables to Vercel**
   - Go to your Vercel project dashboard
   - Settings → Environment Variables
   - Add these 3 variables:
     ```
     VITE_SUPABASE_URL=https://akfspsfnwtivthgkgfnz.supabase.co
     VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
     RESEND_API_KEY=re_your_key_here
     ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

---

## ✅ You're Done!

Your backend is now fully functional:
- ✅ Contact forms save to database
- ✅ Newsletter signups save to database
- ✅ Emails send automatically
- ✅ Admin notifications work
- ✅ Auto-replies work

---

## 🔗 Quick Links

- **Supabase Dashboard**: https://supabase.com/dashboard/project/akfspsfnwtivthgkgfnz
- **Resend Dashboard**: https://resend.com/emails
- **SQL Schema File**: `supabase/schema.sql`

---

**Need help? Check `BACKEND_SETUP.md` for detailed instructions.**
