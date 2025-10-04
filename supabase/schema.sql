-- Orivon Edge Database Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

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

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_email ON newsletter_subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_status ON newsletter_subscriptions(status);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add trigger to contact_submissions
CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create policies for public insert (anyone can submit forms)
CREATE POLICY "Anyone can insert contact submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can insert newsletter subscriptions"
  ON newsletter_subscriptions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policies for authenticated users (admin access)
CREATE POLICY "Authenticated users can view all contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update contact submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can view all newsletter subscriptions"
  ON newsletter_subscriptions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update newsletter subscriptions"
  ON newsletter_subscriptions
  FOR UPDATE
  TO authenticated
  USING (true);

-- Create a view for analytics (optional)
CREATE OR REPLACE VIEW contact_submissions_analytics AS
SELECT 
  DATE_TRUNC('day', created_at) as date,
  inquiry_type,
  COUNT(*) as count,
  status
FROM contact_submissions
GROUP BY DATE_TRUNC('day', created_at), inquiry_type, status
ORDER BY date DESC;

CREATE OR REPLACE VIEW newsletter_growth AS
SELECT 
  DATE_TRUNC('day', subscribed_at) as date,
  COUNT(*) as new_subscribers,
  SUM(COUNT(*)) OVER (ORDER BY DATE_TRUNC('day', subscribed_at)) as total_subscribers
FROM newsletter_subscriptions
WHERE status = 'active'
GROUP BY DATE_TRUNC('day', subscribed_at)
ORDER BY date DESC;

-- Grant access to views
GRANT SELECT ON contact_submissions_analytics TO authenticated;
GRANT SELECT ON newsletter_growth TO authenticated;

-- Insert sample data (optional - remove in production)
-- INSERT INTO contact_submissions (name, email, company, message, inquiry_type) 
-- VALUES ('John Doe', 'john@example.com', 'Example Corp', 'Interested in your services', 'client');

-- INSERT INTO newsletter_subscriptions (email, source) 
-- VALUES ('subscriber@example.com', 'popup');
