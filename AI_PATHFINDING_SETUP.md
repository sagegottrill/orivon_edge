# 🚀 AI Pathfinding Platform - Complete Setup Guide

This guide will help you deploy the complete AI Pathfinding platform with database, backend, and frontend.

## 📋 Prerequisites

- Node.js 18+ and npm
- Supabase account (free tier works)
- PostgreSQL client (`psql`) installed locally
- Git

## 🎯 Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click **New Project**
3. Fill in:
   - **Name**: AI Pathfinding Platform
   - **Database Password**: (choose a strong password, save it!)
   - **Region**: Choose closest to your users
   - **Pricing Plan**: Free tier is sufficient
4. Click **Create new project** and wait 2-3 minutes

## 🗄️ Step 2: Setup Database

### Option A: Using Setup Script (Recommended)

**Windows (PowerShell):**
```powershell
cd supabase
.\setup-pathfinding.ps1
```

**Mac/Linux:**
```bash
cd supabase
chmod +x setup-pathfinding.sh
./setup-pathfinding.sh
```

When prompted, enter:
- **Project Reference ID**: Found in your project URL `https://[PROJECT_REF].supabase.co`
- **Database Password**: The password you set when creating the project

### Option B: Manual Setup via Supabase Dashboard

1. In your Supabase project, go to **SQL Editor**
2. Click **New query**
3. Copy and paste contents of `supabase/ai_pathfinding_schema.sql`
4. Click **Run** and wait for completion
5. Repeat for `supabase/ai_path_generator.sql`
6. Repeat for `supabase/seed_pathfinding_data.sql`

## 🔑 Step 3: Get API Credentials

1. In Supabase dashboard, go to **Settings** → **API**
2. Copy these values:
   - **Project URL** (under Configuration)
   - **anon public** key (under Project API keys)

## ⚙️ Step 4: Configure Frontend

1. In project root, create `.env` file:
```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

2. Replace placeholders with your actual values from Step 3

## 📦 Step 5: Install Dependencies

```bash
npm install
```

## 🏃 Step 6: Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173/pathfinding/onboarding` to start!

## 🧪 Step 7: Test the Platform

### Test Learner Flow:
1. Visit `/pathfinding/onboarding`
2. Fill out profile (try **Full Stack Developer** as target role)
3. Complete skill assessment (rate your current skills)
4. Set learning preferences
5. Wait for AI to generate your personalized path
6. View dashboard at `/pathfinding/dashboard`
7. Click "View Full Path" to see all learning steps
8. Start a learning step and mark it complete

### Test Course Browser:
1. Visit `/pathfinding/courses`
2. Try search: "JavaScript", "Python", "React"
3. Filter by platform, difficulty, price
4. Click "View Course" to open external course link

### Test Admin Panel:
1. Visit `/pathfinding/admin`
2. View platform statistics
3. Browse all learners
4. Search by name or role
5. Filter by status

## 🔐 Step 8: Enable Authentication (Optional but Recommended)

Currently using placeholder user IDs. To add real auth:

1. In Supabase dashboard, go to **Authentication** → **Providers**
2. Enable **Email** provider (or Google, GitHub, etc.)
3. Update `src/lib/supabase.ts` to remove placeholder user ID
4. Wrap app in auth context:

```tsx
// src/contexts/AuthContext.tsx
import { createContext, useContext, useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

const AuthContext = createContext<{ user: User | null }>({ user: null });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
```

5. Wrap app in `main.tsx`:
```tsx
import { AuthProvider } from './contexts/AuthContext';

<AuthProvider>
  <App />
</AuthProvider>
```

6. Replace all `'demo-user-id'` occurrences with `user?.id` in API calls

## 📊 Database Schema Overview

### Core Tables:
- **learner_profiles**: User profiles with preferences and experience
- **skill_assessments**: Skills rated 0-100 by learners
- **learning_paths**: AI-generated personalized paths
- **path_steps**: Individual steps in a path (courses, assessments, projects)
- **step_progress**: Tracking completion of each step
- **learning_sessions**: Time tracking for each learning session
- **learner_metrics**: JRS, SAV, PCR scores
- **path_recommendations**: AI-generated suggestions

