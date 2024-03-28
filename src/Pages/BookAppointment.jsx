import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import { Link } from 'react-router-dom';


function BookAppointment() {
    const API_URL = import.meta.env.VITE_APP_API_URL;
    const [existinguser, setExistingUser] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const [dateTime, setDateTime] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [response, setResponse] = useState([]);
    const [bookeddate, setbookeddate] = useState('');
    const [bookedtime, setbookedtime] = useState('');
    const [bookingDetails, setBookingDetails] = useState({
        title: '',
        appointment_time: '',
        paid: ''
    });
    const [paymentOption, setPaymentOption] = useState('');

    const handleShow = () =>{
        const {title,paid} = bookingDetails
       

        if(!title || !paid){
            toast.info(`Please fill the Details Completely`)
        }
       else{
        setShow(true);
    
       }
    }
    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        setBookingDetails({
            ...bookingDetails,
            appointment_date: selectedDate,
        });
    };

    const handleTimeChange = (e) => {
        const selectedTime = e.target.value;
        setTime(selectedTime);
        setBookingDetails({
            ...bookingDetails,
            appointment_time: selectedTime,
        });
    };

    const handlePaymentOptionChange = (e) => {
        const option = e.target.value;
        setPaymentOption(option);
        setBookingDetails({
            ...bookingDetails,
            paid: option === '1' ? '1' : '0',
        });
    };

    const handleCategoryChange = (e) => {
        const categoryValue = e.target.value;
        setBookingDetails({
            ...bookingDetails,
            title: categoryValue,
        });
    };

    const handleSubmit = async () => {
        try {
            // Combine date and time into a single string
            const datetime = `${date}T${time}`;
    
            const token = sessionStorage.getItem('token');
            const response = await axios.post(
                `${API_URL}/api/v1/appointment/create/`,
                { ...bookingDetails, appointment_time: datetime },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
    
            if (response.status === 201) {
                toast.success('Booking successful');
                setResponse(response.data);
                handleShow2();
                handleClose();
                const dateObject = new Date(response.data.appointment_time);

                setbookeddate(dateObject.toLocaleDateString());
                setbookedtime(dateObject.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
                
                setBookingDetails({
                    title: '',
                    appointment_date: '',
                    appointment_time: '',
                    paid: '',
                });
            } else {
                toast.error('Error While Booking');
                console.error('Error sending message:', response.statusText);
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };
    

    return (
        <>
            <div style={{ padding: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ height: '90vh', width: '700px', border: "2px solid black", padding: "45px", backgroundColor: '#A5DD9B' }}>
                    <div style={{textAlign:'center'}}><h1 style={{ color: 'black', margin: '20px' }}>Book Appointment</h1></div>
                  
                    <div className="category-div" style={{display:'flex',justifyContent:'center',margin:'20px'}}>
                <label className='dropdown' htmlFor="category" style={{color:'black',fontSize:"20px"}}>Select a category:</label>
                <select id="category" style={{margin:'0px 0px 0px 20px',fontSize:'20px',backgroundColor:'white'}} onChange={handleCategoryChange}>
                    <option value="">Select...</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="ENT">ENT</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="General Medicine">General Medicine</option>
                    <option value="Gastroenterology">Gastroenterology</option>
                    <option value="Dentist">Dentist</option>
                </select>
            </div>
                    
                    <div style={{ margin: "25px 0px 0px 0px ", color: 'black',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                  <p style={{ color: 'black', fontSize: "18px" }}>Please select a valid date and time <span style={{ color: 'red' }}>(Monday to Saturday, 9 AM to 5 PM)</span>.</p>
                    <label htmlFor="date" className='m-2'>Select Date:</label>
                <input
                className='m-2'
                    type="date"
                    id="date"
                    value={date}
                    onChange={handleDateChange}
                    style={{height:'40px'}}
                />

                <label htmlFor="time" className='m-2'>Select Time:</label>
                <input
                className='m-2'
                    type="time"
                    id="time"
                    value={time}
                    onChange={handleTimeChange}
                    style={{height:'40px'}}
                />

                        {/* <div>
                        {!isDateTimeValid(dateTime) &&<div> <p style={{ color: 'black', fontSize: "18px" }}>Please select a valid date and time <span style={{ color: 'red' }}>(Monday to Saturday, 9 AM to 5 PM)</span>.</p></div>}
                          <div style={{display:'flex',justifyContent:'center'}}>
                                <label htmlFor="dateTime" style={{ margin: '10px',fontSize:"20px" }}>Select Date and Time:</label>
                                <input
                                    type="datetime-local"
                                    id="dateTime"
                                    name="dateTime"
                                    value={dateTime}
                                    onChange={handleDateTimeChange}
                                    style={{ backgroundColor: '#A5DD9B',fontSize:"20px" }}
                                />
                          </div>
                            <div className='d-flex mt-3'>
                                <p>You have Selected</p>
                                <div className='ms-2'>
                                    <p>date:<span className='ms-2'>{date}</span></p>
                                    <p>time:<span className='ms-2'>{time}</span></p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div >
                        <form style={{display:'flex', justifyContent:'center',margin:'20px'}}>
                            <input
                                type="radio"
                                id="payOnline"
                                name="paymentOption"
                                value="1"
                                checked={paymentOption === '1'}
                                onChange={handlePaymentOptionChange}
                                style={{fontSize:'40px'}}
                            />
                            <label htmlFor="payOnline" className='mt-2 ms-2' style={{ color: 'black',fontSize:'20px' }}>Pay Online</label><br />

                            <input
                                type="radio"
                                id="payLater"
                                name="paymentOption"
                                value="0"
                                checked={paymentOption === '0'}
                                onChange={handlePaymentOptionChange}
                                className='ms-5'
                                style={{fontSize:'40px'}}
                            />
                            <label htmlFor="payLater" className='mt-2 ms-3' style={{ color: 'black',fontSize:'20px' }}>Pay Later</label><br /><br />
                        </form>
                    </div>
                <div style={{display:'flex',justifyContent:'center',margin:'20px 0px 0px 0px'}}>
                        <Button style={{ backgroundColor: '#4CCD99' }} onClick={handleShow} >
                            Go to Payment
                        </Button>
                </div>
                   
                </div>
            </div>

            {/* modal */}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Payment</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                  
                    <div style={{ display: 'grid', gridTemplateColumns: 'auto', gap: '0px'}}>
                    <div style={{ width: '100%', background: 'rgb(255, 250, 235)', boxShadow: '0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)' }}>
                      <label style={{ width: '100%', height: '40px', position: 'relative', display: 'flex', alignItems: 'center', paddingLeft: '20px', borderBottom: '1px solid rgba(16, 86, 82, .75)', fontWeight: '700', fontSize: '20px', color: '#000000' }}>Book Now</label>
                      <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
                        <div style={{ display: 'grid', gap: '10px' }}>
                          <div>
                           
                            <p style={{ fontSize: '22px', fontWeight: '600', color: '#000000' }}>You Have choosen - <span>{bookingDetails.title}</span></p>
                            <div className='d-flex'>
                              <h5 style={{color:"black"}}>You have Selected -</h5>
                              <div className='ms-2'>
                            <p style={{ fontSize: '18px', fontWeight: '600', color: '#000000' }}>date:<span className='ms-2'>{date}</span></p>
                            <p style={{ fontSize: '18px', fontWeight: '600', color: '#000000' }}>Time:<span className='ms-2'>{time}</span></p>
                            </div>
                            </div>
                          </div>
                          <hr style={{ height: '1px', backgroundColor: 'rgba(16, 86, 82, .75)', border: 'none' }} />
              
                          
              
              {paymentOption == 1?
              <p style={{color:'black',fontSize:'18px'}}>Payment Method : Online Payment</p>
              :
              <p style={{color:'black',fontSize:'18px'}}>Payment Method : Pay later</p>
              }
                  <div className='payonliediv' style={{ display: paymentOption === '1' ? 'block' : 'none' }}>
              
                      
                               {/* card */}   <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-end', width: '410px', height: '200px', backgroundImage: 'radial-gradient(circle 897px at 9% 80.3%, rgba(55, 60, 245, 1) 0%, rgba(234, 161, 15, 0.9) 100.2%)', borderRadius: '10px', padding: '20px', fontFamily: 'Arial, Helvetica, sans-serif', position: 'relative', gap: '15px',margin:'0px 0px 0px 5px' }}>
                                  <h2 style={{color:"black"}}>Card Details</h2>
                            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', height: 'fit-content', position: 'absolute', top: '0', left: '0', padding: '18px' }}>
                      
                              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="23" height="23" viewBox="0 0 48 48" style={{ height: '40px', width: 'auto' }}>
                                <path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"></path>
                                <path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"></path>
                                <path fill="#ff3d00" d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48C20.376,15.05,18,19.245,18,24z"></path>
                              </svg>
                            </div>
                            <div style={{ width: '100%', height: 'fit-content', display: 'flex', flexDirection: 'column' }}>
                              <label htmlFor="cardNumber" style={{ fontSize: '8px', letterSpacing: '1.5px', color: '#e2e2e2', width: '100%' }}>CARD NUMBER</label>
                              <input id="cardNumber" placeholder="XXXX XXXX XXXX XXXX" name="cardNumber" type="text" style={{ backgroundColor: 'transparent', border: 'none', outline: 'none', color: 'white', caretColor: 'red', fontSize: '13px', height: '25px', letterSpacing: '1.5px', width: '100%' }} maxLength={'16'}/>
                            </div>
                            <div style={{ width: '100%', height: '45px', display: 'flex', gap: '10px' }}>
                              <div style={{ width: '60%', height: 'fit-content', display: 'flex', flexDirection: 'column' }}>
                                <label htmlFor="holderName" style={{ fontSize: '8px', letterSpacing: '1.5px', color: '#e2e2e2', width: '100%' }}>CARD HOLDER</label>
                                <input id="holderName" placeholder="NAME" type="text" style={{ backgroundColor: 'transparent', border: 'none', outline: 'none', color: 'white', caretColor: 'red', fontSize: '13px', height: '25px', letterSpacing: '1.5px' }}  maxLength={'16'}/>
                              </div>
                              <div style={{ width: '30%', height: 'fit-content', display: 'flex', flexDirection: 'column' }}>
                                <label htmlFor="expiry" style={{ fontSize: '8px', letterSpacing: '1.5px', color: '#e2e2e2', width: '100%' }}>VALID THRU</label>
                                <input id="expiry" placeholder="MM/YY" type="text" style={{ backgroundColor: 'transparent', border: 'none', outline: 'none', color: 'white', caretColor: 'red', fontSize: '13px', height: '25px', letterSpacing: '1.5px', width: '100%' }}  maxLength={'5'}/>
                              </div>
                              <div style={{ width: '10%', height: 'fit-content', display: 'flex', flexDirection: 'column' }}>
                                <label htmlFor="cvv" style={{ fontSize: '8px', letterSpacing: '1.5px', color: '#e2e2e2', width: '100%' }}>CVV</label>
                                <input placeholder="***" maxLength="3" id="cvv" type="password" style={{ backgroundColor: 'transparent', border: 'none', outline: 'none', color: 'white', caretColor: 'red', fontSize: '13px', height: '25px', letterSpacing: '1.5px', width: '100%' }} />
                              </div>
                            </div>
                          </div>
                                  <hr style={{ height: '1px', backgroundColor: 'rgba(16, 86, 82, .75)', border: 'none' }} />
                                
                                  <div className="payments">
                                  
                                    <div className="details" style={{ display: 'grid', gridTemplateColumns: '5fr 1fr', padding: '0px', gap: '5px' }}>
                                      
                                      <span style={{ fontSize: '18px', fontWeight: '600', color: '#000000', margin: 'auto auto auto 0' }}>Total:</span>
                                      <span style={{ fontSize: '18px', fontWeight: '600', color: '#000000' }}>$5.40</span>
                                    </div>
                                  </div>
                                  <div style={{ width: '100%', background: 'rgb(255, 250, 235)', boxShadow: '0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)'}}>
                              <div style={{ display:'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 10px 10px 20px', }}>
                              
                                <button onClick={handleSubmit} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', height: '36px', background: 'green', boxShadow: '0px 0.5px 0.5px rgba(16, 86, 82, .75), 0px 1px 0.5px rgba(16, 86, 82, .75)', borderRadius: '7px', border: '1px solid rgb(16, 86, 82)', color: 'white', fontSize: '18px', fontWeight: '600', transition: 'all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1)' }}>Book Now</button>
                              </div>
                            </div>
                              </div>
              
                              <div style={{ display: paymentOption === '0' ? 'block' : 'none', width: '100%', background: 'rgb(255, 250, 235)', boxShadow: '0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)'}}>
                              <div style={{ display:'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 10px 10px 20px', 
                       }}>
                               
                                <button onClick={handleSubmit} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', height: '36px', background: 'green', boxShadow: '0px 0.5px 0.5px rgba(16, 86, 82, .75), 0px 1px 0.5px rgba(16, 86, 82, .75)', borderRadius: '7px', border: '1px solid rgb(16, 86, 82)', color: 'white', fontSize: '18px', fontWeight: '600', transition: 'all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1)' }}>Book Now</button>
                              </div>
                            </div>
                            </div>
                          
                  </div>
              
                        </div>
                  </div>
            
    







   
        </Modal.Body>
      
      </Modal>




      <Modal
                show={show2}
                onHide={handleClose2}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header style={{display:"flex",justifyContent:'space-between'}}>
                    <Modal.Title><h4  style={{color:'white',height:'35px'}}>Your Booking Was Successful</h4> </Modal.Title>
<Link to={'/home'}><button style={{fontSize:"35px",margin:'-15px 0px 0px 0px',background:'none',color:"red"}}>x</button>                    </Link>
                </Modal.Header>
                <Modal.Body>

                    
                <div className='responsediv' style={{color:'black',backgroundColor:'white'}}>
    <div><h5  style={{color:'black',height:'40px',fontSize:'25px'}}>Booking Details :</h5></div>
    {response && response.patient && (
        <div style={{border:'3px solid black',borderRadius:'10px',margin:'5px'}}>   
              <h4 className='p-2'><span>You Have Booked For : </span>{response.title}</h4>
            <h4  className='p-2'><span>Name : </span>{response.patient.full_name}</h4>
            <h4  className='p-2'><span>Phone No : </span>+91 {response.patient.phone}</h4>
            <h4  className='p-2'><span>Gender : </span>{response.patient.gender}</h4>
            <h4  className='p-2'><span>Booked Date : </span>{bookeddate}</h4>
            <h4  className='p-2'><span>Booked Time : </span>{bookedtime}</h4>
            <h4  className='p-2'><span>Payment : </span>{response.paid == true ?' Success':'Pay Later'}</h4>
            
        </div>
    )}
</div>

           
        </Modal.Body>
      
      </Modal>
      <ToastContainer theme='colored' autoClose='1500' />
    </>
  )
}

export default BookAppointment