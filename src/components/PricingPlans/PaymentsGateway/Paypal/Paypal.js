import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';

const Paypal = () => {
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
                                    value: 50.00,
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    console.log(order);
                    // if (order) {
                    //     history.push('/ChooseCourse')
                    // }
                },
                onError: (err) => {
                    console.log(err)
                }
            })
            .render(paypal.current)
    }, [])
    return (
        <div>
            <div ref={paypal}></div>
        </div>
    );
};

export default Paypal;