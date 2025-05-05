
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';

// Wait for document to be fully loaded and available
document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById("root");
  
  if (rootElement) {
    createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    console.error("Root element not found");
  }
});

// In case DOMContentLoaded has already fired
if (document.readyState === 'loading') {
  // The document is still loading, wait for DOMContentLoaded
} else {
  // DOMContentLoaded has already fired
  const rootElement = document.getElementById("root");
  
  if (rootElement) {
    createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    console.error("Root element not found");
  }
}
