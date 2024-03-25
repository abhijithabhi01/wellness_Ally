import { useState,React } from 'react';
import Header from '../../Components/Header'
import {
  Button,
  Card,
  Col,
  FloatingLabel,
  Form,
  ListGroup,
  Row,
} from "react-bootstrap"
import { useLocation } from 'react-router-dom';


function Payment() {
    
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const Pid = queryParams.get("pid");
  console.log(Pid)

  const [paymentMethod, setPaymentMethod] = useState('card');

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <>
    <Header />
    <h1 style={{textAlign: 'center'}}>Confirm Order</h1>
    <div style={{ marginTop: "100px" }}>
        <Row className="hide-scrollbar d-flex justify-content-between align-items center w-100">
          <Col></Col>
          <Col lg={5}>
            <div className=" border rounded ">
              <Card style={{ width: "100%" }}>
                <Card.Img
                  variant="top"
                  src="holder.js/100px180?text=Image cap"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the content.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </div>

            <div className="container border rounded mt-5">
              <Form>
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Full Name"
                  className="mb-3"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Enter your full name here"
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingTextarea2" label="Address">
                  <Form.Control
                    as="textarea"
                    placeholder="Enter your full address here"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>

                <FloatingLabel
                  controlId="floatingSelectGrid"
                  className="mt-3"
                >
                  <Form.Select aria-label="Floating label select example">
                    <option selected hidden>
                      Choose State
                    </option>
                    <option value="1">Kerala</option>
                    <option value="2">TamilNadu</option>
                    <option value="3">Karnataka</option>
                    <option value="3">Maharashtra</option>
                  </Form.Select>
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
                  <Form.Control type="tel" placeholder="Valid Card Number" />
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
                <Form.Control type="tel" placeholder="MM / YY" />
              </Form.Group>
            </div>
            <div>
              <Form.Group className='mt-2'>
              <Form.Label>
                </Form.Label>
                <Form.Control type="tel" placeholder="CVC" />
              </Form.Group>
            </div>

            <div>
              <Form.Group className='mt-2'>
                <Form.Label></Form.Label>
                <Form.Control type="text" placeholder="Card Owner Name" />
              </Form.Group>
            </div>
          <div>
            <Form.Group>
              {/* Add your card input fields here */}
            </Form.Group>
          </div>
          <div className="d-grid mt-3">
            <Button className="btn btn-info">Place Your Order</Button>
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
           <Button className="btn btn-info">Place Your Order</Button>
         </div>
       </>
      )}
      {paymentMethod === 'cod' && (
        <>
          <div className="d-grid mt-3">
           <Button className="btn btn-info">Place Your Order</Button>
         </div>
        </>
      )}
    </Col>
          <Col></Col>
        </Row>
      </div>
    </>
  )
}

export default Payment