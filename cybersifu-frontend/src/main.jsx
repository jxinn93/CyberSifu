// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Your global CSS for the entire app

// *** CRITICAL: Import your App component ***
import App from './App.jsx';

// *** CRITICAL: Import BrowserRouter from react-router-dom ***
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* *** CRITICAL: Your <App /> component MUST be wrapped inside <BrowserRouter> *** */}
    {/* This provides the routing context (like useNavigate) to all components within App */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);