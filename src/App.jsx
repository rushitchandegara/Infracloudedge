import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ServicesPage from './pages/ServicesPage';
import SolutionsPage from './pages/SolutionsPage'; // New Page
import CareersPage from './pages/CareersPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Blogs from './pages/Blogs';
import CaseStudy from './pages/CaseStudy';

// Import Components
import ServiceDetails from './components/ServiceDetails';
import Talk from './components/Talk';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/solutions" element={<SolutionsPage />} /> {/* New Route */}
      
      {/* Dynamic Route for Service Details */}
      <Route path="/services/:id" element={<ServiceDetails />} />
      
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      
      {/* Insights Routes */}
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/case-study" element={<CaseStudy />} />

      <Route path="/talk" element={<Talk />} />
    </Routes>
  );
}

export default App;