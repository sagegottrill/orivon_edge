-- Orivon Edge Complete Database Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- EXISTING TABLES
-- =====================================================

-- Contact Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  message TEXT NOT NULL,
  inquiry_type VARCHAR(50) DEFAULT 'general' CHECK (inquiry_type IN ('client', 'venture', 'investment', 'general')),
  status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Newsletter Subscriptions Table
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  source VARCHAR(100) DEFAULT 'popup',
  status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed')),
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  unsubscribed_at TIMESTAMP WITH TIME ZONE
);

-- =====================================================
-- NEW TABLES FOR TRAINING PROGRAMS
-- =====================================================

-- Core Skills Track Applications
CREATE TABLE IF NOT EXISTS core_skills_applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  track VARCHAR(100) NOT NULL CHECK (track IN ('Artificial Intelligence', 'Cloud Computing', 'Data Science', 'Cybersecurity')),
  motivation TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'reviewing', 'accepted', 'rejected', 'waitlist')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  reviewed_at TIMESTAMP WITH TIME ZONE,
  reviewed_by UUID
);

-- Corporate Track Applications
CREATE TABLE IF NOT EXISTS corporate_track_applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  current_role VARCHAR(255),
  career_goals TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'reviewing', 'accepted', 'rejected', 'waitlist')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  reviewed_at TIMESTAMP WITH TIME ZONE,
  reviewed_by UUID
);

-- Join Hub Applications (Comprehensive)
CREATE TABLE IF NOT EXISTS join_hub_applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  location VARCHAR(255) NOT NULL,
  interest VARCHAR(100) NOT NULL CHECK (interest IN (
    'training-core', 
    'training-corporate', 
    'incubation', 
    'membership', 
    'partnership', 
    'other'
  )),
  experience_level VARCHAR(50) NOT NULL CHECK (experience_level IN ('beginner', 'intermediate', 'advanced', 'expert')),
  background TEXT NOT NULL,
  goals TEXT NOT NULL,
  availability VARCHAR(50) NOT NULL CHECK (availability IN ('fulltime', 'parttime', 'evening', 'flexible')),
  how_heard VARCHAR(100) NOT NULL CHECK (how_heard IN ('social', 'friend', 'event', 'search', 'other')),
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'reviewing', 'accepted', 'rejected', 'interview', 'waitlist')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  reviewed_at TIMESTAMP WITH TIME ZONE,
  reviewed_by UUID,
  notes TEXT
);

-- =====================================================
-- INDEXES FOR PERFORMANCE
-- =====================================================

-- Existing indexes
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_email ON newsletter_subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_status ON newsletter_subscriptions(status);

