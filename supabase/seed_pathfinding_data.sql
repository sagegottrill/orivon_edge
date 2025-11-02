-- SEED DATA FOR AI PATHFINDING PLATFORM
-- Run this after creating the schema

-- ============================================
-- SKILLS DATA
-- ============================================

INSERT INTO skills (name, category, subcategory, description, demand_score, difficulty_level, estimated_hours) VALUES
-- Frontend Skills
('HTML/CSS', 'technical', 'frontend', 'Fundamental web technologies for structure and styling', 95, 'beginner', 40),
('JavaScript', 'technical', 'frontend', 'Core programming language for web interactivity', 98, 'beginner', 80),
('React', 'technical', 'frontend', 'Popular JavaScript library for building user interfaces', 95, 'intermediate', 60),
('TypeScript', 'technical', 'frontend', 'Typed superset of JavaScript', 85, 'intermediate', 40),
('Vue.js', 'technical', 'frontend', 'Progressive JavaScript framework', 75, 'intermediate', 50),
('Next.js', 'technical', 'frontend', 'React framework for production', 80, 'advanced', 40),
('Tailwind CSS', 'technical', 'frontend', 'Utility-first CSS framework', 70, 'intermediate', 20),

-- Backend Skills
('Node.js', 'technical', 'backend', 'JavaScript runtime for server-side development', 90, 'intermediate', 60),
('Python', 'technical', 'backend', 'Versatile programming language', 95, 'beginner', 80),
('Express.js', 'technical', 'backend', 'Web framework for Node.js', 85, 'intermediate', 30),
('Django', 'technical', 'backend', 'High-level Python web framework', 75, 'intermediate', 60),
('FastAPI', 'technical', 'backend', 'Modern Python web framework', 70, 'intermediate', 40),
('RESTful APIs', 'technical', 'backend', 'Design and development of REST APIs', 90, 'intermediate', 40),
('GraphQL', 'technical', 'backend', 'Query language for APIs', 65, 'advanced', 40),

-- Database Skills
('SQL', 'technical', 'database', 'Database query language', 95, 'beginner', 50),
('PostgreSQL', 'technical', 'database', 'Advanced relational database', 85, 'intermediate', 40),
('MongoDB', 'technical', 'database', 'NoSQL document database', 80, 'intermediate', 40),
('Redis', 'technical', 'database', 'In-memory data structure store', 65, 'intermediate', 30),

-- DevOps Skills
('Git', 'technical', 'devops', 'Version control system', 98, 'beginner', 30),
('Docker', 'technical', 'devops', 'Containerization platform', 85, 'intermediate', 40),
('CI/CD', 'technical', 'devops', 'Continuous integration and deployment', 80, 'intermediate', 50),
('AWS', 'technical', 'cloud', 'Amazon Web Services cloud platform', 90, 'intermediate', 80),
('Azure', 'technical', 'cloud', 'Microsoft Azure cloud platform', 75, 'intermediate', 80),
('Kubernetes', 'technical', 'devops', 'Container orchestration', 70, 'advanced', 80),

-- Data Science Skills
('Python Data Science', 'technical', 'data', 'Python for data analysis', 90, 'intermediate', 60),
('Pandas', 'technical', 'data', 'Data manipulation library', 85, 'intermediate', 40),
('NumPy', 'technical', 'data', 'Numerical computing library', 80, 'intermediate', 30),
('Matplotlib', 'technical', 'data', 'Data visualization library', 75, 'intermediate', 30),
('Machine Learning', 'technical', 'ai', 'Building predictive models', 95, 'advanced', 120),
('TensorFlow', 'technical', 'ai', 'Machine learning framework', 80, 'advanced', 80),
('PyTorch', 'technical', 'ai', 'Deep learning framework', 75, 'advanced', 80),

-- Mobile Skills
('React Native', 'technical', 'mobile', 'Cross-platform mobile development', 85, 'intermediate', 60),
('Flutter', 'technical', 'mobile', 'Google mobile UI framework', 80, 'intermediate', 60),
('Swift', 'technical', 'mobile', 'iOS development language', 70, 'intermediate', 80),
('Kotlin', 'technical', 'mobile', 'Android development language', 75, 'intermediate', 80),

-- Design Skills
('UI/UX Design', 'technical', 'design', 'User interface and experience design', 90, 'intermediate', 80),
('Figma', 'technical', 'design', 'Design and prototyping tool', 85, 'beginner', 40),
('Adobe XD', 'technical', 'design', 'UI/UX design tool', 70, 'beginner', 40),

