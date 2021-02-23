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
const CheckoutForm = () => {
    const [process, setProcess] = useState(false);
    const [checkoutFormEmptyOrNot, setCheckoutFormEmptyOrNot] = useState({
        cardNumber:'',
        expiryDate:'',
        cvcCode:''
    });
    console.log(checkoutFormEmptyOrNot)
    const history = useHistory()
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        //  console.log(event.input.value == empty)
        event.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardNumberElement, CardExpiryElement, CardCvcElement),
        });
        setProcess(paymentMethod, true)
        if (!paymentMethod) {
            toast.warning('Please enter your card information!', { position: toast.POSITION.TOP_CENTER })

        }
        // setEmptyFrom(!paymentMethod)
        if (!error) {
            console.log(paymentMethod)
            try {
                const { id } = paymentMethod;
                const response = await axios.post(
                    "http://localhost:4000/stripe/charge",
                    {
                        amount: 999,
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
                <CardNumberElement onChange={e => setCheckoutFormEmptyOrNot({ cardNumber: e.target.value })} className="payment_inputs" />
                <Row>
                    <Col>
                        <label htmlFor="" className="input_name pt-4">EXPIRY DATE</label>
                        <CardExpiryElement onChange={e => setCheckoutFormEmptyOrNot({ expiryDate: e.target.value })} className="payment_inputs" />
                    </Col>
                    <Col>
                        <label htmlFor="" className="input_name pt-4">CVC CODE</label>
                        <CardCvcElement onChange={e => setCheckoutFormEmptyOrNot({ cvcCode: e.target.value })} className="payment_inputs" />
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