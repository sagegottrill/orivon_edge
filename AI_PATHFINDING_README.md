# AI Pathfinding Platform 🎯

A complete AI-powered learning platform that creates personalized career paths for Nigerian tech talent. Think of it as "GPS for your tech career" - it understands where you are, where you want to go, and creates the optimal route.

## 🌟 Overview

The AI Pathfinding platform analyzes a learner's current skills, career goals, learning style, and available time to generate a customized learning roadmap. It tracks progress with three key metrics:

- **JRS (Job Readiness Score)**: 0-100 score showing how ready you are for your target role
- **SAV (Skill Acquisition Velocity)**: Skills learned per week - measures learning speed
- **PCR (Path Completion Rate)**: Percentage of learning path completed

## 🏗️ Architecture

### Database Schema (`ai_pathfinding_schema.sql`)

**Core Tables:**
- `learner_profiles` - Extended user profiles with career goals
- `skill_assessments` - Initial and progress skill evaluations
- `learning_paths` - AI-generated personalized paths
- `path_steps` - Individual steps in a learning path
- `path_progress` - Overall path completion tracking
- `step_progress` - Detailed step-level progress
- `learning_sessions` - Individual learning sessions for analytics
- `learner_metrics` - JRS, SAV, PCR calculations
- `path_recommendations` - AI-generated suggestions

**Reference Data:**
- `skills` - Master catalog of technical & soft skills
- `job_roles` - Target career positions with market data
- `courses` - Curated courses from multiple platforms
- `assessments` - Skill tests and evaluations
- `certificates` - Earned credentials

**Key Features:**
- Row Level Security (RLS) enabled on all user data
- Automated metrics calculation functions
- Comprehensive indexes for performance
- 40+ skills, 12+ job roles, sample courses included

### Frontend Components

**Pages:**
- `PathfindingOnboarding.tsx` - 4-step onboarding flow
  - Welcome & introduction
  - Profile creation (goals, background)
  - Skill assessment (10 skill ratings)
  - Learning preferences
  - AI path generation

- `PathfindingDashboard.tsx` - Main learner dashboard
  - Key metrics display (JRS, SAV, PCR)
  - Next steps section
  - AI recommendations
  - Recent activity
  - Learning stats

**API Layer (`pathfinding-api.ts`):**
- Complete Supabase integration
- CRUD operations for all entities
- Dashboard data aggregation
- Progress tracking helpers
- Metrics calculation triggers

**Types (`pathfinding.ts`):**
- Comprehensive TypeScript definitions
- 20+ interfaces and types
- Type-safe API calls

## 🚀 Setup Instructions

### 1. Database Setup

Run the PowerShell setup script:

```powershell
.\setup-pathfinding-db.ps1
```

Or manually execute SQL files:

```bash
# 1. Create schema
psql <your-connection-string> -f supabase/ai_pathfinding_schema.sql

# 2. Seed data
psql <your-connection-string> -f supabase/seed_pathfinding_data.sql
```

### 2. Frontend Configuration

The routes are already added to `App.tsx`:
- `/pathfinding/onboarding` - Start here for new learners
- `/pathfinding/dashboard` - Main dashboard for active learners

### 3. Environment Variables

Make sure your Supabase configuration is set in `src/lib/supabase.ts`

## 📊 Key Metrics Explained

### Job Readiness Score (JRS)
Calculated by comparing learner's acquired skills against required skills for their target role. Factors include:
- Number of required skills mastered
- Proficiency level in each skill
- Soft skills development
- Project completion
- Assessment scores

**Formula:** (Acquired Required Skills / Total Required Skills) × 100

### Skill Acquisition Velocity (SAV)
Measures how quickly a learner is gaining new skills.

**Formula:** Total Skills Acquired / Weeks Since Starting

**Benchmarks:**
- < 1.0: Building foundation
- 1.0-2.0: Good progress
- > 2.0: Exceptional velocity

### Path Completion Rate (PCR)
Simple percentage of learning path completed.

**Formula:** (Completed Steps / Total Steps) × 100

## 🎯 User Flows

### New Learner Flow
1. Visit `/pathfinding/onboarding`
2. Complete 4-step onboarding:
   - Profile information
   - Skill assessment
   - Learning preferences
   - AI generates personalized path
3. Redirected to dashboard
4. Start first learning step

### Returning Learner Flow
1. Visit `/pathfinding/dashboard`
2. View current metrics (JRS, SAV, PCR)
3. See next recommended steps
4. Check AI recommendations
5. Continue learning

### Learning Session Flow
1. Click on a learning step
2. Session automatically tracked
3. Complete course/project
4. Mark step as complete
5. Metrics automatically updated
6. New recommendations generated

## 🔧 AI Path Generation Logic

The platform uses a multi-factor algorithm to create personalized paths:

