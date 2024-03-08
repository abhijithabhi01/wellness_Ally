import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import { Card, Col, Row } from 'react-bootstrap';
import Footer from '../Components/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';

function HealthProfile() {
    const currentUrl = window.location.href;
    const url = currentUrl;
    const parts = url.split('/');
    const id = parts[parts.length - 1];

    const [healthProfiles, setHealthProfiles] = useState([]);
   

    useEffect(() => {
        healthData();
    }, []);

    async function healthData() {
        try {
            const response = await axios.get(`http://localhost:8000/api/v1/health-profiles/${id}`);
            setHealthProfiles(response.data.data);
        //   setHeading(response.data.data)
        //   console.log(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

  
    const imgUrl =" http://localhost:8000/"
    return (
        <>
            <div style={{ height: '90vh' }}>
                <Header />
                 
                <Row className="m-5">
                    {healthProfiles.map((profile) => (
                        <div style={{width:'350px'}} key={profile.id}> 
                        <Link to={`/health-issue/${profile.issue.id}`} style={{textDecoration:'none'}}>
                            <Card   className='mt-5'  style={{ width: '25rem' }}>
                                <Card.Img variant="top" src={`${imgUrl}${profile.issue.image} `}/>
                                <Card.Body>
                                    <Card.Title className='fw-bold fs-4'>{profile.issue.issue}</Card.Title>
                                    <Card.Text className='text-danger  fs-5  fw-bolder'>
                                       {profile.condition.name}
                                    </Card.Text>
                                    <Card.Text className='fs-7  fw-bold '>
                                     {profile.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </Link>
                        </div>
                    ))}
                </Row>
            </div>
            <Footer />
        </>
    );
}

export default HealthProfile;
