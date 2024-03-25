import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import axios from "axios";
import "../StyleSheets/Symptoms.css";
import { Card, Row, Col, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Products() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const id = queryParams.get("id");
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");

  const API_URL = import.meta.env.VITE_APP_API_URL;

  useEffect(() => {
    fetchData();
  }, [id]);

  async function fetchData() {
    try {
      const response = await axios.get(
        `${API_URL}/api/v1/categories/${id}/products/`
      );
      setCategory(response.data.category);
      setData(response.data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handleBuyNow = (id) => {
    navigate(`/checkout/?id=${id}`);
  };

  return (
    <>
      <Header />
      <div className="text-center mb-4 mt-4">
        <h1>{category} Products</h1>
      </div>
      <Row xs={1} md={3} className="g-4">
        {data.map((product) => (
          <Col key={product.name}>
            <Card className="symptom-card hide-scrollbar">
              <Card.Img
                src={API_URL + product.image}
                alt={product.name}
                style={{
                  maxHeight: "125px",
                  objectFit: "contain",
                  marginTop: "10px",
                }}
              />
              <Card.Body>
                <Card.Title className=" hide-scrollbar fw-bold">
                  {product.name}
                </Card.Title>
                <Card.Text className="fw-bold">{` ₹ ${product.price} `}</Card.Text>
                <Button
                  variant="primary"
                  className="buy-now-button"
                  onClick={() => handleBuyNow(product.id)}
                >
                  Buy Now <FaShoppingCart className="ml-2" />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Products;
