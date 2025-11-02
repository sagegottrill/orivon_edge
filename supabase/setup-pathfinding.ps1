# AI PATHFINDING PLATFORM - SUPABASE SETUP SCRIPT
# Run this script to create all database tables, functions, and seed data

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "AI Pathfinding Platform Setup" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Check if Supabase CLI is installed
$supabaseCli = Get-Command supabase -ErrorAction SilentlyContinue
if (-not $supabaseCli) {
    Write-Host "❌ Supabase CLI not found!" -ForegroundColor Red
    Write-Host "Please install it first: https://supabase.com/docs/guides/cli" -ForegroundColor Yellow
    Write-Host "Or run: npm install -g supabase" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Supabase CLI found" -ForegroundColor Green
Write-Host ""

# Prompt for Supabase credentials
Write-Host "Enter your Supabase project details:" -ForegroundColor Yellow
$projectRef = Read-Host "Project Reference ID (from project URL)"
$dbPassword = Read-Host "Database Password" -AsSecureString
$dbPasswordPlain = [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($dbPassword))

Write-Host ""
Write-Host "🔄 Connecting to Supabase..." -ForegroundColor Cyan

# Build connection string
$connectionString = "postgresql://postgres:$dbPasswordPlain@db.$projectRef.supabase.co:5432/postgres"

# Execute schema
Write-Host ""
Write-Host "📝 Creating database schema..." -ForegroundColor Cyan
$schemaFile = Join-Path $PSScriptRoot "ai_pathfinding_schema.sql"
if (Test-Path $schemaFile) {
    psql $connectionString -f $schemaFile
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Schema created successfully" -ForegroundColor Green
    } else {
        Write-Host "❌ Schema creation failed" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "❌ Schema file not found: $schemaFile" -ForegroundColor Red
    exit 1
}

# Execute AI path generator functions
Write-Host ""
Write-Host "🤖 Creating AI path generation functions..." -ForegroundColor Cyan
$generatorFile = Join-Path $PSScriptRoot "ai_path_generator.sql"
if (Test-Path $generatorFile) {
    psql $connectionString -f $generatorFile
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ AI functions created successfully" -ForegroundColor Green
    } else {
        Write-Host "❌ AI functions creation failed" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "❌ Generator file not found: $generatorFile" -ForegroundColor Red
    exit 1
}

# Seed data
Write-Host ""
Write-Host "🌱 Seeding database with initial data..." -ForegroundColor Cyan
$seedFile = Join-Path $PSScriptRoot "seed_pathfinding_data.sql"
if (Test-Path $seedFile) {
    psql $connectionString -f $seedFile
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Data seeded successfully" -ForegroundColor Green
    } else {
        Write-Host "❌ Data seeding failed" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "❌ Seed file not found: $seedFile" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "✅ Setup Complete!" -ForegroundColor Green
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Copy your Supabase URL and anon key to .env file" -ForegroundColor White
Write-Host "2. VITE_SUPABASE_URL=https://your-project.supabase.co" -ForegroundColor Gray
Write-Host "3. VITE_SUPABASE_ANON_KEY=your-anon-key" -ForegroundColor Gray
Write-Host ""
Write-Host "Your platform is ready! Run 'npm run dev' to start." -ForegroundColor Green
