import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Components/home.jsx'
import Dashboard from './Components/dashboard.jsx'
import Books from './Components/books.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Home/>
    <Dashboard/>
    <Books/>
  </StrictMode>,
)