### Inputs Analyzed:
- Current skill levels (from assessment)
- Target job role requirements
- Experience level (beginner/intermediate/advanced)
- Weekly hours available
- Learning style preference
- Previous skills and background
- Industry preferences

### Path Creation Process:
1. **Gap Analysis:** Compare current skills vs. target role requirements
2. **Prerequisite Mapping:** Order skills based on dependencies
3. **Course Selection:** Match skills to best available courses
4. **Time Allocation:** Distribute learning based on available hours
5. **Difficulty Sequencing:** Start easier, progress to advanced
6. **Milestone Creation:** Insert projects and assessments
7. **Personalization:** Adjust for learning style and preferences

### Path Optimization:
- Minimizes total learning time
- Maximizes free resources when possible
- Prioritizes high-demand skills
- Balances technical and soft skills
- Includes practical projects

## 📈 Analytics & Reporting

### Individual Metrics
- Real-time JRS, SAV, PCR tracking
- Learning velocity trends
- Engagement scores
- Streak tracking
- Session duration analytics

### Platform-Level Metrics
- Total active learners
- Average completion rates
- Most popular career paths
- Course effectiveness ratings
- Regional distribution
- Gender parity tracking

## 🛠️ Extending the Platform

### Adding New Skills
```sql
INSERT INTO skills (name, category, difficulty_level, demand_score, estimated_hours)
VALUES ('New Skill', 'technical', 'intermediate', 85, 40);
```

### Adding New Courses
```sql
INSERT INTO courses (title, platform, difficulty_level, is_free, ...)
VALUES ('Course Title', 'platform', 'beginner', true, ...);

-- Link to skills
INSERT INTO course_skills (course_id, skill_id, proficiency_gain)
VALUES (<course_id>, <skill_id>, 'intermediate');
```

### Creating Custom Learning Paths
Use the `createLearningPath` API function with custom steps and sequencing.

## 🔐 Security

- Row Level Security (RLS) enabled on all user data
- Learners can only see their own profiles and progress
- Public read access for skills, courses, job roles
- Secure session tracking
- No exposure of other learners' data

## 🌍 Localization

Currently supports:
- English (primary)
- Nigerian context (salary ranges in Naira)
- Nigerian market job data

Easily extensible for:
- Multiple languages
- Regional job markets
- Local currency conversion

## 📦 Dependencies

Frontend:
- React 18+
- TypeScript
- React Router
- Lucide Icons
- Tailwind CSS

Backend:
- Supabase (PostgreSQL)
- Row Level Security
- Real-time subscriptions (optional)

## 🎓 Sample Data Included

- **40+ Skills:** Frontend, Backend, Data, Mobile, Design
- **12 Job Roles:** Full Stack, Data Scientist, UI/UX, etc.
- **15+ Courses:** From Coursera, Udemy, edX
- **Nigerian Market Data:** Salary ranges, job openings, growth rates

## 🚦 Status & Roadmap

### ✅ Completed
- Database schema with 20+ tables
- TypeScript types and API layer
- Onboarding flow (4 steps)
- Dashboard with metrics display
- Row Level Security policies
- Seed data with skills, roles, courses

### 🔄 In Progress
- AI path generation algorithm (currently placeholder)
- Recommendation engine logic
- Course progress tracking UI
- Assessment system UI

### 📋 Planned
- Real-time progress updates
- Peer comparison features
- Mentor matching
- Job board integration
- Certificate verification
- Mobile app (React Native)
- WhatsApp bot integration
- SMS reminders for low-connectivity areas

## 💡 Key Insights

### Why This Works for Nigeria

1. **Connectivity-Aware:** Platform tracks sessions, works offline where possible
2. **Cost-Conscious:** Prioritizes free resources, shows costs upfront
3. **Market-Aligned:** Job data specific to Nigerian tech market
4. **Flexible:** Accommodates varied weekly hours (as low as 1hr/week)
5. **Practical:** Heavy emphasis on projects and real-world skills

### Success Metrics

- 78%+ path completion rate target
- 87%+ job readiness score for graduates
- 3x faster learning vs. traditional methods
- 10,000+ learners target for 2025

## 🤝 Contributing

To add new features:
1. Extend database schema if needed
2. Add TypeScript types
3. Create API functions in `pathfinding-api.ts`
4. Build UI components
5. Update this README

## 📞 Support

For issues or questions:
- Check database schema comments
- Review API function documentation
- Test with seed data first
- Verify RLS policies for data access issues

## 🎯 Vision

The AI Pathfinding platform represents the future of tech education in Africa - personalized, data-driven, and outcome-focused. Every learner gets a unique path optimized for their success.

**Goal:** Make Nigeria's tech talent globally competitive through intelligent, adaptive learning.

---

Built with ❤️ by Orivon Edge
