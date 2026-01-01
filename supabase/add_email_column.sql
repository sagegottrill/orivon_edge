-- Migration to fix missing email column
ALTER TABLE public.learner_profiles 
ADD COLUMN IF NOT EXISTS email VARCHAR(255);
