
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';

// Safe mounting function with improved error handling
const mountApp = () => {
  const rootElement = document.getElementById("root");
  
  if (!rootElement) {
    console.error("Critical: Root element not found");
    return;
  }
  
  try {
    createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Error rendering app:", error);
    
    // Fallback rendering without StrictMode
    try {
      createRoot(rootElement).render(<App />);
    } catch (fallbackError) {
      console.error("Critical error rendering app:", fallbackError);
      rootElement.innerHTML = '<div style="padding: 20px; text-align: center; font-family: sans-serif;">' +
        '<h2 style="color: #d32f2f;">Application Error</h2>' +
        '<p>Unable to load the application. Please refresh the page or try again later.</p>' +
        '<button style="padding: 8px 16px; background: #2196f3; color: white; border: none; border-radius: 4px; cursor: pointer; margin-top: 10px;" ' +
        'onclick="window.location.reload(true);">Refresh Page</button>' +
        '</div>';
    }
  }
};

// Handle document loading states
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}
