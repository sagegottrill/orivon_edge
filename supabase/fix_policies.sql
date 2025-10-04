-- First, remove all existing policies
DROP POLICY IF EXISTS "Anyone can insert contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Admin users can view all contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Admin users can update contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Anyone can insert newsletter subscriptions" ON newsletter_subscriptions;
DROP POLICY IF EXISTS "Admin users can view newsletter subscriptions" ON newsletter_subscriptions;
DROP POLICY IF EXISTS "Admin users can update newsletter subscriptions" ON newsletter_subscriptions;

-- Make sure RLS is enabled
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create strict policies for contact submissions
CREATE POLICY "contact_submissions_insert" ON contact_submissions
  FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "contact_submissions_admin" ON contact_submissions
  FOR ALL TO authenticated
  USING (auth.email() IN ('sage@orivonedge.com', 'admin@orivonedge.com'));

-- Create strict policies for newsletter subscriptions
CREATE POLICY "newsletter_subscriptions_insert" ON newsletter_subscriptions
  FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "newsletter_subscriptions_admin" ON newsletter_subscriptions
  FOR ALL TO authenticated
  USING (auth.email() IN ('sage@orivonedge.com', 'admin@orivonedge.com'));

-- Verify policies are in place
SELECT tablename, policyname, permissive, roles, cmd, qual, with_check 
FROM pg_policies 
WHERE schemaname = 'public' 
  AND tablename IN ('contact_submissions', 'newsletter_subscriptions');