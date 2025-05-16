
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PageHero from './components/PageHero';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/services" element={
            <>
              <PageHero 
                title="Digital experiences, elevated." 
                preHeadline="Building with Nodera"
                ctaText="Start Your Project"
                ctaLink="#contact"
                isServicePage={true}
              />
              <ServicesPage />
            </>
          } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
