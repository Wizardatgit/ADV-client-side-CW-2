// Importing React, useRef for form reference, emailjs for email sending, and styling dependencies
import React, { useRef } from 'react';
import * as emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-widgets/DatePicker';
import 'react-widgets/styles.css';

// Functional component for the contact form
const ContactForm = () => {
  // Creating a form reference
  const form = useRef();

  // Function to send an email using emailjs
  const sendEmail = (e) => {
    e.preventDefault();
    // Sending form data using emailjs
    emailjs.sendForm('service_0a17w8n', 'template_5njpugd', form.current, 'l7N373x2_HuprUe5H')
      .then((result) => {
        console.log(result.text);
        window.alert("Email Sent Successfully");
      }, (error) => {
        console.log(error.text);
        window.alert("Email Sending Unsuccessful");
      });
  };

  // Return JSX for the contact form
  return (
    <>
      <div className="col-lg-6 ps-5 ms-5 pt-2"></div>
      {/* Form for user input with fields for name, email, message, and date */}
      <form ref={form} onSubmit={sendEmail} className="container mt-4">
        <div className="mb-3">
          <label htmlFor="user_name" className="form-label">Name</label>
          <input type="text" name="user_name" className="form-control" required />
        </div>

        <div className="mb-3">
          <label htmlFor="user_email" className="form-label">Email</label>
          <input type="email" name="user_email" className="form-control" required />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea name="message" className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label" required>Select Date</label>
          {/* Datepicker for selecting a date */}
          <DatePicker
            placeholder="m/dd/yy"
            className="form-control" />
        </div>

        {/* Submit button to send the form */}
        <input type="submit" value="Send" className="btn btn-primary" />
      </form>
    </>
  );
};

// Exporting the ContactForm component
export default ContactForm;
