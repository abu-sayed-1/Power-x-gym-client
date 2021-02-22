import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/Navbar/NavBar';
import Paypal from './Paypal/Paypal';
import { loadStripe } from "@stripe/stripe-js";
import { Elements, } from "@stripe/react-stripe-js";
import CheckoutForm from './Paypal/CheckoutForm/CheckoutForm';

const PaymentsGateway = () => {
    const stripePromise = loadStripe("pk_test_51HaKX2FWzFyXdW5KjdYVQtPEcdPZOSLq0nvfi4MfePscvZAop5VwXrGvH9Z0XjenRtpUwNFsX07um8rLzI8yrrB600opOV9Hw9");

    const [checkout, setCheckout] = useState(
        {
            paypal: '',
            credit: ''
        }
    );

    return (
        <>
            <section className="header_main mb-5">
                <div className="overly">
                    <NavBar />
                    <h1 className="text-white text-center">YOUR GYM MEMBERSHIP</h1>
                </div>
            </section>
            <Container>
                <div className="form-check">
                    <input onClick={() => setCheckout({ credit: "creditCard" })} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label" for="inlineRadio1">
                        Credit Card
                    </label>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate qui veniam, neque eaque fugiat molestiae molestias eligendi architecto repellat sint</p>
                </div>
                <Row className="border p-5">
                    <Col>
                        <div className="form-check">
                            <input onClick={() => setCheckout({ paypal: "paypal" })} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label className="form-check-label" htmlFor="inlineRadio2">
                                Paypal
                             </label>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate qui veniam, neque eaque fugiat molestiae molestias eligendi architecto repellat sint</p>
                        </div>
                    </Col>
                    <Col xs={4}>
                        {checkout.paypal ? <Paypal /> : <img src="https://tse3.mm.bing.net/th?id=OIP.5WodCMcfWx9Gq8jWPTrmGQHaC4&pid=Api&P=0&w=474&h=185" width='200' className="d-flux justify-content-center" alt="" />}

                    </Col>
                </Row>
                {
                    !checkout.credit && !checkout.paypal &&
                    <button onClick={() =>
                        alert('Please Choose payment gateway !')}
                    >null</button>
                }

                {
                    checkout.paypal && <button onClick={() =>
                        alert('Please Click the Paypal or Debit,Credit Card button')}
                    >Paypal</button>
                }

                {checkout.credit && <button>Credit</button>}
            </Container>
            <Footer />
        </>
    );
};

export default PaymentsGateway;