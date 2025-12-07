-- Add this to your Supabase SQL Editor to fix the missing table error

-- 1. Create table if not exists
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
  job_role VARCHAR(255), -- Renamed from current_role to avoid keyword conflict
  goals TEXT
);

-- 2. Ensure columns exist (safeguard if table existed previously)
DO $$
BEGIN
    BEGIN
        ALTER TABLE program_applications ADD COLUMN IF NOT EXISTS job_role VARCHAR(255);
    EXCEPTION
        WHEN duplicate_column THEN NULL;
    END;
END $$;

-- 3. Cleanup conflicting/reserved column if it exists
DO $$
BEGIN
    BEGIN
        ALTER TABLE program_applications DROP COLUMN IF EXISTS "current_role";
    EXCEPTION
        WHEN OTHERS THEN NULL;
    END;
END $$;

-- 4. Improve performance
CREATE INDEX IF NOT EXISTS idx_program_applications_email ON program_applications(email);

-- 5. Enable RLS
ALTER TABLE program_applications ENABLE ROW LEVEL SECURITY;

-- 6. Setup Policies (DROP FIRST to prevent 'already exists' error)
DROP POLICY IF EXISTS "Anyone can submit applications" ON program_applications;
CREATE POLICY "Anyone can submit applications"
  ON program_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

DROP POLICY IF EXISTS "Public read applications" ON program_applications;
CREATE POLICY "Public read applications"
  ON program_applications
  FOR SELECT
  TO anon
  USING (true);
