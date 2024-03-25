// Import React and necessary components
import React from 'react';
import NavBar from './components/Navbar/NavBar';
import HomePage from './components/home_page/HomePage';
import Services from './components/services_page/Services';
import Properties from './components/properties_page/Properties';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aboutus from './components/aboutus_page/Aboutus';
import Property from './components/properties_page/Property';
import { FavoriteProvider } from './components/properties_page/FavoriteContext';
import Footer from './components/Navbar/Footer'; 
import ContactUs from './components/contactUs/contactUs';

// Define the main App component
function App() {
  return (
    // Set up BrowserRouter for routing and FavoriteProvider for managing states
    <BrowserRouter>
      <FavoriteProvider>
        {/* Include the Navbar component */}
        <NavBar />
        {/* Set up Routes for different pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/properties/:id" element={<Property />} />
        </Routes>
        {/* Include the Footer component */}
        <Footer />
      </FavoriteProvider>
    </BrowserRouter>
  );
}

// Export the App component
export default App;

