# Execute Complete Schema in Supabase
# Run this script to set up all database tables

$supabaseUrl = "https://akfspsfnwtivthgkgfnz.supabase.co"
$supabaseServiceKey = $env:SUPABASE_SERVICE_KEY # You need to set this environment variable

if (-not $supabaseServiceKey) {
    Write-Host "Error: SUPABASE_SERVICE_KEY environment variable not set" -ForegroundColor Red
    Write-Host "`nPlease get your Service Role Key from Supabase Dashboard:" -ForegroundColor Yellow
    Write-Host "1. Go to https://supabase.com/dashboard/project/akfspsfnwtivthgkgfnz/settings/api" -ForegroundColor Yellow
    Write-Host "2. Copy the 'service_role' key (NOT the anon key)" -ForegroundColor Yellow
    Write-Host "3. Run: `$env:SUPABASE_SERVICE_KEY = 'your-service-key'" -ForegroundColor Yellow
    Write-Host "`nOr you can manually run the SQL:" -ForegroundColor Cyan
    Write-Host "1. Go to https://supabase.com/dashboard/project/akfspsfnwtivthgkgfnz/editor" -ForegroundColor Cyan
    Write-Host "2. Open complete-schema.sql" -ForegroundColor Cyan
    Write-Host "3. Copy and paste the entire SQL into the SQL Editor" -ForegroundColor Cyan
    Write-Host "4. Click 'Run'" -ForegroundColor Cyan
    exit 1
}

Write-Host "Reading SQL file..." -ForegroundColor Cyan
$sqlContent = Get-Content -Path ".\supabase\complete-schema.sql" -Raw

Write-Host "Executing SQL on Supabase..." -ForegroundColor Cyan

$headers = @{
    "apikey" = $supabaseServiceKey
    "Authorization" = "Bearer $supabaseServiceKey"
    "Content-Type" = "application/json"
}

$body = @{
    query = $sqlContent
} | ConvertTo-Json

try {
    $response = Invoke-RestMethod -Uri "$supabaseUrl/rest/v1/rpc/exec_sql" -Method Post -Headers $headers -Body $body
    Write-Host "✅ Schema executed successfully!" -ForegroundColor Green
    Write-Host "`nNext steps:" -ForegroundColor Yellow
    Write-Host "1. Check your Supabase dashboard to verify tables were created" -ForegroundColor White
    Write-Host "2. Test the forms on your website" -ForegroundColor White
    Write-Host "3. Monitor applications in the Supabase Table Editor" -ForegroundColor White
}
catch {
    Write-Host "❌ Error executing schema:" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    Write-Host "`nPlease execute the SQL manually:" -ForegroundColor Yellow
    Write-Host "1. Go to https://supabase.com/dashboard/project/akfspsfnwtivthgkgfnz/editor" -ForegroundColor Cyan
    Write-Host "2. Copy the content from supabase\complete-schema.sql" -ForegroundColor Cyan
    Write-Host "3. Paste it into the SQL Editor and click 'Run'" -ForegroundColor Cyan
}
