import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';

const Paypal = ({ price }) => {
    const paypal = useRef();
    const history = useHistory();
    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions, err) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: "Cool looking table",
                                amount: {
                                    currency_code: "USD",
                                    value: price,
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    if (order) {
                        history.push('/MembershipCreated')
                    }
                },
                onError: (err) => {
                    console.log(err.message)
                }
            })
            .render(paypal.current)
    }, [price])
    return (
        <div>
            <div ref={paypal}></div>
        </div>
    );
};

export default Paypal;