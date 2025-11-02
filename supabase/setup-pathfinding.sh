#!/bin/bash

# AI PATHFINDING PLATFORM - SUPABASE SETUP SCRIPT
# Run this script to create all database tables, functions, and seed data

echo "=================================="
echo "AI Pathfinding Platform Setup"
echo "=================================="
echo ""

# Check if psql is installed
if ! command -v psql &> /dev/null; then
    echo "❌ PostgreSQL client (psql) not found!"
    echo "Please install it first:"
    echo "  Ubuntu/Debian: sudo apt-get install postgresql-client"
    echo "  Mac: brew install postgresql"
    exit 1
fi

echo "✅ PostgreSQL client found"
echo ""

# Prompt for Supabase credentials
echo "Enter your Supabase project details:"
read -p "Project Reference ID (from project URL): " PROJECT_REF
read -sp "Database Password: " DB_PASSWORD
echo ""
echo ""

echo "🔄 Connecting to Supabase..."

# Build connection string
CONNECTION_STRING="postgresql://postgres:$DB_PASSWORD@db.$PROJECT_REF.supabase.co:5432/postgres"

# Execute schema
echo ""
echo "📝 Creating database schema..."
if [ -f "$(dirname "$0")/ai_pathfinding_schema.sql" ]; then
    psql "$CONNECTION_STRING" -f "$(dirname "$0")/ai_pathfinding_schema.sql"
    if [ $? -eq 0 ]; then
        echo "✅ Schema created successfully"
    else
        echo "❌ Schema creation failed"
        exit 1
    fi
else
    echo "❌ Schema file not found"
    exit 1
fi

# Execute AI path generator functions
echo ""
echo "🤖 Creating AI path generation functions..."
if [ -f "$(dirname "$0")/ai_path_generator.sql" ]; then
    psql "$CONNECTION_STRING" -f "$(dirname "$0")/ai_path_generator.sql"
    if [ $? -eq 0 ]; then
        echo "✅ AI functions created successfully"
    else
        echo "❌ AI functions creation failed"
        exit 1
    fi
else
    echo "❌ Generator file not found"
    exit 1
fi

# Seed data
echo ""
echo "🌱 Seeding database with initial data..."
if [ -f "$(dirname "$0")/seed_pathfinding_data.sql" ]; then
    psql "$CONNECTION_STRING" -f "$(dirname "$0")/seed_pathfinding_data.sql"
    if [ $? -eq 0 ]; then
        echo "✅ Data seeded successfully"
    else
        echo "❌ Data seeding failed"
        exit 1
    fi
else
    echo "❌ Seed file not found"
    exit 1
fi

echo ""
echo "=================================="
echo "✅ Setup Complete!"
echo "=================================="
echo ""
echo "Next steps:"
echo "1. Copy your Supabase URL and anon key to .env file"
echo "2. VITE_SUPABASE_URL=https://your-project.supabase.co"
echo "3. VITE_SUPABASE_ANON_KEY=your-anon-key"
echo ""
echo "Your platform is ready! Run 'npm run dev' to start."