-- Soft Skills
('Problem Solving', 'soft', 'core', 'Analytical thinking and solution finding', 100, 'intermediate', 100),
('Communication', 'soft', 'core', 'Effective verbal and written communication', 100, 'intermediate', 80),
('Teamwork', 'soft', 'core', 'Collaboration and team dynamics', 98, 'intermediate', 60),
('Adaptability', 'soft', 'core', 'Flexibility and learning agility', 95, 'intermediate', 60),
('Project Management', 'soft', 'leadership', 'Planning and executing projects', 85, 'intermediate', 80),
('Leadership', 'soft', 'leadership', 'Team guidance and motivation', 80, 'advanced', 120);

-- ============================================
-- JOB ROLES DATA
-- ============================================

INSERT INTO job_roles (title, description, category, average_salary_min, average_salary_max, job_openings_count, growth_rate) VALUES
('Full Stack Developer', 'Develops both frontend and backend of web applications', 'software', 3000000, 8000000, 450, 22.5),
('Frontend Developer', 'Specializes in user interface development', 'software', 2500000, 6000000, 380, 20.0),
('Backend Developer', 'Focuses on server-side logic and databases', 'software', 2800000, 7000000, 420, 21.0),
('Mobile App Developer', 'Creates applications for mobile devices', 'software', 2600000, 6500000, 320, 25.0),
('Data Analyst', 'Analyzes data to derive business insights', 'data', 2200000, 5500000, 290, 28.0),
('Data Scientist', 'Uses advanced analytics and ML for insights', 'data', 3500000, 9000000, 180, 35.0),
('UI/UX Designer', 'Designs user interfaces and experiences', 'design', 2000000, 5000000, 210, 18.0),
('Product Manager', 'Manages product development and strategy', 'product', 3500000, 10000000, 150, 15.0),
('DevOps Engineer', 'Manages development and operations infrastructure', 'software', 3200000, 8500000, 220, 30.0),
('Cloud Engineer', 'Designs and maintains cloud infrastructure', 'software', 3500000, 9000000, 200, 32.0),
('AI/ML Engineer', 'Develops artificial intelligence and machine learning systems', 'ai', 4000000, 12000000, 120, 40.0),
('Cybersecurity Analyst', 'Protects systems from security threats', 'security', 3000000, 8000000, 160, 33.0);

-- ============================================
-- JOB ROLE SKILLS MAPPING
-- ============================================

-- Full Stack Developer
INSERT INTO job_role_skills (job_role_id, skill_id, importance, proficiency_level)
SELECT jr.id, s.id, 'required', 'intermediate'
FROM job_roles jr, skills s
WHERE jr.title = 'Full Stack Developer' AND s.name IN ('HTML/CSS', 'JavaScript', 'React', 'Node.js', 'SQL', 'Git');

INSERT INTO job_role_skills (job_role_id, skill_id, importance, proficiency_level)
SELECT jr.id, s.id, 'preferred', 'intermediate'
FROM job_roles jr, skills s
WHERE jr.title = 'Full Stack Developer' AND s.name IN ('TypeScript', 'PostgreSQL', 'Docker', 'AWS');

-- Frontend Developer
INSERT INTO job_role_skills (job_role_id, skill_id, importance, proficiency_level)
SELECT jr.id, s.id, 'required', 'advanced'
FROM job_roles jr, skills s
WHERE jr.title = 'Frontend Developer' AND s.name IN ('HTML/CSS', 'JavaScript', 'React');

INSERT INTO job_role_skills (job_role_id, skill_id, importance, proficiency_level)
SELECT jr.id, s.id, 'preferred', 'intermediate'
FROM job_roles jr, skills s
WHERE jr.title = 'Frontend Developer' AND s.name IN ('TypeScript', 'Next.js', 'Tailwind CSS', 'Git');

-- Backend Developer
INSERT INTO job_role_skills (job_role_id, skill_id, importance, proficiency_level)
SELECT jr.id, s.id, 'required', 'advanced'
FROM job_roles jr, skills s
WHERE jr.title = 'Backend Developer' AND s.name IN ('Node.js', 'Python', 'SQL', 'RESTful APIs');

INSERT INTO job_role_skills (job_role_id, skill_id, importance, proficiency_level)
SELECT jr.id, s.id, 'preferred', 'intermediate'
FROM job_roles jr, skills s
WHERE jr.title = 'Backend Developer' AND s.name IN ('PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Git');

-- Data Analyst
INSERT INTO job_role_skills (job_role_id, skill_id, importance, proficiency_level)
SELECT jr.id, s.id, 'required', 'advanced'
FROM job_roles jr, skills s
WHERE jr.title = 'Data Analyst' AND s.name IN ('Python Data Science', 'SQL', 'Pandas', 'Matplotlib');

