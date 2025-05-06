
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';

// Advanced error handling for module script loading errors
window.addEventListener('error', (event) => {
  console.error('Error detected:', {
    message: event.message,
    filename: event.filename,
    line: event.lineno,
    column: event.colno
  });

  if (event.message && (
    event.message.includes('module script failed') || 
    event.message.includes('importing module') ||
    event.message.includes('Failed to fetch')
  )) {
    console.error('Module loading error details:', event);
    
    // Add more details to help with debugging
    console.error('Error source:', event.filename);
    console.error('Error line:', event.lineno);
    console.error('Error column:', event.colno);
    console.error('User agent:', navigator.userAgent);
    
    // Show a user-friendly error message
    const rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.innerHTML = '<div style="padding: 20px; text-align: center; font-family: sans-serif;">' +
        '<h2 style="color: #d32f2f;">Application Loading Error</h2>' +
        '<p>We encountered a problem loading the application resources.</p>' +
        '<p>Please try refreshing the page or clearing your browser cache.</p>' +
        '<button style="padding: 8px 16px; background: #2196f3; color: white; border: none; border-radius: 4px; cursor: pointer; margin-top: 10px;" ' +
        'onclick="window.location.reload(true);">Refresh Page</button>' +
        '</div>';
    }
  }
});

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
