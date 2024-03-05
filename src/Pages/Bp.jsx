import React from 'react'
import Header from '../Components/Header'
import bp from '../assets/bp.jpeg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import diet from '../assets/diet.png'
import medic from '../assets/medi.jpg'
import exer from '../assets/ex.jpg'
import { /* Button, */ Card } from 'react-bootstrap';
import Footer from '../Components/Footer'

function Bp() {
    return (
        <>
            <Header />
            <div >
                <div>
                    <center>
                        <img src={bp} style={{ width: '75%', height: '70vh', marginTop: '2%' }} alt="" />
                    </center>
                </div>
                <div style={{ marginLeft: '80px', marginRight: '80px', marginTop: '80px' }}>
                    <p style={{ fontFamily: 'monospace', fontWeight: 'bold', fontSize: '50px' }}> Blood Pressure</p>
                    <p style={{ fontSize: '25px' }}>One of the most dangerous things about hypertension – or high blood pressure – is that you may not know you have it. In fact, nearly one-third of people who have high blood pressure don't know it. That’s because high blood pressure doesn’t have any symptoms unless it’s very severe. The best way to know if your blood pressure is high is through regular checkups. You can also monitor blood pressure at home. This is especially important if you have a close relative who has high blood pressure.</p>


                    <p style={{ fontFamily: 'monospace', fontWeight: 'bold', fontSize: '50px', marginTop: '80px' }}>Symptoms of Severe High Blood Pressure</p>
                    <p style={{ fontSize: '25px' }}>
                        If your blood pressure is extremely high, there may be certain symptoms to look out for, including:
                    </p>
                    <ol style={{ marginLeft: '4%' }}>
                        <li>1.Severe headaches</li>
                        <li>2.Nosebleed</li>
                        <li>3.Fatigue or confusion</li>
                        <li>4.Vision problems</li>
                        <li>5.Chest pain</li>
                        <li>6.A hard time breathing</li>
                        <li>7.Irregular heartbeat</li>
                        <li>8.Blood in the urine</li>
                        <li>9.Pounding in your chest, neck, or ears</li>
                        <li>10.Seizures</li>
                    </ol>
                    
                    <div> 
                    </div>
                     <Container>
      <Row>
        <Col sm={7}>
       

                        <h1 style={{ fontWeight: 'bolder', fontFamily: 'monospace', fontSize: '50px' }} className='mt-5 mb-5'>Diet Plans</h1>



                        <p style={{ fontSize: '18px' }}> <span style={{ fontWeight: 'bold', fontSize: '19px' }}>1. Reduce Sodium Intake:  </span>Excessive sodium consumption can raise blood pressure. Limiting processed foods, canned soups, fast food, and salty snacks can help reduce sodium intake. Aim for less than 2,300 milligrams of sodium per day, and ideally closer to 1,500 milligrams if you have high blood pressure. <br />

                            <span style={{ fontWeight: 'bold', fontSize: '19px' }}> 2. Increase Potassium:</span> Potassium helps balance sodium levels in the body and relaxes blood vessel walls, lowering blood pressure. Foods rich in potassium include bananas, sweet potatoes, spinach, avocado, and beans.<br />

                            <span style={{ fontWeight: 'bold', fontSize: '19px' }}> 3. Eat Plenty of Fruits and Vegetables:</span> These foods are rich in vitamins, minerals, and antioxidants that promote heart health and help lower blood pressure. Aim for a variety of colorful fruits and vegetables daily.<br />

                            <span style={{ fontWeight: 'bold', fontSize: '19px' }}> 4. Choose Whole Grains:</span> Opt for whole grains such as brown rice, quinoa, whole wheat bread, and oats instead of refined grains like white bread and pasta. Whole grains are higher in fiber, which can help lower blood pressure.<br />

                            <span style={{ fontWeight: 'bold', fontSize: '19px' }}> 5. Limit Saturated and Trans Fats:</span> Foods high in saturated and trans fats can raise cholesterol levels and increase the risk of heart disease. Choose healthier fats like olive oil, nuts, seeds, and fatty fish like salmon.<br />

                            <span style={{ fontWeight: 'bold', fontSize: '19px' }}> 6. Moderate Alcohol Consumption:</span> Drinking too much alcohol can raise blood pressure. Limit alcohol intake to moderate levels, which is up to one drink per day for women and up to two drinks per day for men.<br />

                            <span style={{ fontWeight: 'bold', fontSize: '19px' }}> 7. Watch Portion Sizes:</span> Overeating can lead to weight gain, which is a risk factor for high blood pressure. Be mindful of portion sizes and avoid super-sized meals.<br />

                            <span style={{ fontWeight: 'bold', fontSize: '19px' }}> 8. Reduce Added Sugars:</span> Consuming too much sugar can contribute to weight gain and increase blood pressure. Limit sugary beverages, candies, and desserts, and opt for naturally sweet options like fruits.<br />

                            <span style={{ fontWeight: 'bold', fontSize: '19px' }}> 9. Consider the DASH Diet:</span> The Dietary Approaches to Stop Hypertension (DASH) diet is specifically designed to lower blood pressure. It emphasizes fruits, vegetables, whole grains, lean proteins, and low-fat dairy while limiting sodium, saturated fats, and sweets.<br />

                            <span style={{ fontWeight: 'bold', fontSize: '19px' }}> 10.Monitor Your Blood Pressure:</span> Keep track of your blood pressure regularly and consult with a healthcare professional for personalized dietary recommendations.<br /></p>
                            </Col>
                            <Col sm={5}> <img src={diet} alt=""   style={{width:'100%',marginLeft:'10px',height:'75%',marginTop:'95px'}}/></Col>
      </Row>
      
    </Container>
                    </div>
                    <div>
                    <Container>
      <Row>
      <Col sm={5}>
              <img src={medic} alt="" style={{width:'100%',height:'88%',marginTop:'95px'}} />
      </Col>
        <Col sm={7}>
            <div>
                 <h1 style={{ fontWeight: 'bolder', fontFamily: 'monospace', fontSize: '50px',marginLeft:'200px'}} className=' mb-5 '>Medication</h1>

                        <p  style={{ fontSize: '22px' }}> There are several types of medications commonly prescribed to treat high blood pressure (hypertension). It's important to note that the specific medication or combination of medications prescribed will depend on various factors including the severity of hypertension, presence of other medical conditions, and individual response to treatment. Here are some of the most common classes of medications used to treat high blood pressure: </p>

                          <p style={{ fontSize: '18px' }}>  <span style={{ fontWeight: 'bold', fontSize: '19px' }}> 1. Diuretics: </span> Diuretics, also known as water pills, help your body eliminate sodium and water, reducing blood volume and thus lowering blood pressure. Examples include hydrochlorothiazide (HCTZ), chlorthalidone, and furosemide. <br />

                            <span style={{ fontWeight: 'bold', fontSize: '19px' }}> 2. Angiotensin-Converting Enzyme (ACE) Inhibitors:</span> ACE inhibitors relax blood vessels by blocking the production of angiotensin II, a hormone that narrows blood vessels. This helps lower blood pressure. Examples include lisinopril, enalapril, and ramipril. <br />

                            <span style={{ fontWeight: 'bold', fontSize: '19px' }}> 3. Angiotensin II Receptor Blockers (ARBs): </span>ARBs block the action of angiotensin II on blood vessels, causing them to dilate and reducing blood pressure. Examples include losartan, valsartan, and irbesartan. <br />

                            <span style={{ fontWeight: 'bold', fontSize: '19px' }}> 4. Calcium Channel Blockers:</span> These medications prevent calcium from entering the muscle cells of the heart and blood vessels, causing the vessels to relax and widen, lowering blood pressure. Examples include amlodipine, nifedipine, and diltiazem. <br />

                            <span style={{ fontWeight: 'bold', fontSize: '19px' }}> 5. Beta-Blockers:</span> Beta-blockers reduce heart rate and the force of heart contractions, thereby lowering blood pressure. They also help relax blood vessels. Examples include metoprolol, atenolol, and propranolol. <br />

                            <span style={{ fontWeight: 'bold', fontSize: '19px' }}>  6. Alpha-Blockers:</span> Alpha-blockers reduce nerve impulses that tighten blood vessels, allowing blood to flow more freely. Examples include doxazosin and prazosin. <br />

                            <span style={{ fontWeight: 'bold', fontSize: '19px' }}> 7. Renin Inhibitors: </span>Renin inhibitors decrease the production of renin, an enzyme involved in regulating blood pressure. This helps relax blood vessels and lower blood pressure. Aliskiren is an example of a renin inhibitor. <br />

                            <span style={{ fontWeight: 'bold', fontSize: '19px' }}> 8. Central Agonists:</span> These medications work in the brain to decrease nerve signals that narrow blood vessels, resulting in lower blood pressure. Examples include clonidine, methyldopa, and guanfacine. <br />

                            <span style={{ fontWeight: 'bold', fontSize: '19px' }}> 9. Vasodilators:</span> Vasodilators relax the muscles in blood vessel walls, allowing blood to flow more easily and reducing blood pressure. Examples include hydralazine and minoxidil. <br /> </p>
                            </div> 
            </Col>
                           
        </Row>
      
      </Container>
                    </div>
                    <div style={{ marginLeft: '90px', marginRight: '80px', marginTop: '80px' }}>
                <h1 style={{ fontWeight: 'bolder', fontFamily: 'monospace', fontSize: '50px'}} className=' mb-5'>Exersice Videos</h1>
                </div>
                <div>
                <Card style={{ width: '55rem',marginLeft:'60px' }}>
      <Card.Img variant="top" src={exer} />
      <Card.Body>
        <Card.Title className='fw-bolder fa-2x' style={{}}>Video Title</Card.Title>
        <Card.Text  className='fw-bolder fa-2x'>
        Video Discription 
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Bp