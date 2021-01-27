import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/Navbar/NavBar';
import Paypal from './Paypal/Paypal';

const PaymentsGateway = () => {
    const [checkout, setCheckout] = useState(false);
    console.log(checkout,)
    return (
        <>

            <section className="header_main mb-5">
                <div className="overly">
                    <NavBar />
                    <h1 className="text-white text-center">YOUR GYM MEMBERSHIP</h1>
                </div>
            </section>
            <Container>
                {/* {checkout ?  : <button onClick={() => setCheckout(true)}>checkout</button>} */}
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label" for="inlineRadio1">
                        Credit Card
                </label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate qui veniam, neque eaque fugiat molestiae molestias eligendi architecto repellat sint</p>
                </div>
                <Row className="border p-5">
                    <Col>
                        <div className="form-check">
                            <input  onClick={() => setCheckout(true)}  className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            {/*  */}
                            <label className="form-check-label" htmlFor="inlineRadio2">
                                Paypal
                             </label>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate qui veniam, neque eaque fugiat molestiae molestias eligendi architecto repellat sint</p>
                        </div>
                    </Col>
                    <Col>
                        {checkout ? <Paypal /> : <img src="https://tse3.mm.bing.net/th?id=OIP.5WodCMcfWx9Gq8jWPTrmGQHaC4&pid=Api&P=0&w=474&h=185" width='200' className="d-flux justify-content-center" alt="" />}

                    </Col>
                </Row>
                {checkout ? <button>paypal</button> : <button>NEXT</button>}






                {/* <div class="form-check">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label class="form-check-label" for="inlineRadio1">1</label>
                </div> */}
                {/* <div class="form-check">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label class="form-check-label" for="inlineRadio2">2</label>
                </div> */}
            </Container>

            <Footer />
        </>
    );
};

export default PaymentsGateway;