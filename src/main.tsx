
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';

// Set up touch events for better mobile handling
if (window.matchMedia("(max-width: 768px)").matches) {
  document.addEventListener('touchmove', function(e) {
    // Prevent default only if body has our scroll lock class
    if (document.body.classList.contains('bodyScrollLocked')) {
      e.preventDefault();
    }
  }, { passive: false });
}

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
