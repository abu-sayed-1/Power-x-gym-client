// import React from 'react';
import {
    CardElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';

toast.configure()
const CheckoutForm = () => {
    const history = useHistory()
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        });

        if (!error) {
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
                    history.push( '/MembershipCreated');
                } 
                if (response.data.success === false) {
                    toast.error(response.data.message, {position: toast.POSITION.TOP_CENTER})

                }

            }
             catch (error) {
                console.log(error.message)
            }
        }
    };

    // return (
    //     <div>
    //         <form onSubmit={handleSubmit} style={{ margin: '40px' }}>
    //             <CardElement />
    //             <button type="submit">pay</button>
    //         </form>
    //     </div>
    // );
};

// export default CheckoutForm;