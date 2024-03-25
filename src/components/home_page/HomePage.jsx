// Importing React, Carousel, Container, Row components, and stylings
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './HomePage.css';

// Functional component for the HomePage section
const HomePage = () => {
  // Return JSX for the HomePage section with a Carousel 
  return (
    <div>
      {/* Carousel displaying images with captions */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/src/components/CarouselImage/p21.jpg"
            alt="First img"
            style={{ maxHeight: '650px' }}
          />
          <Carousel.Caption>
            <p>Apartment Complexes</p>
            <p>BetterHome urban living awaits in this modern, stylish city apartment sanctuary.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/src/components/CarouselImage/p22.jpg"
            alt="Second img"
            style={{ maxHeight: '650px' }}
          />
          <Carousel.Caption>
            <p>Buy Modern Houses</p>
            <p>Step into the future with our collection of sleek, modern homes.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/src/components/CarouselImage/p23.jpg"
            alt="Third img"
            style={{ maxHeight: '650px' }}
          />
          <Carousel.Caption>
            <p>Buy Villas</p>
            <p>Indulge in luxury living with our exclusive collection of exquisite villas.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Container with a Row for a section describing services */}
      <Container fluid>
        <Row className="justify-content-center mt-5 mb-5">
          <div className="col-md-8">
            <h2 className="text-center">Introduction</h2>
            <p className="text-center">
              <br></br>
              {/* Description of services provided by BetterHomes */}
              Discover unparalleled living spaces in prime urban and suburban settings with BetterHomes. Your premier destination for exquisite residences, Luxe Estates goes beyond merely offering properties; we present the epitome of refined living. At BetterHomes, we believe in selling more than just real estate; we curate homes that resonate with your lifestyle. Navigate through our website to uncover the ideal dwelling that defines your concept of home. Welcome to a world where luxury meets comfort, and every property is a masterpiece waiting to embrace you.
            </p>
          </div>
        </Row>
      </Container>
    </div>
  );
};

// Exporting the HomePage component 
export default HomePage;

