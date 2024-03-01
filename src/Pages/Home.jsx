import React from 'react'
import Header from '../Components/Header'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
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
import cd1 from '../assets/cd1.jpeg';
import cd2 from '../assets/cd2.jpeg';
import cd3 from '../assets/cd3.jpeg';
import cd4 from '../assets/cd4.jpeg';
import Footer from '../Components/Footer';



function Home() {
    return (

        <>
            <Header />
            <div>
                <div className='w-100'>
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            {/* <ExampleCarouselImage text="First slide" /> */}
                            <img src={c1} alt="" style={{ height: '50vh', width: '100%' }} />

                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            {/* <ExampleCarouselImage text="Second slide" /> */}
                            <img src={c2} alt="" style={{ height: '50vh', width: '100%' }} />
                        </Carousel.Item>
                        <Carousel.Item>
                            {/* <ExampleCarouselImage text="Third slide" /> */}
                            <img src={c3} alt="" style={{ height: '50vh', width: '100%' }} />

                            {/* <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption> */}

                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className='text-center' id='div-sentence' style={{ margin: "100px", fontSize: '20px' }} >
                    Wellness Ally was founded with the belief that healthy lifestyle habits promote happiness, confidence, and overall wellbeing. Feel empowered by taking control of your wellness with simple and attainable nutrition and lifestyle changes. Wellness Ally offers both long-term and short-term plans to meet the unique needs of our clients. Witness the effects of improved energy, balance, health and happiness in your daily life.
                </div>
                <div className='d-flex justify-content-center aligh-items-center' >
                    <p id='div-p' style={{ fontSize: '50px', fontWeight: 'bold' }}> Our Programs  </p> <br />

                </div>

                <div style={{ margin: '20px' }}>
                    <Container>

                        <Row>
                            <Col>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="140"
                                        image={cd1}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Medication suggestion 
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                    <Button size="small">Read More</Button>
                                    </CardActions>
                                </Card>
                            </Col>

                            <Col>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="140"
                                        image={cd2}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Symptom Management
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                    <Button size="small">Read More</Button>
                                    </CardActions>
                                </Card>
                            </Col>

                            <Col>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="140"
                                        image={cd3}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Exercise Videos
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                    <Button size="small">Read More</Button>
                                    </CardActions>
                                </Card>
                            </Col>

                            <Col>

                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="140"
                                        image={cd4}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Diet Plans
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Read More</Button>
                                     
                                    </CardActions>
                                </Card>
                            </Col>
                        </Row>
                    </Container>

                </div>

            </div>
           
           
            <Footer /> 
        </>
    )
}

export default Home