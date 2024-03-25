import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import data from './properties.json';
import './Property.css'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Property = () => {
  const [properties, setProperties] = useState([]);
  const [property, setProperty] = useState(null); 

  const location = useLocation();
  const state = location.state; 

  // Fetch property data based on the selected property ID
  useEffect(() => {
    setProperties(data.properties);
    setProperty(data.properties.find((prop) => prop.id === state.id));
    console.log('Property:', property);
  }, [state.id]);

  // Ref to track window size
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  // Custom arrows for the Slider
  const CustomPrevArrow = (props) => (
    <button {...props}>
      <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M17.815 19.157l-11.927-7.157 11.927-7.157-2.982 7.157 2.982 7.157zm4.185 4.843l-5-12 5-12-20 12 20 12z"/>
      </svg>
    </button>
  );

  const CustomNextArrow = (props) => (
    <button {...props}>
      <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox=" 0 0 24 24"><path d="M6.185 4.843l11.927 7.157-11.927 7.157 2.982-7.157-2.982-7.157zm-4.185-4.843l5 12-5 12 20-12-20-12z"/></svg>
    </button>
  );

  // Settings for the Slider component
  const slickSettings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    prevArrow: <CustomPrevArrow />, 
    nextArrow: <CustomNextArrow />, 
  };

  return (
    <div style={{ marginTop: '50px', maxWidth: '1350px', maxHeight: 'auto', marginLeft: '95px' }}> 
      {/* Slider for property images */}
      <Slider {...slickSettings} className="slick-slider-custom"> 
        {property && 
          property.pictures.map((pic, index) => ( 
            <div key={index}> 
              <img
                className="d-block w-100 img-fluid"
                src={pic}
                alt={`Slide ${index}`}
              />
            </div>
          ))}
      </Slider>
    
      {/* Property information */}
      <div style={windowSize.current[0] > 1000 ? { maxWidth: '50%', margin: 'auto', marginTop: '50px' } : { margin: 'auto' }}>
        <h1>{property ? property.location : ''}</h1>
      </div>

      {/* Tabs for property details */}
      <Tabs
        defaultActiveKey="desc" 
        transition={false} 
        className="mb-3" 
        style={windowSize.current[0] > 1000 ? { maxWidth: '50%', margin: 'auto', marginTop: '20px', backgroundColor: 'ffffff', borderRadius: '8px' } : { margin: 'auto', marginTop: '20px', backgroundColor: '#8adaf2', borderRadius: '10px' }}
      >
        {/* Description Tab */}
        <Tab eventKey="desc" title="Description" style={windowSize.current[0] > 1000 ? { maxWidth: '50%', margin: 'auto', marginTop: '20px', backgroundColor: '#ffffff', border: '1px solid #20247b', borderRadius: '10px', padding: '20px' } : { margin: 'auto', backgroundColor: '#ffffff', border: '1px solid #20247b', borderRadius: '10px', padding: '20px' }}> 
          <div>
            {/* List of property details */}
            <ul className="list-group list-group-flush"> 
              <li className="list-group-item">Type: {property ? property.type : ''}</li> 
              <li className="list-group-item">Bedrooms: {property ? property.bedrooms : ''}</li> 
              <li className="list-group-item">Tenure: {property ? property.tenure : ''}</li>
              <li className="list-group-item">Price: ${property ? property.price : ''}</li>
            </ul> 
          </div>
          {/* Description text */}
          <div style={{ padding: '20px' }}>{property ? property.description : ''}</div> 
        </Tab>

        {/* Floor Plan Tab */}
        <Tab eventKey="fp" title="Floor plan" style={windowSize.current[0] > 1000 ? { maxWidth: '50%', margin: 'auto', marginTop: '20px', backgroundColor: '#ffffff', border: '1px solid #20247b', borderRadius: '10px', padding: '20px' } : { margin: 'auto', backgroundColor: '#ffffff', border: '1px solid #20247b', borderRadius: '10px', padding: '20px' }}>
          Floor plan of the property
          <div>
            {/* Image of the floor plan */}
            <img src="/src/assets/floorplan.jpg" style={{ maxWidth: '100%', height: 'auto' }} /> 
          </div>
        </Tab>

        {/* Map Tab */}
        <Tab eventKey="map" title="Map" style={windowSize.current[0] > 1000 ? { maxWidth: '50%', margin: 'auto', marginTop: '20px', backgroundColor: '#ffffff', border: '1px solid #20247b', borderRadius: '10px', padding: '20px' } : { margin: 'auto', backgroundColor: '#ffffff', border: '1px solid #20247b', borderRadius: '10px', padding: '20px' }}>
          The location
          <div className="embed-responsive embed-responsive-16by9"> 
            {/* Embedded Google Map */}
            <iframe
              className="embed-responsive-item" 
              src={property ? property.map : ''} 
              title="Property Map" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
            ></iframe>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Property;

