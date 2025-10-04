-- Drop existing policies
DROP POLICY IF EXISTS "Authenticated users can view all contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can update contact submissions" ON contact_submissions;

-- Create new admin-only policies
CREATE POLICY "Admin users can view all contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (auth.email() IN (
    'sage@orivonedge.com',  -- Add admin emails here
    'admin@orivonedge.com'
  ));

CREATE POLICY "Admin users can update contact submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (auth.email() IN (
    'sage@orivonedge.com',  -- Add admin emails here
    'admin@orivonedge.com'
  ));

-- Create similar policies for newsletter subscriptions
DROP POLICY IF EXISTS "Authenticated users can view newsletter subscriptions" ON newsletter_subscriptions;
DROP POLICY IF EXISTS "Authenticated users can update newsletter subscriptions" ON newsletter_subscriptions;

CREATE POLICY "Admin users can view newsletter subscriptions"
  ON newsletter_subscriptions
  FOR SELECT
  TO authenticated
  USING (auth.email() IN (
    'sage@orivonedge.com',  -- Add admin emails here
    'admin@orivonedge.com'
  ));

CREATE POLICY "Admin users can update newsletter subscriptions"
  ON newsletter_subscriptions
  FOR UPDATE
  TO authenticated
  USING (auth.email() IN (
    'sage@orivonedge.com',  -- Add admin emails here
    'admin@orivonedge.com'
  ));