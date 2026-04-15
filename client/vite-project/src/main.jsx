import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext'
import { PasskeyProvider } from './context/PasskeyContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <PasskeyProvider>
        <App />
      </PasskeyProvider>
    </ThemeProvider>
  </StrictMode>,
)
