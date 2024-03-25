// importing all necessary components
import React from 'react';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useFavorite } from './FavoriteContext';
import data from "./properties.json";

const Properties = () => {
  // State variables
  const [properties, setProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [minRooms, setMinRooms] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000000);
  const [postalCode, setPostalCode] = useState(''); 
// Favorite context
  const { dispatch, state } = useFavorite();

  useEffect(() => {
    // From json file
    setProperties(data.properties);
  }, []);
// Filter properties based on search criteria
  const filteredProperties = properties.filter((property) => {
    const matchesSearchTerm = property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMinRooms = property.bedrooms >= minRooms;
    const matchesPrice = property.price >= minPrice && property.price <= maxPrice;
    const matchesPostalCode = property['postal code'].toLowerCase().includes(postalCode.toLowerCase()); // New condition for postal code
    return matchesSearchTerm && matchesMinRooms && matchesPrice && matchesPostalCode;
  });
// Event handlers
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handlePostalCodeChange = (e) => {
    setPostalCode(e.target.value);
  };

  function showAll() {
    setProperties(data.properties);
  }

  function showFavorites() {
    setProperties(state.favorites);
  }

  const handleMinRoomsChange = (e) => {
    const newMinRooms = parseInt(e.target.value, 10);
    
    // Use Math.max to ensure the value is at least 0
    setMinRooms(Math.max(newMinRooms, 0));
  };
  

  const handleMinPriceChange = (e) => {
    const newMinPrice = parseInt(e.target.value, 10);
  
    // Use Math.max to ensure the value is at least 0
    setMinPrice(Math.max(newMinPrice, 0));
  };
  

  const handleMaxPriceChange = (e) => {
    const newMaxPrice = parseInt(e.target.value, 10);
  
    // Use Math.max to ensure the value is at least 0
    setMaxPrice(Math.max(newMaxPrice, 0));
  };

  function sortByPrice() {
    const sortedProperties = [...properties].sort((a, b) => a.price - b.price);
    setProperties(sortedProperties);
  }

  function sortByRooms() {
    const sortedProperties = [...properties].sort((a, b) => a.bedrooms - b.bedrooms);
    setProperties(sortedProperties);
  }
// Navigation
  let navigate = useNavigate();
  const handleClick = (e) => {
    navigate('/Properties/' + e, { state: { id: e, name: 'just name' } });
  };
// Favorites functionality
  const handleFavorites = (item) => {
    const isItemInFavorites = state.favorites.some((i) => i.id === item.id);// Check if the item is already in favorites
    !isItemInFavorites ? addToFavorites(item) : removeFromFavorites(item);// Add or remove from favorites based on its presence
  };

  const addToFavorites = (item) => { // Dispatch action to add item to favorites
    dispatch({ type: 'ADD_TO_FAVORITES', payload: item });
    console.log('added to favorites: ' + item.id);
  };

  const removeFromFavorites = (item) => { // Dispatch action to remove item from favorites
    dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: item });
    console.log('removed from favorites: ' + item.id);
  };
//making the html code adding the event handlers
  return (
    <div style={{backgroundColor: '#ffe7de'}}>
      <div className="container"> 
        {}
      </div>

      <div style={{ marginTop: 10 }}>
        <Container fluid>
          <Row className="justify-content-center">
            <div className="col-md-6 col-sm-12">
              <form>
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    id="search"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search by location"
                  />
                  <Button style={{backgroundColor: '#f02688', border:'none'}} variant="primary" onClick={() => { }}>Search</Button> 
                </div>
              </form>
            </div>
          </Row>
          <Row className="justify-content-center">
            <div className="col-md-6 col-sm-12">
              <div className="d-flex justify-content-center align-items-center mt-3">
                <span className="me-2">Price</span>
                <span className="me-2">Min</span>
                <input
                  type="number"
                  id="minPrice"
                  value={minPrice}
                  onChange={handleMinPriceChange}
                  className="form-control me-2"
                />
                <span className="me-2">Max</span>
                <input
                  type="number"
                  id="maxPrice"
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
                  className="form-control me-2"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center mt-2">
                <span className="me-2">Min Rooms</span>
                <input
                  type="number"
                  id="rooms"
                  value={minRooms}
                  onChange={handleMinRoomsChange}
                  className="form-control me-2"
                />
              </div>
              <input
                    className="form-control"
                    type="text"
                    id="postalCode"
                    value={postalCode}
                    onChange={handlePostalCodeChange}
                    placeholder="Search by postal code" 
                  />
                  
              <div className="d-flex justify-content-center align-items-center mt-2">
                <Button onClick={sortByPrice} variant="primary" className="me-2" style={{backgroundColor: '#eda86f', border:'none', padding:'10px', width:'130px'}}>Sort by Price</Button>
                <Button onClick={sortByRooms} variant="primary"style={{backgroundColor: '#eda86f', border:'none', padding:'10px'}}>Sort by Rooms</Button>
              </div>
              <div className="d-flex justify-content-center align-items-center mt-2">
                <Button onClick={showFavorites} className="btn btn-danger me-2"style={{ border:'none', padding:'10px', marginRight:'20px', minWidth:'40px'}}>Favorites</Button>
                <Button onClick={showAll} className="btn btn-danger"style={{ border:'none', padding:'10px', marginRight:'20px', minWidth:'92px'}}>All</Button>
              </div>
            </div>
          </Row>
          <Row className="justify-content-center mt-4">
            {filteredProperties.map((property) => (
              <Card key={property.id} className="col-md-3 col-sm-10 m-4 p-0">
                <Card.Img variant="top" src={property.pictures[0]} alt="Card image" />
                <Card.Title className="bg-info text-white p-2"style={{color:'black'}}>{property.location}  </Card.Title>
                <ul className="list-group list-group-flush" style={{font:'poppins'}}>
                  <li className="list-group-item">Type: {property.type}</li>
                  <li className="list-group-item">Bedrooms: {property.bedrooms}</li>
                  <li className="list-group-item">Tenure: {property.tenure}</li>
                  <li className="list-group-item">Price: ${property.price}</li>
                  <li className="list-group-item">Postal Code: {property['postal code']}</li> 
                </ul>
                <Card.Text className="p-2">{property.description.substring(0, 200) + "..."}</Card.Text>
                <div className="d-flex justify-content-center align-items-center p-2">
                  <Button onClick={() => { handleClick(property.id) }} variant="primary" className="me-1 fw-bolder"style={{backgroundColor: '#eda86f', border:'none', color:'#e6e1e4'}}>Read More</Button>
                  <Button onClick={() => { handleFavorites(property) }} className="btn btn-danger">
                    <FaHeart style={state.favorites.some(i => i.id === property.id) ? { fontSize: '20px', color: '#ffbae1' } : { fontSize: '20px', color: 'transparent' }} />
                  </Button>
                </div>
              </Card>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};
// Exporting the properties component
export default Properties;