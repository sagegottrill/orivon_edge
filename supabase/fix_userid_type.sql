-- Migration to fix user_id type mismatch
-- Firebase UIDs are strings (TEXT), but the database might have been created with UUID.

ALTER TABLE public.learner_profiles 
ALTER COLUMN user_id TYPE TEXT;

-- Verify/Cleanup: If there are other tables relying on this as a UUID, they might need updates too.
-- But based on north_backend.sql, strict FKs on user_id weren't enforced for Firebase mode.
