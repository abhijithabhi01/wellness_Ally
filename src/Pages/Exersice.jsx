import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Components/Header';
import axios from 'axios';
import Modal from 'react-modal';
import './StyleSheets/Symptoms.css';
import { Button } from 'react-bootstrap';

// Set the root element for the Modal
Modal.setAppElement('#root');

function Exercise() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const id = queryParams.get('id');
  const [data, setData] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const API_URL = import.meta.env.VITE_APP_API_URL;

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(`${API_URL}/api/v1/exercise-videos/${id}`);
      setData(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const openVideoPopup = (videoUrl, videoHeading) => {
    setSelectedVideo({ url: videoUrl, heading: videoHeading });
  };

  const closeVideoPopup = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <Header />  
      <div className="text-center mb-4 mt-4">
        <h1>Exercise</h1>
      </div>

      <div className="symptoms-container">
        {data.map((symptom) => (
          <div key={symptom.id} className="symptom-card hide-scrollbar">
            <div className="symptom-image">
              {symptom.image && (
                <img src={API_URL + symptom.image} alt={symptom.name} className="s-image" />
              )}
            </div>
            <div className="symptom-content">
              <p className="fs-1 fw-bold">{symptom.name}</p>
              <p>{symptom.description}</p>
              <Button size="sm" onClick={() => openVideoPopup(API_URL + symptom.video, symptom.name)}>
                Play Video
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={selectedVideo !== null}
        onRequestClose={closeVideoPopup}
        contentLabel="Video Modal"
      >
        {selectedVideo && (
          <>
            <h2>{selectedVideo.heading}</h2>
            <video controls>
              <source src={selectedVideo.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Button size="sm" variant="secondary" onClick={closeVideoPopup}>
              Close
            </Button>
          </>
        )}
      </Modal>
    </>
  );
}

export default Exercise;
