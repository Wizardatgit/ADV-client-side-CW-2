// Importing necessary dependencies from React and react-bootstrap
import React from 'react';


// Importing about us styles
import './AboutUs.css';

// Functional component for the AboutUs section
const AboutUs = () => {
  return (
    // Main container 
    <div className="about-us-body">
      <div className="about-us-container">
        <div className="about-us-content">
          {/* Heading and paragraphs for the About Us section */}
          <h1>About Us</h1>
          <p>
            Greetings from Harmony Homes! At Harmony Homes, we aspire to redefine your real estate journey, ensuring it's not just a transaction but a memorable experience.
          </p>
          <p>
            Our mission is to deliver unparalleled quality in both properties and services. We are committed to offering an exceptional customer service experience, guiding you seamlessly through the process of finding your dream home and turning it into a reality.
          </p>
          <p>
            For any inquiries or collaboration opportunities, don't hesitate to reach out. Harmony Homes is dedicated to serving you with excellence!
          </p>
        </div>
      </div>
    </div>
  );
};

// Exporting the AboutUs component 
export default AboutUs;

