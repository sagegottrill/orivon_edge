-- List all tables
SELECT 
    tablename,
    schemaname
FROM pg_tables
WHERE schemaname = 'public';

-- Check contact_submissions table structure
SELECT 
    column_name,
    data_type,
    is_nullable,
    column_default
FROM information_schema.columns
WHERE table_name = 'contact_submissions'
AND table_schema = 'public';

-- Check newsletter_subscriptions table structure
SELECT 
    column_name,
    data_type,
    is_nullable,
    column_default
FROM information_schema.columns
WHERE table_name = 'newsletter_subscriptions'
AND table_schema = 'public';

-- Check number of records in each table
SELECT 
    'contact_submissions' as table_name,
    COUNT(*) as record_count
FROM contact_submissions
UNION ALL
SELECT 
    'newsletter_subscriptions' as table_name,
    COUNT(*) as record_count
FROM newsletter_subscriptions;

-- Check indexes on tables
SELECT
    tablename,
    indexname,
    indexdef
FROM pg_indexes
WHERE schemaname = 'public'
AND (tablename = 'contact_submissions' OR tablename = 'newsletter_subscriptions');

-- Check Row Level Security (RLS) policies
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
AND (tablename = 'contact_submissions' OR tablename = 'newsletter_subscriptions');