
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Analytics } from '@vercel/analytics/react'
import { initToolbar } from '@21st-extension/toolbar'

// Initialize 21st.dev toolbar in development mode
function setupToolbar() {
  if (import.meta.env.DEV) {
    const toolbarConfig = {
      plugins: [],
    };
    initToolbar(toolbarConfig);
  }
}

// Setup toolbar
setupToolbar();

// Remove dark mode class addition
createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Analytics />
  </>
);
