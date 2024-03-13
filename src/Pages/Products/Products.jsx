import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../Components/Header';
import axios from 'axios';
import '../StyleSheets/Symptoms.css';
import { Card, Row, Col } from 'react-bootstrap';

function Products() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const id = queryParams.get('id');
  const [data, setData] = useState([]);

  console.log(id);

  const API_URL = import.meta.env.VITE_APP_API_URL;

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(`${API_URL}/api/v1/category/${id}`);
      setData(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const handleCardClick = (productId) => {
    navigate(`/health-issue/Products-list/?id=${productId}`);
  };

  return (
    <>
      <Header />
      <div className="text-center mb-4 mt-4">
        <h1>Categories</h1>
      </div>
      <div className="symptoms-container">
        <Row xs={1} md={3} className="g-4">
          {data.map((product) => (
            <Col key={product.id}>
              <Card
                className="symptom-card hide-scrollbar"
                onClick={() => handleCardClick(product.id)}
              >
                <Card.Img
                  src={API_URL + product.image}
                  alt={product.name}
                  style={{ maxHeight: '150px', objectFit: 'contain' }}
                />
                <Card.Body>
                  <Card.Title className="hide-scrollbar fw-bold">{product.name}</Card.Title>
                  <Card.Text
                      className="hide-scrollbar fs-7"
                      style={{ maxHeight: "100px", overflowY: "auto" }}
                    >{product.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default Products;
