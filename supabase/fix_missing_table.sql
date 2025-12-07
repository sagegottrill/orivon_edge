-- Add this to your Supabase SQL Editor to fix the missing table error

CREATE TABLE IF NOT EXISTS program_applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  program VARCHAR(255) NOT NULL, -- 'Core Skills Track' or 'Corporate Track'
  status VARCHAR(50) DEFAULT 'New',
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  
  -- Combined Fields
  full_name VARCHAR(255),
  
  -- Core Skills Specific
  track VARCHAR(255),
  motivation TEXT,
  
  -- Corporate Track Specific
  job_role VARCHAR(255),
  goals TEXT
);

-- Improve performance
CREATE INDEX IF NOT EXISTS idx_program_applications_email ON program_applications(email);

-- Enable RLS
ALTER TABLE program_applications ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit applications
CREATE POLICY "Anyone can submit applications"
  ON program_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow reading (Used by UserDashboard)
-- Since we are using Firebase Auth, Supabase doesn't have the user session context directly.
-- We rely on the client ensuring they query only their own email.
CREATE POLICY "Public read applications"
  ON program_applications
  FOR SELECT
  TO anon
  USING (true);
