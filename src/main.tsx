
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';

// Improved error handling for module script loading errors
window.addEventListener('error', (event) => {
  if (event.message && (
    event.message.includes('module script failed') || 
    event.message.includes('importing module')
  )) {
    console.error('Module script loading error detected:', event);
    
    // Log additional details that might help with debugging
    console.error('Error source:', event.filename);
    console.error('Error line:', event.lineno);
    console.error('Error column:', event.colno);
    
    // You could add UI-based error reporting here
    const rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.innerHTML = '<div style="padding: 20px; text-align: center;">An error occurred while loading the application. Please try refreshing the page.</div>';
    }
  }
});

// Safe mounting function to ensure DOM is ready
const mountApp = () => {
  const rootElement = document.getElementById("root");
  
  if (rootElement) {
    try {
      createRoot(rootElement).render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
    } catch (error) {
      console.error("Error rendering app:", error);
      
      // Fallback rendering without StrictMode if there's an error
      if (error && rootElement) {
        try {
          createRoot(rootElement).render(<App />);
        } catch (fallbackError) {
          console.error("Critical error rendering app:", fallbackError);
          rootElement.innerHTML = '<div style="padding: 20px; text-align: center;">Unable to load application. Please refresh the page.</div>';
        }
      }
    }
  } else {
    console.error("Root element not found");
  }
};

// Handle different document ready states
if (document.readyState === 'loading') {
  // Document still loading, wait for DOMContentLoaded
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  // DOMContentLoaded has already fired
  mountApp();
}
