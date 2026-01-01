-- NUCLEAR FORCE FIX v3: DYNAMIC POLICY DROP
-- This script dynamically finds and drops ALL policies on the relevant tables
-- to ensure NO dependencies block the column type change.

DO $$
DECLARE
    pol RECORD;
BEGIN
    -- Loop through all policies on our specific tables
    FOR pol IN 
        SELECT policyname, tablename 
        FROM pg_policies 
        WHERE tablename IN ('learner_profiles', 'learning_paths', 'path_steps', 'step_progress', 'path_progress', 'learner_metrics', 'learning_sessions', 'path_recommendations', 'job_roles')
    LOOP
        -- Log for info
        RAISE NOTICE 'Dropping policy: % on table: %', pol.policyname, pol.tablename;
        EXECUTE format('DROP POLICY IF EXISTS %I ON %I', pol.policyname, pol.tablename);
    END LOOP;
END $$;

-- 2. ALTER THE COLUMN (Now guaranteed safe)
ALTER TABLE public.learner_profiles 
ALTER COLUMN user_id TYPE TEXT;

-- 3. RE-APPLY RELAXED POLICIES (Firebase Mode)
-- Function to apply simple public policy
CREATE OR REPLACE FUNCTION apply_public_policy_v2(tbl text) RETURNS void AS $$
BEGIN
    -- Drop just in case (though we just dropped all)
    EXECUTE format('DROP POLICY IF EXISTS "Public Access" ON %I', tbl);
    -- Create new
    EXECUTE format('CREATE POLICY "Public Access" ON %I FOR ALL USING (true) WITH CHECK (true)', tbl);
    -- Enable RLS
    EXECUTE format('ALTER TABLE %I ENABLE ROW LEVEL SECURITY', tbl);
END;
$$ LANGUAGE plpgsql;

-- Apply to all tables
SELECT apply_public_policy_v2('learner_profiles');
SELECT apply_public_policy_v2('learning_paths');
SELECT apply_public_policy_v2('path_steps');
SELECT apply_public_policy_v2('path_progress');
SELECT apply_public_policy_v2('step_progress');
SELECT apply_public_policy_v2('learner_metrics');
SELECT apply_public_policy_v2('learning_sessions');
SELECT apply_public_policy_v2('path_recommendations');
SELECT apply_public_policy_v2('job_roles');

-- Cleanup
DROP FUNCTION apply_public_policy_v2;

-- 4. GRANT PERMISSIONS
GRANT ALL ON ALL TABLES IN SCHEMA public TO anon, authenticated, service_role;
