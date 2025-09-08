import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Example implementation of setAuthToken
function setAuthToken(token: string) {
  // Store the token in localStorage or set it in headers as needed
  localStorage.setItem('authToken', token);
}

setAuthToken("your_token_here"); // Example function to set auth token

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
