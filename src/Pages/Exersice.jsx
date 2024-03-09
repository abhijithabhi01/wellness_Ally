import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Components/Header';
import axios from 'axios';
import './StyleSheets/Symptoms.css';

function Exercise() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const id = queryParams.get("id");
  const [data, setData] = useState([]);

  console.log(id);

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

  return (
    <>
      <Header />
      <div className="symptoms-container">
        {data.map((symptom) => (
          <div key={symptom.id} className="symptom-card">
            <div className="symptom-image">
              {symptom.video && (
                <video controls width="100%">
                  <source src={API_URL + symptom.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {symptom.image && (
                <img
                  src={API_URL + symptom.image}
                  alt={symptom.name}
                  className="s-image"
                />
              )}
            </div>
            <div className="symptom-content">
              <p className='fs-1 fw-bold'>{symptom.name}</p>
              <p>{symptom.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Exercise;