INSERT INTO job_role_skills (job_role_id, skill_id, importance, proficiency_level)
SELECT jr.id, s.id, 'preferred', 'intermediate'
FROM job_roles jr, skills s
WHERE jr.title = 'Data Analyst' AND s.name IN ('NumPy', 'Git');

-- Data Scientist
INSERT INTO job_role_skills (job_role_id, skill_id, importance, proficiency_level)
SELECT jr.id, s.id, 'required', 'advanced'
FROM job_roles jr, skills s
WHERE jr.title = 'Data Scientist' AND s.name IN ('Python Data Science', 'Machine Learning', 'SQL', 'Pandas', 'NumPy');

INSERT INTO job_role_skills (job_role_id, skill_id, importance, proficiency_level)
SELECT jr.id, s.id, 'preferred', 'intermediate'
FROM job_roles jr, skills s
WHERE jr.title = 'Data Scientist' AND s.name IN ('TensorFlow', 'PyTorch', 'Git', 'AWS');

-- Mobile App Developer
INSERT INTO job_role_skills (job_role_id, skill_id, importance, proficiency_level)
SELECT jr.id, s.id, 'required', 'advanced'
FROM job_roles jr, skills s
WHERE jr.title = 'Mobile App Developer' AND s.name IN ('JavaScript', 'React Native');

INSERT INTO job_role_skills (job_role_id, skill_id, importance, proficiency_level)
SELECT jr.id, s.id, 'preferred', 'intermediate'
FROM job_roles jr, skills s
WHERE jr.title = 'Mobile App Developer' AND s.name IN ('TypeScript', 'Flutter', 'RESTful APIs', 'Git');

-- UI/UX Designer
INSERT INTO job_role_skills (job_role_id, skill_id, importance, proficiency_level)
SELECT jr.id, s.id, 'required', 'advanced'
FROM job_roles jr, skills s
WHERE jr.title = 'UI/UX Designer' AND s.name IN ('UI/UX Design', 'Figma');

INSERT INTO job_role_skills (job_role_id, skill_id, importance, proficiency_level)
SELECT jr.id, s.id, 'preferred', 'intermediate'
FROM job_roles jr, skills s
WHERE jr.title = 'UI/UX Designer' AND s.name IN ('HTML/CSS', 'Adobe XD', 'JavaScript');

-- DevOps Engineer
INSERT INTO job_role_skills (job_role_id, skill_id, importance, proficiency_level)
SELECT jr.id, s.id, 'required', 'advanced'
FROM job_roles jr, skills s
WHERE jr.title = 'DevOps Engineer' AND s.name IN ('Git', 'Docker', 'CI/CD', 'AWS');

INSERT INTO job_role_skills (job_role_id, skill_id, importance, proficiency_level)
SELECT jr.id, s.id, 'preferred', 'intermediate'
FROM job_roles jr, skills s
WHERE jr.title = 'DevOps Engineer' AND s.name IN ('Kubernetes', 'Python', 'Node.js');

-- Cloud Engineer
INSERT INTO job_role_skills (job_role_id, skill_id, importance, proficiency_level)
SELECT jr.id, s.id, 'required', 'advanced'
FROM job_roles jr, skills s
WHERE jr.title = 'Cloud Engineer' AND s.name IN ('AWS', 'Docker', 'Kubernetes');

INSERT INTO job_role_skills (job_role_id, skill_id, importance, proficiency_level)
SELECT jr.id, s.id, 'preferred', 'intermediate'
FROM job_roles jr, skills s
WHERE jr.title = 'Cloud Engineer' AND s.name IN ('Azure', 'Python', 'Git', 'CI/CD');

-- AI/ML Engineer
INSERT INTO job_role_skills (job_role_id, skill_id, importance, proficiency_level)
SELECT jr.id, s.id, 'required', 'expert'
FROM job_roles jr, skills s
WHERE jr.title = 'AI/ML Engineer' AND s.name IN ('Python Data Science', 'Machine Learning', 'TensorFlow', 'PyTorch');

INSERT INTO job_role_skills (job_role_id, skill_id, importance, proficiency_level)
SELECT jr.id, s.id, 'preferred', 'advanced'
FROM job_roles jr, skills s
WHERE jr.title = 'AI/ML Engineer' AND s.name IN ('SQL', 'AWS', 'Git', 'Docker');

-- ============================================
-- SAMPLE COURSES DATA
-- ============================================

