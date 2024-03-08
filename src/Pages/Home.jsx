import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Carousel from 'react-bootstrap/Carousel';
import c1 from '../assets/c1.jpeg';
import c2 from '../assets/c33.jpeg';
import c3 from '../assets/c3.jpeg';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../Components/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    
const API_URL = import.meta.env.VITE_APP_API_URL;
console.log("URL",API_URL)
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
            console.error('Error fetching data:', error);
        }
    }

    return (
        <>
            <Header />

            <div>
                <div className='w-100 mb-5'>
                    <Carousel>
                        <Carousel.Item interval={2000}>
                            <img src={c1} alt="" style={{ height: '50vh', width: '100%' }} />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img src={c2} alt="" style={{ height: '50vh', width: '100%' }} />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img src={c3} alt="" style={{ height: '50vh', width: '100%' }} />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className='text-center' id='div-sentence' style={{ margin: "100px", fontSize: '20px' }} >
                    Wellness Ally was founded with the belief that healthy lifestyle habits promote happiness, confidence, and overall wellbeing. Feel empowered by taking control of your wellness with simple and attainable nutrition and lifestyle changes. Wellness Ally offers both long-term and short-term plans to meet the unique needs of our clients. Witness the effects of improved energy, balance, health and happiness in your daily life.
                </div>
                <div className='d-flex justify-content-center aligh-items-center' >
                    <p id='div-p' style={{ fontSize: '50px', fontWeight: 'bold' }}>Explore Our Solutions</p> <br />
                </div>

                <div style={{ margin: '20px' }}>
                    <Container>
                        <Row>
                            {healthIssues.map((prob) => (
                                <Col key={prob.id}>
                                    <Link to={`/heath-profile/${prob.id}`}  style={{textDecoration:'none'}}>
                                    <Card className="card mb-2" sx={{ maxWidth: 345 }}>
                                        <CardMedia
                                            
                                            component="img"
                                            alt="health issue"
                                            height="140"
                                            image={`${API_URL}${prob.image}`} // Make sure your API response has an 'image' field
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {prob.issue}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {prob.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            {/* <Link style={{ textDecoration: 'none' }} size="small" to={`/heath-profile/${prob.id}`} >Read More</Link> */}
                                        </CardActions>
                                    </Card>
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
            </div>
            <Footer />
        </>
        // <div>ui</div>
    );
}

export default Home;
