import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './sass/style.scss'
import App from './App.tsx'
import "./server.js"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
