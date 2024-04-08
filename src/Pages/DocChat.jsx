import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";


function DocChat() {
    const [existinguser, setExistingUser] = useState([]);
    const API_URL = import.meta.env.VITE_APP_API_URL;
    const [takeInput, setTakeInput] = useState({ 
        message: "" 
    });
    const [listChat, setListChat] = useState([]);

    useEffect(() => {
        if (sessionStorage.getItem('existinguser')) {
            setExistingUser(JSON.parse(sessionStorage.getItem('existinguser')));
        }
    }, []);

    // send chat
    const handleSubmit = async () => {
        const { message } = takeInput;
        try {
            const token = sessionStorage.getItem("token");
            const response = await axios.post(`${API_URL}/api/v1/personal-chat/create/`, takeInput, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 201) {
                toast.success('Message sent successfully');
                setTakeInput({ message: "" });
                ListChat();
                // Call ListChat function after sending the message
            
            } else {
                console.error('Error sending message:', response.statusText);
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };


    // fetch chat
    const ListChat = async () => {
        try {
            const token = sessionStorage.getItem("token");
            const response = await axios.get(`${API_URL}/api/v1/personal-chat/list/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            if (response.status == 200) {
                console.log('Chat list retrieved successfully');
                setListChat(response.data);
            } else {
                console.error('Error retrieving chat list:', response.statusText);
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    // if(handleSubmit){
    //     useEffect(() => {
    //         ListChat(); // Call ListChat when component mounts
    //     }, [ha]);
    // }
    ListChat();
console.log(listChat);
  return (
    <>

<div style={{  width: '90%', height: '500px', margin: '0px 30px 30px 37px', backgroundColor: '#343541', borderRadius: '8px', display: 'flex', flexDirection: 'column',justifyContent:'center',alignItems:'center' }}>
                <div style={{ width: '100%', height: '80px', backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h3 style={{ color: '#ffffff', whiteSpace: 'nowrap', margin: '10px', userSelect: 'none',height:'35px' }}>Talk to Doctor</h3>
                    {/* <div className="close" style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', cursor: 'pointer' }}>
                        <div className="line one" style={{ position: 'absolute', width: '20px', height: '3px', backgroundColor: '#6B6C7B', borderRadius: '30px', transform: 'rotate(45deg)' }}></div>
                        <div className="line two" style={{ position: 'absolute', width: '20px', height: '3px', backgroundColor: '#6B6C7B', borderRadius: '30px', transform: 'rotate(135deg)' }}></div>
                    </div> */}
                </div>
                <div className="messages-area" style={{ backgroundColor: '#343541', width: '100%', height: '500px', overflow: 'scroll', scrollbarWidth: 'none' }}>
                    {listChat.map((message, index) => (
                       <>
                            <div key={index} className={`message ${index % 2 === 0 ? 'one' : 'two'}`} style={{ width: '100%', height: '60px', backgroundColor: index % 2 === 0 ? '#2E2F3A' : '#343541' }}>
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" alt="no image" style={{ height: '35px', width: '35px', borderRadius: '50%', margin: '10px' }} />
                                {message.sender}: {message.message}
                            </div>
                             <div key={index} className={`message ${index % 2 === 0 ? 'one' : 'two'}`} style={{ width: '100%', height: '60px', backgroundColor: index % 2 === 0 ? '#2E2F3A' : '#343541' }}>
                           {message.replay && 
                           <>
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" alt="no image" style={{ height: '35px', width: '35px', borderRadius: '50%', margin: '10px' }} />
                             Doctor: {message.replay}
                           </>
                             }
                            
                         </div>
                       </>
                    ))}
                </div>
                <div className="sender-area" style={{ backgroundColor: '#343541', width: '100%', height: '90px', display: 'flex', borderRadius: '8px', marginBottom: '10px',padding:'0px 10px' }}>
                    <div className="input-place" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '15px', marginLeft: '10px', alignItems: 'center', backgroundColor: '#40414F', borderRadius: '7px', height: '50px', width: '100%', gap: '5px', border: '1px solid #2E2F3A' }}>
                        <input placeholder="Send a message." className="send-input" type="text" value={takeInput.message} onChange={(e) => setTakeInput({ ...takeInput, message: e.target.value })} style={{ outline: 'none', display: 'flex', border: 'none', background: 'none', height: '40px', width: '100%', borderRadius: '7px', color: 'white', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', marginLeft: '5px' }} />
                        <div onClick={handleSubmit} className="send" style={{ width: '30px', height: '30px', backgroundColor: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} >
                            <svg className="send-icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve">
                                <g>
                                    <g>
                                    <path fill="#6B6C7B" d="M481.508,210.336L68.414,38.926c-17.403-7.222-37.064-4.045-51.309,8.287C2.86,59.547-3.098,78.551,1.558,96.808 L38.327,241h180.026c8.284,0,15.001,6.716,15.001,15.001c0,8.284-6.716,15.001-15.001,15.001H38.327L1.558,415.193 c-4.656,18.258,1.301,37.262,15.547,49.595c14.274,12.357,33.937,15.495,51.31,8.287l413.094-171.409 C500.317,293.862,512,276.364,512,256.001C512,235.638,500.317,218.139,481.508,210.336z"></path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer theme='colored' autoClose='2000' />
    </>
  )
}

export default DocChat