INSERT INTO courses (title, description, platform, platform_course_id, url, instructor, duration_hours, difficulty_level, language, rating, reviews_count, completion_rate, is_free, cost_usd, cost_ngn, content_type, certificate_available, is_active) VALUES
-- Frontend Courses
('HTML, CSS, and Javascript for Web Developers', 'Complete introduction to web development fundamentals', 'coursera', 'html-css-js-web', 'https://coursera.org/learn/html-css-javascript-for-web-developers', 'Johns Hopkins University', 40, 'beginner', 'English', 4.7, 125000, 72, TRUE, 0, 0, ARRAY['video', 'quiz', 'project'], TRUE, TRUE),
('Modern React with Redux', 'Complete guide to building modern web applications with React', 'udemy', 'modern-react-redux', 'https://udemy.com/course/react-redux/', 'Stephen Grider', 52, 'intermediate', 'English', 4.6, 89000, 68, FALSE, 89.99, 135000, ARRAY['video', 'project'], TRUE, TRUE),
('Complete Next.js Developer', 'Build full-stack applications with Next.js', 'udemy', 'complete-nextjs', 'https://udemy.com/course/complete-nextjs/', 'Andrei Neagoie', 38, 'advanced', 'English', 4.8, 45000, 65, FALSE, 94.99, 142500, ARRAY['video', 'project'], TRUE, TRUE),

-- Backend Courses
('Node.js, Express & MongoDB: The Complete Bootcamp', 'Master Node.js development from scratch', 'udemy', 'nodejs-complete', 'https://udemy.com/course/nodejs-express-mongodb-bootcamp/', 'Jonas Schmedtmann', 42, 'intermediate', 'English', 4.8, 97000, 71, FALSE, 89.99, 135000, ARRAY['video', 'project'], TRUE, TRUE),
('Python for Everybody', 'Learn Python programming fundamentals', 'coursera', 'python-for-everybody', 'https://coursera.org/specializations/python', 'University of Michigan', 34, 'beginner', 'English', 4.8, 240000, 78, TRUE, 0, 0, ARRAY['video', 'quiz'], TRUE, TRUE),
('Django Web Framework Complete Course', 'Build web applications with Django', 'udemy', 'django-complete', 'https://udemy.com/course/python-django-dev-to-deployment/', 'Brad Traversy', 36, 'intermediate', 'English', 4.6, 52000, 66, FALSE, 79.99, 120000, ARRAY['video', 'project'], TRUE, TRUE),

-- Database Courses
('SQL for Data Analysis', 'Master SQL for data analysis and business intelligence', 'udacity', 'sql-data-analysis', 'https://udacity.com/course/sql-for-data-analysis', 'Udacity Team', 28, 'beginner', 'English', 4.5, 34000, 69, TRUE, 0, 0, ARRAY['video', 'quiz'], TRUE, TRUE),
('The Complete PostgreSQL Course', 'Learn PostgreSQL database management', 'udemy', 'postgresql-complete', 'https://udemy.com/course/the-complete-python-postgresql-developer-course/', 'Rob Percival', 30, 'intermediate', 'English', 4.4, 28000, 62, FALSE, 74.99, 112500, ARRAY['video', 'project'], TRUE, TRUE),

-- Data Science Courses
('Data Science Specialization', 'Complete data science program from beginner to advanced', 'coursera', 'data-science-spec', 'https://coursera.org/specializations/jhu-data-science', 'Johns Hopkins University', 180, 'intermediate', 'English', 4.6, 195000, 58, TRUE, 0, 0, ARRAY['video', 'quiz', 'project'], TRUE, TRUE),
('Machine Learning A-Z', 'Hands-on Python & R in data science', 'udemy', 'ml-az', 'https://udemy.com/course/machinelearning/', 'Kirill Eremenko', 44, 'advanced', 'English', 4.5, 156000, 61, FALSE, 94.99, 142500, ARRAY['video', 'project'], TRUE, TRUE),

-- Mobile Development
('React Native - The Practical Guide', 'Build native mobile apps with React Native', 'udemy', 'react-native-practical', 'https://udemy.com/course/react-native-the-practical-guide/', 'Maximilian Schwarzmüller', 32, 'intermediate', 'English', 4.6, 47000, 64, FALSE, 89.99, 135000, ARRAY['video', 'project'], TRUE, TRUE),
('Flutter & Dart - Complete Guide', 'Complete Flutter development course', 'udemy', 'flutter-dart-complete', 'https://udemy.com/course/flutter-dart-the-complete-guide/', 'Maximilian Schwarzmüller', 40, 'intermediate', 'English', 4.7, 71000, 67, FALSE, 89.99, 135000, ARRAY['video', 'project'], TRUE, TRUE),

