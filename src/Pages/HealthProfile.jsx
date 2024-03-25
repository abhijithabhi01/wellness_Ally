import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Card, Col, Row } from "react-bootstrap";
import Footer from "../Components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import "./StyleSheets/home.css";

function HealthProfile() {
  const currentUrl = window.location.href;
  const url = currentUrl;
  const API_URL = import.meta.env.VITE_APP_API_URL;
  const parts = url.split("/");
  const id = parts[parts.length - 1];

  const [healthProfiles, setHealthProfiles] = useState([]);

  useEffect(() => {
    healthData();
  }, []);

  async function healthData() {
    try {
      const response = await axios.get(
        `${API_URL}/api/v1/health-profiles/${id}/`
      );
      setHealthProfiles(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <>
      <div style={{ minHeight: "100vh", overflow: "hidden" }}>
        <Header />
        <div className="text-center mt-4 ">
          <h2>Health Profiles</h2>
        </div>

        <Row className="m-5 justify-content-center">
          {healthProfiles.map((profile) => (
            <Col md={4} key={profile.id}>
              <Link
                to={`/health-issue/${profile.id}`}
                style={{ textDecoration: "none" }}
              >
                <Card className="mt-5 hide-scrollbar" style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    style={{ height: "200px", objectFit: "cover" }}
                    src={`${API_URL}${profile.image} `}
                  />
                  <Card.Body>
                    <Card.Title className="fw-bold fs-4">
                      {profile.issue.issue}
                    </Card.Title>
                    <Card.Text className="text-danger fs-5">
                      {profile.condition.name}
                    </Card.Text>
                    <Card.Text
                      className="fs-7"
                      style={{ maxHeight: "100px", overflowY: "auto" }}
                    >
                      {profile.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
      <Footer />
    </>
  );
}

export default HealthProfile;
