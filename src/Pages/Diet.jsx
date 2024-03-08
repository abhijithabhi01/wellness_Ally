import React from 'react'
import { useLocation } from 'react-router-dom';

function Diet() {
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
  const id = queryParams.get("id");
    console.log(id)
  return (
    <div>Diet</div>
  )
}

export default Diet