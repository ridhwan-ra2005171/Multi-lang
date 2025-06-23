import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "./i18n.js"
import React from 'react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* react suspense is just a loading */}
    <React.Suspense fallback={<div>Loading...</div>}>
    <App />
    </React.Suspense>
  </StrictMode>
)
