-- Remove all existing policies again
DROP POLICY IF EXISTS "contact_submissions_insert" ON contact_submissions;
DROP POLICY IF EXISTS "contact_submissions_admin" ON contact_submissions;
DROP POLICY IF EXISTS "newsletter_subscriptions_insert" ON newsletter_subscriptions;
DROP POLICY IF EXISTS "newsletter_subscriptions_admin" ON newsletter_subscriptions;

-- Make sure RLS is enabled
ALTER TABLE contact_submissions FORCE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscriptions FORCE ROW LEVEL SECURITY;

-- Default deny all
ALTER TABLE contact_submissions FORCE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscriptions FORCE ROW LEVEL SECURITY;

-- First create restrictive default policies that deny all access
CREATE POLICY "contact_submissions_deny_all" ON contact_submissions
  FOR ALL
  USING (false);

CREATE POLICY "newsletter_subscriptions_deny_all" ON newsletter_subscriptions
  FOR ALL
  USING (false);

-- Then add specific allow policies
CREATE POLICY "contact_submissions_anon_insert" ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "contact_submissions_admin_all" ON contact_submissions
  FOR ALL
  TO authenticated
  USING (
    auth.email() IN ('sage@orivonedge.com', 'admin@orivonedge.com')
  );

CREATE POLICY "newsletter_subscriptions_anon_insert" ON newsletter_subscriptions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "newsletter_subscriptions_admin_all" ON newsletter_subscriptions
  FOR ALL
  TO authenticated
  USING (
    auth.email() IN ('sage@orivonedge.com', 'admin@orivonedge.com')
  );

-- Verify the policies
SELECT 
  tablename, 
  policyname, 
  permissive, 
  roles, 
  cmd, 
  qual, 
  with_check 
FROM pg_policies 
WHERE schemaname = 'public' 
  AND tablename IN ('contact_submissions', 'newsletter_subscriptions')
ORDER BY tablename, policyname;