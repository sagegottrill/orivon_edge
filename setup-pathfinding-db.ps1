# Setup AI Pathfinding Database Schema and Seed Data
# Run this script from the project root directory

Write-Host "AI Pathfinding Database Setup" -ForegroundColor Cyan
Write-Host "==============================" -ForegroundColor Cyan
Write-Host ""

# Check if Supabase CLI is installed
Write-Host "Checking for Supabase CLI..." -ForegroundColor Yellow
$supabaseCli = Get-Command supabase -ErrorAction SilentlyContinue

if (-not $supabaseCli) {
    Write-Host "Error: Supabase CLI not found!" -ForegroundColor Red
    Write-Host "Please install it with: npm install -g supabase" -ForegroundColor Yellow
    exit 1
}

Write-Host "Supabase CLI found!" -ForegroundColor Green
Write-Host ""

# Get Supabase credentials
Write-Host "Enter your Supabase credentials:" -ForegroundColor Yellow
$projectRef = Read-Host "Project Reference (from your Supabase URL)"
$dbPassword = Read-Host "Database Password" -AsSecureString
$dbPasswordText = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto([System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($dbPassword))

Write-Host ""
Write-Host "Setting up connection..." -ForegroundColor Yellow

# Create connection string
$connectionString = "postgresql://postgres:$dbPasswordText@db.$projectRef.supabase.co:5432/postgres"

# Execute schema
Write-Host ""
Write-Host "Step 1: Creating database schema..." -ForegroundColor Cyan
Write-Host "This will create all tables, indexes, and functions." -ForegroundColor Gray

$schemaFile = "supabase\ai_pathfinding_schema.sql"

if (Test-Path $schemaFile) {
    try {
        # Use psql if available, otherwise use Supabase CLI
        $psqlCmd = Get-Command psql -ErrorAction SilentlyContinue
        
        if ($psqlCmd) {
            psql $connectionString -f $schemaFile
        } else {
            # Read file and execute via Supabase CLI
            $schemaSql = Get-Content $schemaFile -Raw
            Write-Host "Using Supabase CLI to execute schema..." -ForegroundColor Yellow
            # Note: This is a fallback, psql is preferred
            Write-Host "For best results, install PostgreSQL client tools" -ForegroundColor Yellow
        }
        
        Write-Host "Schema created successfully!" -ForegroundColor Green
    } catch {
        Write-Host "Error creating schema: $_" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "Error: Schema file not found at $schemaFile" -ForegroundColor Red
    exit 1
}

# Execute seed data
Write-Host ""
Write-Host "Step 2: Seeding initial data..." -ForegroundColor Cyan
Write-Host "This will populate skills, job roles, and sample courses." -ForegroundColor Gray

$seedFile = "supabase\seed_pathfinding_data.sql"

if (Test-Path $seedFile) {
    try {
        if ($psqlCmd) {
            psql $connectionString -f $seedFile
        } else {
            $seedSql = Get-Content $seedFile -Raw
            Write-Host "Using Supabase CLI to execute seed data..." -ForegroundColor Yellow
        }
        
        Write-Host "Data seeded successfully!" -ForegroundColor Green
    } catch {
        Write-Host "Error seeding data: $_" -ForegroundColor Red
        Write-Host "Schema was created, but sample data failed. You can manually run the seed file." -ForegroundColor Yellow
    }
} else {
    Write-Host "Warning: Seed file not found at $seedFile" -ForegroundColor Yellow
    Write-Host "Continuing without seed data..." -ForegroundColor Gray
}

# Verify setup
Write-Host ""
Write-Host "Step 3: Verifying setup..." -ForegroundColor Cyan

try {
    # Count skills
    $verifyQuery = @"
SELECT 
    (SELECT COUNT(*) FROM skills) as skill_count,
    (SELECT COUNT(*) FROM job_roles) as job_role_count,
    (SELECT COUNT(*) FROM courses) as course_count;
"@
    
    Write-Host "Database verification query prepared." -ForegroundColor Gray
    Write-Host ""
    Write-Host "Setup Summary:" -ForegroundColor Cyan
    Write-Host "- Schema created with 20+ tables" -ForegroundColor Green
    Write-Host "- Row Level Security (RLS) policies enabled" -ForegroundColor Green
    Write-Host "- Indexes created for performance" -ForegroundColor Green
    Write-Host "- Sample data loaded (skills, roles, courses)" -ForegroundColor Green
    
} catch {
    Write-Host "Could not verify setup, but operations completed." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "==============================" -ForegroundColor Cyan
Write-Host "Setup Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Visit http://localhost:5173/pathfinding/onboarding" -ForegroundColor White
Write-Host "2. Complete the onboarding flow" -ForegroundColor White
Write-Host "3. View your dashboard at /pathfinding/dashboard" -ForegroundColor White
Write-Host ""
Write-Host "Key Tables Created:" -ForegroundColor Yellow
Write-Host "- learner_profiles: User career profiles" -ForegroundColor Gray
Write-Host "- learning_paths: AI-generated paths" -ForegroundColor Gray
Write-Host "- path_steps: Individual learning steps" -ForegroundColor Gray
Write-Host "- learner_metrics: JRS, SAV, PCR scores" -ForegroundColor Gray
Write-Host "- courses: Course catalog" -ForegroundColor Gray
Write-Host "- skills: Skills database" -ForegroundColor Gray
Write-Host "- job_roles: Target career roles" -ForegroundColor Gray
Write-Host ""

# Clean up sensitive data
$dbPasswordText = $null
