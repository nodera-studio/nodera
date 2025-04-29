
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App.tsx';
import '@/styles/globals.css';

// Wait for DOM content to be loaded to ensure all elements exist
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
