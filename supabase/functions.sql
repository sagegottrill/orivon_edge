-- Create a function to get table information
CREATE OR REPLACE FUNCTION get_tables_info()
RETURNS TABLE (
    table_name text,
    column_count bigint,
    row_count bigint,
    has_rls boolean
) LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    SELECT 
        t.tablename::text,
        COUNT(c.column_name)::bigint as column_count,
        (SELECT reltuples::bigint FROM pg_class pc WHERE pc.relname = t.tablename) as row_count,
        EXISTS (
            SELECT 1 
            FROM pg_policies p 
            WHERE p.tablename = t.tablename
        ) as has_rls
    FROM pg_tables t
    LEFT JOIN information_schema.columns c ON c.table_name = t.tablename
    WHERE t.schemaname = 'public'
    GROUP BY t.tablename;
END;
$$;