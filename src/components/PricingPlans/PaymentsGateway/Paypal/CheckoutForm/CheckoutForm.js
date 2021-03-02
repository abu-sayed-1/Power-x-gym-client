import React, { useState } from 'react';
import {
    CardCvcElement,
    CardExpiryElement,
    CardNumberElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';
import { Button, Col, Row, Spinner } from 'react-bootstrap';

toast.configure()
const CheckoutForm = ({ checkoutState1 }) => {
    console.log(checkoutState1, '[checkoutState1]');
    const history = useHistory()
    const stripe = useStripe();
    const elements = useElements();
    const [process, setProcess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardNumberElement, CardExpiryElement, CardCvcElement),
        });
        setProcess(paymentMethod, true)
        if (error) {
            toast.error(error.message, { position: toast.POSITION.TOP_CENTER });
        }
        if (!error) {
            console.log(paymentMethod)
            try {
                const { id } = paymentMethod;
                const response = await axios.post(
                    "http://localhost:4000/stripe/charge",
                    {
                        amount: checkoutState1,
                        id: id,
                    }
                );

                if (response.data.success === true) {
                    history.push('/MembershipCreated');
                }
                if (response.data.success === false) {
                    setProcess(false)
                    toast.error(response.data.message, { position: toast.POSITION.TOP_CENTER })
                }

            }
            catch (error) {
                console.log(error.message)
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="" className="input_name pt-5 mt-md-2">CARD NUMBER</label>
                <CardNumberElement  className="payment_inputs m-auto" />
                <Row>
                    <Col sm={12} md={6} lg={6} xl={6} >
                        <label htmlFor="" className="input_name pt-4">EXPIRY DATE</label>
                        <CardExpiryElement className="payment_inputs" />
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6}>
                        <label htmlFor="" className="input_name pt-4">CVC CODE</label>
                        <CardCvcElement className="payment_inputs" />
                    </Col>
                </Row>
                {process ?
                    <Button variant="primary" disabled>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                      Process...
                    </Button>
                    : <button type="submit">pay</button>}

            </form>
        </div>
    );
};

export default CheckoutForm;