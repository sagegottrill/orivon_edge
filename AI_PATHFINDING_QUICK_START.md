# 🚀 AI Pathfinding - Quick Start (5 Minutes)

Get the AI Pathfinding platform running in 5 minutes!

## ⚡ Prerequisites
- Node.js 18+ installed
- Supabase account (free)
- 5 minutes

## 📝 Steps

### 1️⃣ Create Supabase Project (2 min)
1. Go to [supabase.com](https://supabase.com) → New Project
2. Name: **AI Pathfinding**, choose password, select region
3. Wait for setup to complete

### 2️⃣ Setup Database (1 min)
1. In Supabase dashboard → **SQL Editor** → **New query**
2. Copy/paste `supabase/ai_pathfinding_schema.sql` → **Run**
3. Copy/paste `supabase/ai_path_generator.sql` → **Run**
4. Copy/paste `supabase/seed_pathfinding_data.sql` → **Run**

### 3️⃣ Configure Environment (1 min)
1. Copy `.env.example` to `.env`
2. In Supabase → **Settings** → **API**
3. Copy **Project URL** and **anon public** key
4. Paste into `.env`:
```env
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJxxxxx...
```

### 4️⃣ Start Application (1 min)
```bash
npm install
npm run dev
```

Visit: `http://localhost:5173/pathfinding/onboarding`

## ✅ Test It Works

1. **Complete Onboarding**:
   - Enter your name and email
   - Select "Full Stack Developer" as target role
   - Rate your skills (try setting some to 30-40)
   - Set learning preferences
   - Wait for AI to generate your path

2. **View Dashboard**: See your JRS score, recommendations, and next steps

3. **Browse Courses**: Visit `/pathfinding/courses` and search for "JavaScript"

4. **View Learning Path**: Click "View Full Path" from dashboard

5. **Admin Panel**: Visit `/pathfinding/admin` to see platform stats

## 🎉 Done!

You now have a fully functional AI-powered learning platform!

## 🆘 Issues?

**Build Error?**
```bash
rm -rf node_modules
npm install
```

**Database Error?**
- Check `.env` values are correct (no quotes needed)
- Verify SQL scripts ran without errors
- Restart Supabase project if paused

**Can't see data?**
- Check browser console for errors
- Verify Supabase URL ends with `.supabase.co`
- Confirm anon key is the **public** key, not service role key

---

**Full setup guide**: See `AI_PATHFINDING_SETUP.md`
