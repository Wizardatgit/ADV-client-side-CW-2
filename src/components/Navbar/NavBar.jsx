// Importing necessary React components and Bootstrap elements
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom'; 
import './NavBar.css'; 
import logo from '../../components/imagee/icons8-home-64.png'; 

// Functional component for the navigation bar
const NavBar = () => {
  const location = useLocation(); // Using the useLocation hook to get the current location

  return (
    // Navbar component with various Bootstrap classes and styling
    <Navbar expand="lg" className="bg-body-tertiary pt-0 mt-0">
      <Container className='pt-0 mt-0'>
        {/* Brand/logo section of the Navbar */}
        <Navbar.Brand href="#home" className="custom-navbar-brand">
          <img
            src={logo}
            alt="BetterHomes Logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          BetterHomes
        </Navbar.Brand>

        {/* Navbar toggler button for responsive design */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar content collapsing on smaller screens */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navigation links aligned to the right */}
          <Nav className="ms-auto">
            {/* Each Nav.Link corresponds to a navigation item with conditional 'active' class based on the current location */}
            <Nav.Link href="/" className={`m-1 ${location.pathname === '/' ? 'active' : ''}`}>Home</Nav.Link>
            <Nav.Link href="/properties" className={`m-1 ${location.pathname === '/properties' ? 'active' : ''}`}>Properties</Nav.Link>
            <Nav.Link href="/services" className={`m-1 ${location.pathname === '/services' ? 'active' : ''}`}>Services</Nav.Link>
            <Nav.Link href="/aboutus" className={`m-1 ${location.pathname === '/aboutus' ? 'active' : ''}`}>About Us</Nav.Link>
            <Nav.Link href="/contactus" className={`m-1 ${location.pathname === '/contactus' ? 'active' : ''}`}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar; // Exporting the NavBar component

