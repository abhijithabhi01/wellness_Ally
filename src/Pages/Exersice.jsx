import React from 'react'
import { useLocation } from 'react-router-dom';

function Exercise() {
  
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const id = queryParams.get("id");
    console.log(id)
  return (
    <div>Exercise</div>
  )
}

export default Exercise