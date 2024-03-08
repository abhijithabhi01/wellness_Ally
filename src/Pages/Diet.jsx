// import React, { useEffect, useState } from 'react';
// import dietImg from '../assets/diet.png';
// import axios from 'axios';

// function Diet() {
//     const currentUrl = window.location.href;
//     const url = currentUrl;
//     const parts = url.split('/');
//     const id = parts[parts.length - 1];
//     console.log(id);

//     const [conditions, setConditions] = useState([]);

//     useEffect(() => {
//         dietData();
//     }, []);

//     async function dietData() {
//         try {
//             const response = await axios.get(`http://localhost:8000/api/v1/health-profiles/${id}`);
//             setConditions(response.data.data.map(item => item.condition));
//             console.log(response.data.data);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     }

//     return (
//         <>
//             <div className='mb-5'>
//                 <div>
//                     <h1 style={{ textAlign: 'center', fontSize: '55px', fontFamily: 'monospace', fontWeight: 'bold', fontFamily: 'monospace' }}>Conditions</h1>
//                 </div>
//                 <div className='container mt-5'>
//                     <div className='row'>
//                         {conditions.map(condition => (
//                             <div className='col-lg-6' key={condition.id}>
//                                 <div>
//                                     <h2>{condition.name}</h2>
//                                     <p>{condition.description}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Diet;