### Reference Tables:
- **skills**: Master list of 45+ skills
- **courses**: Curated courses from Coursera, Udemy, edX
- **job_roles**: 12 target career roles with market data

### Key Metrics:
- **JRS (Job Readiness Score)**: 0-100 score measuring preparedness for target role
- **SAV (Skill Acquisition Velocity)**: Skills learned per week
- **PCR (Path Completion Rate)**: Percentage of path completed

## 🤖 AI Path Generation Algorithm

The platform uses a **greedy skill gap algorithm**:

1. Gets required skills for target job role (sorted by importance + demand)
2. Compares to learner's current skills from assessment
3. Finds best courses for each skill gap:
   - Prioritizes free courses
   - Considers completion rate, rating, recency
   - Respects difficulty levels
4. Creates sequential path with prerequisites
5. Adds assessments every 3 courses
6. Adds capstone project at end
7. Calculates total hours and estimated weeks

## 🎨 Frontend Architecture

### Pages:
- **PathfindingDashboard**: Learner home with metrics and recommendations
- **PathfindingOnboarding**: 4-step profile creation and assessment
- **LearningPathView**: Step-by-step learning interface
- **CoursesBrowser**: Search and filter course library
- **AdminDashboard**: Platform overview and learner management

### Components:
- Uses shadcn/ui components (Button, Card, Badge, Progress, etc.)
- Tailwind CSS for styling
- Lucide React for icons
- Responsive design (mobile-first)

## 🚀 Deployment

### Deploy to Vercel:

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Deploy!

### Deploy to Netlify:

1. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
2. Add environment variables (same as Vercel)
3. Deploy!

## 🐛 Troubleshooting

### Database Connection Issues:
- Verify project URL is correct (check for typos)
- Confirm anon key is the public key, not the service role key
- Check Supabase project is not paused (free tier pauses after 1 week inactivity)

### Build Errors:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check TypeScript errors
npm run build
```

### CORS Issues:
- Supabase allows all origins by default
- If issues persist, check **Authentication** → **URL Configuration** in dashboard

### RLS Policy Errors:
- RLS policies are set for `auth.uid()`
- When using placeholder IDs, you may need to temporarily disable RLS:
```sql
ALTER TABLE learner_profiles DISABLE ROW LEVEL SECURITY;
-- (repeat for other tables)
```
- **Warning**: Only disable RLS for testing, never in production!

## 📈 Next Steps

### Essential Features:
- [ ] Add real authentication (Supabase Auth)
- [ ] Build assessment taking UI
- [ ] Create individual course detail pages
- [ ] Add certificate generation (use jsPDF or similar)
- [ ] Implement background metrics calculation (Supabase Edge Functions)

### Nice-to-Have Features:
- [ ] Add profile picture upload (Supabase Storage)
- [ ] Build messaging/notifications system
- [ ] Create mobile app (React Native)
- [ ] Add analytics dashboard with charts (Recharts)
- [ ] Implement skill endorsements from peers
- [ ] Add discussion forums per course
- [ ] Create mentor matching system
- [ ] Build project showcase portfolio

## 📚 Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [React Router v6 Guide](https://reactrouter.com/en/main)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)

## 🆘 Support

If you encounter issues:

1. Check Supabase logs: **Logs** → **Postgres Logs** in dashboard
2. Check browser console for frontend errors
3. Verify environment variables are loaded (`console.log(import.meta.env)`)
4. Test database connection in SQL Editor

## 🎉 Success Checklist

- [ ] Supabase project created
- [ ] All SQL scripts executed successfully
- [ ] Environment variables configured
- [ ] Dependencies installed
- [ ] Dev server running
- [ ] Can complete onboarding flow
- [ ] Dashboard loads with metrics
- [ ] Can browse courses
- [ ] Can view learning path
- [ ] Admin panel shows statistics

**Congratulations! Your AI Pathfinding Platform is live! 🚀**