-- Design Courses
('UI/UX Design Bootcamp', 'Complete guide to UI/UX design with Figma', 'udemy', 'uiux-bootcamp', 'https://udemy.com/course/ui-ux-web-design-using-adobe-xd/', 'Daniel Scott', 36, 'beginner', 'English', 4.7, 38000, 73, FALSE, 79.99, 120000, ARRAY['video', 'project'], TRUE, TRUE),
('Figma UI UX Design Essentials', 'Master Figma for professional design', 'udemy', 'figma-essentials', 'https://udemy.com/course/figma-ux-ui-design-user-experience-tutorial-course/', 'Daniel Scott', 24, 'beginner', 'English', 4.8, 29000, 76, FALSE, 69.99, 105000, ARRAY['video', 'interactive'], TRUE, TRUE);

-- Link courses to skills
INSERT INTO course_skills (course_id, skill_id, proficiency_gain)
SELECT c.id, s.id, 'basic'
FROM courses c, skills s
WHERE c.title = 'HTML, CSS, and Javascript for Web Developers' AND s.name IN ('HTML/CSS', 'JavaScript');

INSERT INTO course_skills (course_id, skill_id, proficiency_gain)
SELECT c.id, s.id, 'intermediate'
FROM courses c, skills s
WHERE c.title = 'Modern React with Redux' AND s.name IN ('React', 'JavaScript');

INSERT INTO course_skills (course_id, skill_id, proficiency_gain)
SELECT c.id, s.id, 'advanced'
FROM courses c, skills s
WHERE c.title = 'Complete Next.js Developer' AND s.name IN ('Next.js', 'React', 'TypeScript');

INSERT INTO course_skills (course_id, skill_id, proficiency_gain)
SELECT c.id, s.id, 'intermediate'
FROM courses c, skills s
WHERE c.title = 'Node.js, Express & MongoDB: The Complete Bootcamp' AND s.name IN ('Node.js', 'Express.js', 'MongoDB');

INSERT INTO course_skills (course_id, skill_id, proficiency_gain)
SELECT c.id, s.id, 'basic'
FROM courses c, skills s
WHERE c.title = 'Python for Everybody' AND s.name IN ('Python');

INSERT INTO course_skills (course_id, skill_id, proficiency_gain)
SELECT c.id, s.id, 'intermediate'
FROM courses c, skills s
WHERE c.title = 'Django Web Framework Complete Course' AND s.name IN ('Django', 'Python', 'SQL');

INSERT INTO course_skills (course_id, skill_id, proficiency_gain)
SELECT c.id, s.id, 'intermediate'
FROM courses c, skills s
WHERE c.title = 'Data Science Specialization' AND s.name IN ('Python Data Science', 'Pandas', 'NumPy', 'Matplotlib');

INSERT INTO course_skills (course_id, skill_id, proficiency_gain)
SELECT c.id, s.id, 'advanced'
FROM courses c, skills s
WHERE c.title = 'Machine Learning A-Z' AND s.name IN ('Machine Learning', 'Python Data Science');

INSERT INTO course_skills (course_id, skill_id, proficiency_gain)
SELECT c.id, s.id, 'intermediate'
FROM courses c, skills s
WHERE c.title = 'React Native - The Practical Guide' AND s.name IN ('React Native', 'JavaScript', 'React');

INSERT INTO course_skills (course_id, skill_id, proficiency_gain)
SELECT c.id, s.id, 'intermediate'
FROM courses c, skills s
WHERE c.title = 'Flutter & Dart - Complete Guide' AND s.name IN ('Flutter');

INSERT INTO course_skills (course_id, skill_id, proficiency_gain)
SELECT c.id, s.id, 'intermediate'
FROM courses c, skills s
WHERE c.title = 'UI/UX Design Bootcamp' AND s.name IN ('UI/UX Design', 'Figma');

INSERT INTO course_skills (course_id, skill_id, proficiency_gain)
SELECT c.id, s.id, 'intermediate'
FROM courses c, skills s
WHERE c.title = 'Figma UI UX Design Essentials' AND s.name IN ('Figma', 'UI/UX Design');

COMMENT ON TABLE skills IS 'Complete catalog of technical and soft skills with market data';
COMMENT ON TABLE job_roles IS 'Job roles with salary data and growth projections for Nigerian market';
COMMENT ON TABLE courses IS 'Curated courses from multiple platforms (Coursera, Udemy, edX, etc.)';
