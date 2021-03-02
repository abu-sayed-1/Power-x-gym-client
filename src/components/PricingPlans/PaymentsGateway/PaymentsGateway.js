import React, { useEffect, useState } from 'react';
import './PaymentsGateway.css';
import amex from '../../../images/ImageAndIcon/credit-cards_amex.png';
import mastercard from '../../../images/ImageAndIcon/credit-cards_mastercard.png';
import visaCard from '../../../images/ImageAndIcon/credit-cards_visa.png';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/Navbar/NavBar';
import Paypal from './Paypal/Paypal';
import { loadStripe } from "@stripe/stripe-js";
import { Elements, } from "@stripe/react-stripe-js";
import CheckoutForm from './Paypal/CheckoutForm/CheckoutForm';
import { toast } from 'react-toastify';
toast.configure()

const creditCardImages = [
    { id: 1, img: mastercard },
    { id: 2, img: visaCard },
    { id: 3, img: amex },
];

const PaymentsGateway = () => {
    const stripePromise = loadStripe("pk_test_51HaKX2FWzFyXdW5KjdYVQtPEcdPZOSLq0nvfi4MfePscvZAop5VwXrGvH9Z0XjenRtpUwNFsX07um8rLzI8yrrB600opOV9Hw9");
    const [courseAmount, setCourseAmount] = useState({ amount: '' });
    const [courseAmount1, setCourseAmount1] = useState({ amount: '' });
    const checkoutState = courseAmount.amount && courseAmount.amount;
    const checkoutState1 = courseAmount1.amount && courseAmount1.amount;

    let specificId = sessionStorage.getItem('purchaseId');
    useEffect(() => {
        // paypal =================>
        if (specificId == 1) {
            setCourseAmount({ amount: 180 });
        };

        if (specificId == 2) {
            setCourseAmount({ amount: 154 });
        };

        if (specificId == 3) {
            setCourseAmount({ amount: 115 });
        };
        // stripe ===============================>
        if (specificId == 1) {
            setCourseAmount1({ amount: 14000 });
        };

        if (specificId == 2) {
            setCourseAmount1({ amount: 12000 });
        };

        if (specificId == 3) {
            setCourseAmount1({ amount: 9000 });
        };
    }, [specificId]);

    //==========================================================>

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
                <div className="form-check card_content">
                    <Row>
                        <Col sm={12} md={6} lg={6} xl={6} xs={8}>
                            <input onClick={
                                () => setCheckout({ credit: "creditCard" })}
                                className="form-check-input check_input" type="radio"
                                name="inlineRadioOptions" id="inlineRadio1"
                                value="option1" />
                            <label className="form-check-label" htmlFor="inlineRadio1">
                                <h4>Credit Card</h4>
                            </label>
                            <p className="text_colors mt-2">Safe money transfer using your bank account. Visa, Maestro, Discover, American Express</p>
                        </Col>
                        <Col sm={12} md={6} lg={6} xl={6}>
                            <div className="pl-md-5">
                                {
                                    creditCardImages.map(
                                        cardImage => <img className="pl-2" key={cardImage.id} src={cardImage.img} alt="" />
                                    )
                                }
                            </div>
                        </Col>
                    </Row>
                    <Elements  stripe={stripePromise}>
                        <CheckoutForm checkoutState1={checkoutState1} />
                    </Elements>
                </div>
                <Row className="p-5 mt-5 m-0 paypal_content">
                    <Col sm={12} md={6} lg={6} xl={6} >
                        <div className="form-check">
                            <input onClick={() => setCheckout({ paypal: "paypal" })} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label className="form-check-label" htmlFor="inlineRadio2">
                                <h4>Paypal</h4>
                            </label>
                            <p className="pt-4 text_colors ">You well be redirected to PayPal website to complete your purchase securely.</p>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6}  xs={4}>
                        {checkout.paypal ? <Paypal checkoutState={checkoutState} /> : <img src="https://tse3.mm.bing.net/th?id=OIP.5WodCMcfWx9Gq8jWPTrmGQHaC4&pid=Api&P=0&w=474&h=185" width='200' className="d-flux justify-content-center" alt="" />}
                    </Col>
                </Row>
                {
                    !checkout.credit && !checkout.paypal &&
                    <button onClick={() =>
                        toast.error('Please Choose payment gateway !', { position: toast.POSITION.TOP_CENTER })
                    }
                    >null</button>
                }

                {
                    checkout.paypal && <button onClick={() =>
                        toast.error('Please Choose the Paypal or Debit/Credit Card button !', { position: toast.POSITION.TOP_CENTER })
                    }
                    >Paypal</button>
                }

                {checkout.credit && <button>Credit</button>}
            </Container>
            <Footer />
        </>
    );
};

export default PaymentsGateway;