import React from 'react'
import diet from '../assets/diet.png';
function Diet() {
    return (
        <>
            <div>
                <div>
                    <h1 style={{textAlign:'center', fontSize: '55px', fontFamily: 'monospace', fontWeight: 'bold' }}>Diet for     </h1>
                </div>
                <div className='container mt-5'>
                    <div className='row'>
                    <div className='col-lg-6'>
                        <img  style={{width:'100%'}} src={diet} alt="" />
                    </div>

                    <div className='col-lg-6'>
                        <p className='ms-5 fs-3 fw-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eveniet est ex maxime consectetur adipisci vero commodi, accusantium sit minima inventore ea, earum velit facere eum qui asperiores! Reprehenderit, dignissimos.</p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Diet