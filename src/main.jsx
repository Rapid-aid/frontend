import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Dashboard from './pages/Dashboard.jsx'
import './index.css'
import { DataProvider } from './contexts/DataContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <Dashboard />
    </DataProvider>
  </StrictMode>,
)
