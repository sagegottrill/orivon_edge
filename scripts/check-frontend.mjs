import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'

// Function to check a JavaScript/TypeScript file for common issues
function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  const issues = []
  const warnings = []

  // Check for potential memory leaks in useEffect
  if (content.includes('useEffect') && !content.includes('return () =>')) {
    warnings.push('- Missing cleanup in useEffect hook')
  }

  // Check for proper error handling in async functions
  if (content.includes('async') && !content.includes('catch')) {
    warnings.push('- Missing error handling in async function')
  }

  // Check for proper form handling
  if (content.includes('<form') && !content.includes('preventDefault')) {
    warnings.push('- Form submission might not prevent default behavior')
  }

  // Check for accessibility issues
  if (content.includes('<img') && !content.includes('alt=')) {
    issues.push('- Images missing alt text')
  }

  if (content.includes('<button') && !content.includes('aria-')) {
    warnings.push('- Button might need ARIA attributes')
  }

  // Check for proper state management
  if (content.includes('useState') && content.includes('useEffect')) {
    const statePattern = /const \[(.*), set\1\] = useState/g
    const matches = [...content.matchAll(statePattern)]
    const stateVars = matches.map(m => m[1])
    
    stateVars.forEach(stateVar => {
      if (content.includes(`set${stateVar}`) && !content.includes(`prev${stateVar}`)) {
        warnings.push(`- State update for ${stateVar} might need previous state consideration`)
      }
    })
  }

  return { issues, warnings }
}

async function checkFrontend() {
  console.log('🔍 Starting frontend code analysis...\n')

  const componentsDir = path.join(process.cwd(), 'src', 'components')
  const pagesDir = path.join(process.cwd(), 'src', 'pages')

  // Check components
  console.log('📦 Analyzing Components...')
  const componentFiles = fs.readdirSync(componentsDir)
  for (const file of componentFiles) {
    if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      console.log(`\nChecking ${file}...`)
      const { issues, warnings } = analyzeFile(path.join(componentsDir, file))
      
      if (issues.length > 0) {
        console.log('❌ Issues found:')
        issues.forEach(issue => console.log(issue))
      }
      
      if (warnings.length > 0) {
        console.log('⚠️ Warnings:')
        warnings.forEach(warning => console.log(warning))
      }
      
      if (issues.length === 0 && warnings.length === 0) {
        console.log('✅ No issues found')
      }
    }
  }

  // Check pages
  console.log('\n📄 Analyzing Pages...')
  const pageFiles = fs.readdirSync(pagesDir)
  for (const file of pageFiles) {
    if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      console.log(`\nChecking ${file}...`)
      const { issues, warnings } = analyzeFile(path.join(pagesDir, file))
      
      if (issues.length > 0) {
        console.log('❌ Issues found:')
        issues.forEach(issue => console.log(issue))
      }
      
      if (warnings.length > 0) {
        console.log('⚠️ Warnings:')
        warnings.forEach(warning => console.log(warning))
      }
      
      if (issues.length === 0 && warnings.length === 0) {
        console.log('✅ No issues found')
      }
    }
  }

  console.log('\n✨ Frontend analysis completed.')
}

checkFrontend()