import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Carousel from "react-bootstrap/Carousel";
import c1 from "../assets/c1.jpeg";
import c2 from "../assets/c33.jpeg";
import c3 from "../assets/c3.jpeg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Footer from "../Components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import "./StyleSheets/home.css";
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CommunityChat from "./CommunityChat";
import DocChat from "./DocChat";

function Home() {
  // modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const API_URL = import.meta.env.VITE_APP_API_URL;
  console.log("URL", API_URL);
  const [healthIssues, setHealthIssues] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(`${API_URL}/api/v1/health_issue/list/`);
      setHealthIssues(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <>
      <Header />

      <div className="w-100 mb-5">
        <Carousel>
          <Carousel.Item interval={2000}>
            <img src={c1} alt="" style={{ height: "50vh", width: "100%" }} />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img src={c2} alt="" style={{ height: "50vh", width: "100%" }} />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img src={c3} alt="" style={{ height: "50vh", width: "100%" }} />
          </Carousel.Item>
        </Carousel>
      </div>
      <div
        className="text-center"
        id="div-sentence"
        style={{ margin: "100px", fontSize: "20px" }}
      >
        Wellness Ally was founded with the belief that healthy lifestyle habits
        promote happiness, confidence, and overall wellbeing. Feel empowered by
        taking control of your wellness with simple and attainable nutrition and
        lifestyle changes. Wellness Ally offers both long-term and short-term
        plans to meet the unique needs of our clients. Witness the effects of
        improved energy, balance, health and happiness in your daily life.
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <p id="div-p" style={{ fontSize: "50px", fontWeight: "bold" }}>
          Explore Our Solutions
        </p>{" "}
        <br />
      </div>

      <div className="hide-scrollbar" style={{ margin: '20px', overflow: 'hidden' }}>
                <Container>
                    <Row>
                        {healthIssues.map((prob) => (
                            <Col key={prob.id} md={3}>
                                <Link to={`/heath-profile/${prob.id}`} style={{ textDecoration: 'none' }}>
                                    <Card className="mb-4">
                                        <CardMedia
                                            component="img"
                                            alt={prob.issue}
                                            height="140"
                                            image={`${API_URL}${prob.image}`}
                                        />
                                        <CardContent className="hide-scrollbar" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {prob.issue}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {prob.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" as={Link} to={`/heath-profile/${prob.id}`} variant="outlined">
                                                Read More
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
           
            <Footer />
            <div style={{position:'fixed',margin:'-62% 0px 0px 0px', zIndex:'10',right:'0'}}>
    <img src="https://play-lh.googleusercontent.com/c5HiVEILwq4DqYILPwcDUhRCxId_R53HqV_6rwgJPC0j44IaVlvwASCi23vGQh5G3LIZ" alt="" 
    style={{height:'60px', width:'60px',borderRadius:'50%'}} 
    onClick={handleShow}
    />
</div>





{/* modal */}
<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
     size="lg"
      >
  <div  
          
          >
              <Modal.Header closeButton>
         <h4 style={{color:'white',height:'35px'}}>Connecting People</h4>
          </Modal.Header>
          <Tabs
         
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
       style={{height:'80px'}}
      >
        <Tab eventKey="home" title="Community Chat">
        <CommunityChat/>
        </Tab>
        <Tab eventKey="tlktodoc" title="Talk To Doctor">
         <DocChat/>
        </Tab>
      
      </Tabs>
  
  </div>


      </Modal>
      
        </>
    );
}

export default Home;
