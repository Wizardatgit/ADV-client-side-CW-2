// Importing React, ContactForm component, and stylings
import React from 'react';
import ContactForm from './ContactForm';
import './ContactUs.css';

// Functional component for the ContactUs section
const ContactUs = () => {
  // Return JSX for the ContactUs section
  return (
    <div className="contact-us-container">
      <h2 className="text-center">Contact Us</h2>
      {/* Rendering the ContactForm component */}
      <ContactForm/>
    </div>
  );
};

// Exporting the ContactUs component
export default ContactUs;