-- New indexes for training applications
CREATE INDEX IF NOT EXISTS idx_core_skills_email ON core_skills_applications(email);
CREATE INDEX IF NOT EXISTS idx_core_skills_status ON core_skills_applications(status);
CREATE INDEX IF NOT EXISTS idx_core_skills_track ON core_skills_applications(track);
CREATE INDEX IF NOT EXISTS idx_core_skills_created_at ON core_skills_applications(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_corporate_track_email ON corporate_track_applications(email);
CREATE INDEX IF NOT EXISTS idx_corporate_track_status ON corporate_track_applications(status);
CREATE INDEX IF NOT EXISTS idx_corporate_track_created_at ON corporate_track_applications(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_join_hub_email ON join_hub_applications(email);
CREATE INDEX IF NOT EXISTS idx_join_hub_status ON join_hub_applications(status);
CREATE INDEX IF NOT EXISTS idx_join_hub_interest ON join_hub_applications(interest);
CREATE INDEX IF NOT EXISTS idx_join_hub_created_at ON join_hub_applications(created_at DESC);

-- =====================================================
-- TRIGGERS FOR UPDATED_AT
-- =====================================================

-- Create or replace trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add triggers to existing tables
DROP TRIGGER IF EXISTS update_contact_submissions_updated_at ON contact_submissions;
CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Add triggers to new tables
CREATE TRIGGER update_core_skills_updated_at
  BEFORE UPDATE ON core_skills_applications
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_corporate_track_updated_at
  BEFORE UPDATE ON corporate_track_applications
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_join_hub_updated_at
  BEFORE UPDATE ON join_hub_applications
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- ROW LEVEL SECURITY (RLS)
-- =====================================================

-- Enable RLS on all tables
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE core_skills_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE corporate_track_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE join_hub_applications ENABLE ROW LEVEL SECURITY;

-- =====================================================
-- RLS POLICIES - PUBLIC INSERT (Anonymous users can submit)
-- =====================================================

-- Existing policies
DROP POLICY IF EXISTS "Anyone can insert contact submissions" ON contact_submissions;
CREATE POLICY "Anyone can insert contact submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

DROP POLICY IF EXISTS "Anyone can insert newsletter subscriptions" ON newsletter_subscriptions;
CREATE POLICY "Anyone can insert newsletter subscriptions"
  ON newsletter_subscriptions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- New policies for training applications
CREATE POLICY "Anyone can insert core skills applications"
  ON core_skills_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can insert corporate track applications"
  ON corporate_track_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can insert join hub applications"
  ON join_hub_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- =====================================================
-- RLS POLICIES - AUTHENTICATED ACCESS (Admin/Staff)
-- =====================================================

-- Contact submissions
DROP POLICY IF EXISTS "Authenticated users can view all contact submissions" ON contact_submissions;
CREATE POLICY "Authenticated users can view all contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "Authenticated users can update contact submissions" ON contact_submissions;
CREATE POLICY "Authenticated users can update contact submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true);

-- Newsletter
DROP POLICY IF EXISTS "Authenticated users can view all newsletter subscriptions" ON newsletter_subscriptions;
CREATE POLICY "Authenticated users can view all newsletter subscriptions"
  ON newsletter_subscriptions
  FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "Authenticated users can update newsletter subscriptions" ON newsletter_subscriptions;
CREATE POLICY "Authenticated users can update newsletter subscriptions"
  ON newsletter_subscriptions
  FOR UPDATE
  TO authenticated
  USING (true);

-- Core Skills Applications
CREATE POLICY "Authenticated users can view core skills applications"
  ON core_skills_applications
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update core skills applications"
  ON core_skills_applications
  FOR UPDATE
  TO authenticated
  USING (true);

-- Corporate Track Applications
CREATE POLICY "Authenticated users can view corporate track applications"
  ON corporate_track_applications
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update corporate track applications"
  ON corporate_track_applications
  FOR UPDATE
  TO authenticated
  USING (true);

-- Join Hub Applications
CREATE POLICY "Authenticated users can view join hub applications"
  ON join_hub_applications
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update join hub applications"
  ON join_hub_applications
  FOR UPDATE
  TO authenticated
  USING (true);

-- =====================================================
-- ANALYTICS VIEWS
-- =====================================================

-- Existing views
DROP VIEW IF EXISTS contact_submissions_analytics;
CREATE OR REPLACE VIEW contact_submissions_analytics AS
SELECT 
  DATE_TRUNC('day', created_at) as date,
  inquiry_type,
  COUNT(*) as count,
  status
FROM contact_submissions
GROUP BY DATE_TRUNC('day', created_at), inquiry_type, status
ORDER BY date DESC;

DROP VIEW IF EXISTS newsletter_growth;
CREATE OR REPLACE VIEW newsletter_growth AS
SELECT 
  DATE_TRUNC('day', subscribed_at) as date,
  COUNT(*) as new_subscribers,
  SUM(COUNT(*)) OVER (ORDER BY DATE_TRUNC('day', subscribed_at)) as total_subscribers
FROM newsletter_subscriptions
WHERE status = 'active'
GROUP BY DATE_TRUNC('day', subscribed_at)
ORDER BY date DESC;

-- New analytics views for training programs
CREATE OR REPLACE VIEW core_skills_analytics AS
SELECT 
  DATE_TRUNC('day', created_at) as date,
  track,
  status,
  COUNT(*) as count
FROM core_skills_applications
GROUP BY DATE_TRUNC('day', created_at), track, status
ORDER BY date DESC;

CREATE OR REPLACE VIEW corporate_track_analytics AS
SELECT 
  DATE_TRUNC('day', created_at) as date,
  status,
  COUNT(*) as count
FROM corporate_track_applications
GROUP BY DATE_TRUNC('day', created_at), status
ORDER BY date DESC;

CREATE OR REPLACE VIEW join_hub_analytics AS
SELECT 
  DATE_TRUNC('day', created_at) as date,
  interest,
  experience_level,
  status,
  COUNT(*) as count
FROM join_hub_applications
GROUP BY DATE_TRUNC('day', created_at), interest, experience_level, status
ORDER BY date DESC;

-- Overall applications dashboard view
CREATE OR REPLACE VIEW applications_dashboard AS
SELECT 
  'Core Skills' as program,
  status,
  COUNT(*) as count
FROM core_skills_applications
GROUP BY status
UNION ALL
SELECT 
  'Corporate Track' as program,
  status,
  COUNT(*) as count
FROM corporate_track_applications
GROUP BY status
UNION ALL
SELECT 
  'Join Hub' as program,
  status,
  COUNT(*) as count
FROM join_hub_applications
GROUP BY status
ORDER BY program, status;

-- =====================================================
-- GRANT ACCESS TO VIEWS
-- =====================================================

GRANT SELECT ON contact_submissions_analytics TO authenticated;
GRANT SELECT ON newsletter_growth TO authenticated;
GRANT SELECT ON core_skills_analytics TO authenticated;
GRANT SELECT ON corporate_track_analytics TO authenticated;
GRANT SELECT ON join_hub_analytics TO authenticated;
GRANT SELECT ON applications_dashboard TO authenticated;

-- =====================================================
-- NOTIFICATION FUNCTION (Optional - for email alerts)
-- =====================================================

CREATE OR REPLACE FUNCTION notify_new_application()
RETURNS TRIGGER AS $$
BEGIN
  -- This function can be extended to send notifications
  -- For now, it just returns the new record
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add notification triggers (optional)
CREATE TRIGGER notify_core_skills_application
  AFTER INSERT ON core_skills_applications
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_application();

CREATE TRIGGER notify_corporate_track_application
  AFTER INSERT ON corporate_track_applications
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_application();

CREATE TRIGGER notify_join_hub_application
  AFTER INSERT ON join_hub_applications
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_application();

-- =====================================================
-- COMPLETED!
-- =====================================================
-- Schema created successfully
-- Next steps:
-- 1. Update your TypeScript types in supabase.ts
-- 2. Create helper functions for new tables
-- 3. Connect forms to Supabase
