import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from '../../Components/Header'
import axios from "axios";
import {
  Button,
  Card,
  Col,
  FloatingLabel,
  Form,
  ListGroup,
  Row,
  Toast,
} from "react-bootstrap"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Payment() {
  const API_URL = import.meta.env.VITE_APP_API_URL;
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const pid = queryParams.get("id");
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [product, setProduct] = useState(null);
  const [productprice, setProductprice] = useState("");
  const [priceChangeCount, setPriceChangeCount] = useState(1);
  const navigate = useNavigate()
  const [paymentDetails,setPaymentdetails] = useState({
    name:"",
    product_id:pid,
    quantity:0,
    address:""
  })
  const [carddetails,setcarddetaild] = useState({
    cardnumber:"",
    mm:"",
    cvc:"",
    cardname:""
  })
 // console.log(pid)

  // console.log(API_URL);
  const location = useLocation();
  const { data } = location.state;
 // console.log(data);


  useEffect(() => {
    if (data) {
      const foundProduct = data.find(item => item.id == pid);
      setProduct(foundProduct);
    }
    if (product) {
      setProductprice(product.price)
    }
  }, [pid]);


 // console.log(product);
  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

 // console.log(productprice);

  const handleIncrease = () => {
    setPriceChangeCount(count => count + 1);
    if (priceChangeCount > 1) {
      const updatedPrice = (product && parseFloat(product.price) * priceChangeCount).toFixed(2);
      setProductprice(updatedPrice);
    }
  };

  const handleDecrease = () => {
    if (priceChangeCount > 1) { // Ensure price doesn't go below original price
      setPriceChangeCount(count => count - 1);
      const updatedPrice = (product && parseFloat(product.price) * (priceChangeCount - 1)).toFixed(2);
      setProductprice(updatedPrice);
    }
  };
  useEffect(() => {
    if (product) {
      const updatedQuantity = priceChangeCount > 1 ? priceChangeCount - 1 : priceChangeCount;
      setPaymentdetails(prevState => ({
        ...prevState,
        quantity: updatedQuantity
      }));
    }
  }, [priceChangeCount, product]);
  
  // handle buy
  const  HandleBuyProduct = async (e) =>{
    e.preventDefault();
    
   
    const {name,product_id,quantity,address} = paymentDetails
    const {cardname,cardnumber,mm,cvc} = carddetails

    if ( !name || !address) {
toast.info('Please fill the Details Completely');
      return;
    }
    try {
      const token = sessionStorage.getItem("token");
      console.log(token);
      const formData  = new FormData();
      formData.append('product_id',product_id);
      formData.append('quantity',quantity);
      formData.append('address',address);
    
      const response = await axios.post(`${API_URL}/api/v1/order/create/`,formData,{
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type':'application/json'
        }
      });

 if(response.status == 201){
  toast.success(`Payment Success`)
  setTimeout(() => {
    navigate('/home')
  }, 2000);
setPaymentdetails({
  name:"",
  address:""
})

 }
 else{
  toast.error(`Payment failed`)
 }
      console.log(response);
    } catch (err) {
      setError('Login failed. Please try again.');
      console.log(err);
    }
  };
  console.log(paymentDetails);
 //console.log(carddetails);
  return (
    <>
      <Header />
      <h1 style={{ textAlign: 'center' }}>Confirm Order</h1>
      <div style={{ margin: "30px 0px 50px 0px" }}>
        <Row className="hide-scrollbar d-flex justify-content-between align-items center w-100" >
          <Col></Col>
          <Col lg={5}>
            <div className=" border rounded ">
              {product && <Card style={{ width: "100%" }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Card.Img
                    variant="top"
                    src={`${API_URL}/${product.image}`}
                    style={{ height: '200px', width: '150px', }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    {product.description}
                  </Card.Text>
                  <div style={{display:'flex',justifyContent:'space-between'}}>
                    <div className="d-flex">
                      <h5>Price :</h5>
                      <h5>{productprice ? productprice : product.price}</h5>
                    </div>

                    <div className="additem" style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',border:'1px solid white',height:'60px',width:'120px',borderRadius:"10px"}}>
                      <button onClick={handleDecrease} style={{margin:'0px 0px 0px 20px',fontSize:'50px',color:'red',background:'none'}}>-</button>
                      <h6 style={{marginTop:'15px',fontSize:'25px',padding:'5px'}}>{priceChangeCount>1? priceChangeCount - 1:priceChangeCount}</h6>
                      <button onClick={handleIncrease}  style={{fontSize:'30px',color:'green',marginTop:'5px',background:'none'}}>+</button>

                    </div>
                  </div>
                </Card.Body>

              </Card>}
            </div>

            <div className="container border rounded mt-5">
              <Form>
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Full Name"
                  className="mb-3 m-2 text-dark"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Enter your full name here"
                    onChange={(e)=>setPaymentdetails({...paymentDetails,name:e.target.value})} 
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingTextarea2" label="Address" className="m-2 text-dark">
                  <Form.Control
                    as="textarea"
                    placeholder="Enter your full address here"
                    onChange={(e)=>setPaymentdetails({...paymentDetails,address:e.target.value})} 
                    style={{ height: "100px"}}
                  
                  />
                </FloatingLabel>

                <FloatingLabel
                  controlId="floatingSelectGrid"
                  className="mt-3"
                >
                  {/* <Form.Select aria-label="Floating label select example">
                    <option selected hidden>
                      Choose State
                    </option>
                    <option value="1">Kerala</option>
                    <option value="2">TamilNadu</option>
                    <option value="3">Karnataka</option>
                    <option value="3">Maharashtra</option>
                  </Form.Select> */}
                </FloatingLabel>
              </Form>
            </div>
          </Col>
          <Col lg={5} className="container border rounded">
            <div>
              <h3 className="text-center">Payment Method</h3>
              <Form.Group className="mt-3">
                <Form.Check
                  type="radio"
                  label="Card"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={handlePaymentMethodChange}
                />
                <Form.Check
                  type="radio"
                  label="UPI"
                  value="upi"
                  checked={paymentMethod === 'upi'}
                  onChange={handlePaymentMethodChange}
                />
                <Form.Check
                  type="radio"
                  label="Cash on Delivery"
                  value="cod"
                  checked={paymentMethod === 'cod'}
                  onChange={handlePaymentMethodChange}
                />
              </Form.Group>
            </div>
            {paymentMethod === 'card' && (
              <>
                <h3 className="text-center">Card Payment Gateway</h3>
                <div className="inlineimage d-flex justify-content-center">
                  <img
                    width={"90px"}
                    className="img-responsive images m-2"
                    src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Mastercard-Curved.png"
                    alt="Mastercard"
                  />
                  <img
                    width={"90px"}
                    className="img-responsive images m-2"
                    src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Discover-Curved.png"
                    alt="Discover"
                  />
                  <img
                    width={"90px"}
                    className="img-responsive images m-2"
                    src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Paypal-Curved.png"
                    alt="Paypal"
                  />
                  <img
                    width={"90px"}
                    className="img-responsive images m-2"
                    src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/American-Express-Curved.png"
                    alt="American Express"
                  />
                </div>

                <div>
                  <Form.Group>
                    <div className="input-group">
                      <Form.Control type="tel" placeholder="Valid Card Number"   
                             value={carddetails.cardnumber}
                      onChange={(e)=>setcarddetaild({...carddetails,cardnumber:e.target.value})} maxLength={'16'}/>
                      <span className="input-group-addon">
                        <span>
                          <i className="fa-regular fa-credit-card fa-2x ms-2"></i>
                        </span>
                      </span>
                    </div>
                  </Form.Group>
                </div>
                <div>
                  <Form.Group className='mt-2'>
                    <Form.Label>
                    </Form.Label>
                    <Form.Control type="tel" placeholder="MM / YY"  
                           value={carddetails.mm}
                    onChange={(e)=>setcarddetaild({...carddetails,mm:e.target.value})} maxLength={'5'}/>
                  </Form.Group>
                </div>
                <div>
                  <Form.Group className='mt-2'>
                    <Form.Label>
                    </Form.Label>
                    <Form.Control type="tel" placeholder="CVC" 
                           value={carddetails.cvc}
                     onChange={(e)=>setcarddetaild({...carddetails,cvc:e.target.value})} maxLength={'3'}/>
                  </Form.Group>
                </div>

                <div>
                  <Form.Group className='mt-2'>
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="Card Owner Name" 
                    value={carddetails.name}
                     onChange={(e)=>setcarddetaild({...carddetails,cardname:e.target.value})} maxLength={'10'}/>
                  </Form.Group>
                </div>
                <div>
                  <Form.Group>
                    {/* Add your card input fields here */}
                  </Form.Group>
                </div>
                <div className="d-grid mt-3">
                <button type="button" onClick={HandleBuyProduct} style={{backgroundColor:'green',margin:'20px',padding:'10px',color:'white',fontSize:'25px',borderRadius:'5px'}}>Place Your Order</button>
                </div>
              </>
            )}
            {paymentMethod === 'upi' && (
              <>
                <h3 className="text-center">UPI Payment Interface</h3>
                <div className="inlineimage d-flex justify-content-center">
                </div>
                <div>
                  <Form.Group>
                    <div className="input-group">
                      <Form.Control type="tel" placeholder="Enter your UPI ID here" />
                      <span className="input-group-addon">
                        <span>
                          <i className="fa-brands fa-google-pay fa-2x ms-2"></i>
                        </span>
                      </span>
                    </div>
                  </Form.Group>
                </div>
                <div className="d-grid mt-3">
                <button type="button" onClick={HandleBuyProduct} style={{backgroundColor:'green',margin:'20px',padding:'10px',color:'white',fontSize:'25px',borderRadius:'5px'}}>Place Your Order</button>
                </div>
              </>
            )}
            {paymentMethod === 'cod' && (
              <>
                <div className="d-grid mt-3">
                <button type="button" onClick={HandleBuyProduct} style={{backgroundColor:'green',margin:'20px',padding:'10px',color:'white',fontSize:'25px',borderRadius:'5px'}}>Place Your Order</button>
                </div>
              </>
            )}
          </Col>
          <Col></Col>
        </Row>
      </div>
      <ToastContainer theme='colored' autoClose='1500' />
    </>
  )
}

export default Payment