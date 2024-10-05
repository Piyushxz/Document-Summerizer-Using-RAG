import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ModalProvier } from './context/modal-context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModalProvier>
      <App />
    </ModalProvier>
    
  </StrictMode>,
)
