# Backend Quick Start - 5 Minutes Setup

## 🚀 Super Fast Setup

### 1. Supabase (2 minutes)
```bash
1. Go to supabase.com → New Project
2. Copy Project URL and anon key
3. Go to SQL Editor → Paste contents of supabase/schema.sql → Run
```

### 2. Resend (2 minutes)
```bash
1. Go to resend.com → Sign up
2. API Keys → Create API Key → Copy it
```

### 3. Environment Variables (1 minute)
```bash
# Copy .env.example to .env.local
cp .env.example .env.local

# Fill in these 3 values:
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1...
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

### 4. Test It
```bash
npm run dev
# Submit contact form → Check Supabase dashboard
```

### 5. Deploy to Vercel
```bash
# Add same 3 env vars to Vercel dashboard
vercel --prod
```

## ✅ Done!

Your backend is live. Forms save to Supabase, emails send via Resend.

---

## 📋 What You Get

✅ Contact form submissions saved to database  
✅ Newsletter signups saved to database  
✅ Email notifications to admin  
✅ Auto-reply emails to users  
✅ Welcome emails for newsletter subscribers  
✅ Analytics views in Supabase  
✅ Row-level security enabled  
✅ Serverless API endpoints  

---

## 🔗 Quick Links

- **Supabase Dashboard**: [app.supabase.com](https://app.supabase.com)
- **Resend Dashboard**: [resend.com/emails](https://resend.com/emails)
- **Vercel Dashboard**: [vercel.com/dashboard](https://vercel.com/dashboard)

---

## 🆘 Having Issues?

See full setup guide: `BACKEND_SETUP.md`
