import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css';

// Functional component for the ServicesPage
function ServicesPage() {
  return (
    <>
      {/* Main structure of the ServicesPage */}
      <div className="services-body">
        <div className="services-container">
          <h2>Our Services</h2>
          {/* Description of BetterHomes services */}
          <p className="services-description">
            Welcome to BetterHomes, an upcoming global leader in real estate platforms. Uncover the finest properties globally showcased on our platform. Explore a spectrum of exceptional services tailored for your property needs. Elevate your real estate experience with BetterHomes.
          </p>

          {/* List container for showcasing various services */}
          <div className="services-list-container">
            {/* Unordered list of services */}
            <ul className="services-list">
              <li>Property Sales</li>
              <li>Apartment Rentals</li>
              <li>Consultation Services</li>
              <li>Property Management</li>
              <li>Property Valuation</li>
              <li>Property Designing</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesPage; // Exporting the ServicesPage component for use in other parts of the application

