-- VENTURE STUDIO BACKEND SCEMA
-- Compatible with Firebase Auth (user_id is TEXT)

-- ==========================================
-- 1. DECKLY (Pitch Deck Assessor)
-- ==========================================

CREATE TABLE IF NOT EXISTS public.deck_assessments (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id TEXT NOT NULL, -- Firebase UID
    startup_name TEXT NOT NULL,
    deck_url TEXT, -- URL to uploaded file if any
    
    -- Assessment Scores (0-100)
    overall_score INTEGER,
    prob_sol_fit_score INTEGER,
    market_size_score INTEGER,
    business_model_score INTEGER,
    traction_score INTEGER,
    team_score INTEGER,
    
    -- AI Analysis
    strengths TEXT[],
    weaknesses TEXT[],
    investor_questions TEXT[],
    improvement_plan TEXT,
    
    status TEXT DEFAULT 'pending', -- pending, analyzing, completed, failed
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS: Allow users to see their own decks
ALTER TABLE public.deck_assessments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view their own assessments" ON public.deck_assessments;
CREATE POLICY "Users can view their own assessments"
ON public.deck_assessments FOR SELECT
USING (true); -- Relaxed for prototype (Firebase UID)

DROP POLICY IF EXISTS "Users can insert their own assessments" ON public.deck_assessments;
CREATE POLICY "Users can insert their own assessments"
ON public.deck_assessments FOR INSERT
WITH CHECK (true); -- Relaxed for prototype (client provides user_id)

-- ==========================================
-- 2. DEEP REVEAL (AI Problem Finder)
-- ==========================================

CREATE TABLE IF NOT EXISTS public.problem_analyses (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id TEXT NOT NULL, -- Firebase UID
    problem_statement TEXT NOT NULL,
    industry TEXT,
    
    -- AI Analysis
    pain_point_intensity INTEGER, -- 1-10
    market_gap_verified BOOLEAN DEFAULT FALSE,
    competitors TEXT[],
    potential_solution_angle TEXT,
    
    status TEXT DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS
ALTER TABLE public.problem_analyses ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view their own analyses" ON public.problem_analyses;
CREATE POLICY "Users can view their own analyses"
ON public.problem_analyses FOR SELECT
USING (true); -- Relaxed for prototype

DROP POLICY IF EXISTS "Users can insert their own analyses" ON public.problem_analyses;
CREATE POLICY "Users can insert their own analyses"
ON public.problem_analyses FOR INSERT
WITH CHECK (true); -- Relaxed for prototype

-- ==========================================
-- 3. LINK TO DASHBOARD (Views/Functions)
-- ==========================================

-- Function to get User's Unified Profile Stats
CREATE OR REPLACE FUNCTION get_user_venture_stats(target_user_id TEXT)
RETURNS JSON AS $$
DECLARE
    deck_count INTEGER;
    problem_count INTEGER;
BEGIN
    SELECT count(*) INTO deck_count FROM deck_assessments WHERE user_id = target_user_id;
    SELECT count(*) INTO problem_count FROM problem_analyses WHERE user_id = target_user_id;
    
    RETURN json_build_object(
        'total_projects', deck_count + problem_count,
        'decks_assessed', deck_count,
        'problems_analyzed', problem_count
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
