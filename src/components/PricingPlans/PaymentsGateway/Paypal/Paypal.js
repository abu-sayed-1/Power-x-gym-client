import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';

const Paypal = ({ checkoutState }) => {
    console.log(typeof(checkoutState));
    const paypal = useRef();
    const history = useHistory()

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
                                    currency_code: "CAD",
                                    value: checkoutState,
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
    }, [checkoutState])
    return (
        <div>
            <div ref={paypal}></div>
        </div>
    );
};

export default Paypal;