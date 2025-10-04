-- Drop existing policies
DROP POLICY IF EXISTS "Anyone can insert contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Anyone can insert newsletter subscriptions" ON newsletter_subscriptions;
DROP POLICY IF EXISTS "Authenticated users can view all contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can update contact submissions" ON contact_submissions;

-- Recreate policies with better security
-- Contact Submissions Policies
CREATE POLICY "Enable anonymous submissions"
  ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (
    email IS NOT NULL AND
    name IS NOT NULL AND
    message IS NOT NULL
  );

CREATE POLICY "Allow admin read access"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow admin update"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Newsletter Subscriptions Policies
CREATE POLICY "Enable anonymous newsletter subscriptions"
  ON newsletter_subscriptions
  FOR INSERT
  TO public
  WITH CHECK (
    email IS NOT NULL AND
    email ~* '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$'
  );

CREATE POLICY "Allow admin newsletter management"
  ON newsletter_subscriptions
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Add updated_at trigger for contact_submissions
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_contact_modified ON contact_submissions;
CREATE TRIGGER update_contact_modified
    BEFORE UPDATE ON contact_submissions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();