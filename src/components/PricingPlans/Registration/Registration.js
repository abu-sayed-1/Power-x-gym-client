import React from 'react';
import './Registration.css';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/Navbar/NavBar';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

const Registration = () => {
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    const onSubmit = data => {
        fetch('http://localhost:4000/personalDetail', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(result => {
                if (result) {
                    history.push('/paymentsGateway')
                }
            })
    }
    return (
        <>
            <section className="header_main mb-5">
                <div className=" overly">
                    <NavBar />
                    <h1 className="text-white text-center">YOUR GYM MEMBERSHIP</h1>
                </div>
            </section>
            <Container className="my-5 py-5">
                <Form onSubmit={handleSubmit(onSubmit)} className=" m-auto justify-content-center">
                    <Row>
                        <Col sm={12} md={6} lg={6} xl={6}>
                          <p>First Name</p>
                            <Form.Control
                                ref={
                                    register({
                                        required: true,
                                        minLength: 2
                                    })
                                }
                                className="p_2" type="text"
                                name="firstName"
                                placeholder="Enter You First Name"
                            />
                            {errors.firstName?.type === "required" && <span style={{ color: 'red' }}>  <FontAwesomeIcon icon={faExclamationTriangle} />  First name is required</span>}
                            {errors.firstName?.type === "minLength" && <span style={{ color: 'red' }}>  <FontAwesomeIcon icon={faExclamationTriangle} /> Minimum Two Characters</span>}

                            <p>Email</p>
                            <Form.Control
                                // value="abusayedrakib60@gmail.com"
                                ref={
                                    register({
                                        required: true,
                                    })
                                }
                                className="p_2" type="email" name="email" placeholder="Enter You Email"
                            />
                            {errors.email?.type === "required" && <span style={{ color: 'red' }}> <FontAwesomeIcon icon={faExclamationTriangle} /> Email is required</span>}

                            <p>Date Of Birth</p>
                            <Form.Control
                                ref={
                                    register({
                                        required: true
                                    })
                                }
                                className="p_2" type="date" name="date"
                            />
                            {errors.date && <span style={{ color: 'red' }}> <FontAwesomeIcon icon={faExclamationTriangle} /> Date Of Birth is required</span>}
                            <p>Address line 1:</p>
                            <Form.Control
                                ref={
                                    register({
                                        required: true,
                                        minLength: 10
                                    })
                                }
                                className="p_2" type="text" name="address"
                            />
                            {errors.address?.type === "required" && <span style={{ color: 'red' }}><FontAwesomeIcon icon={faExclamationTriangle} /> Address is required</span>}
                            {errors.address?.type === "minLength" && <span style={{ color: 'red' }}><FontAwesomeIcon icon={faExclamationTriangle} /> Minimum Ten Characters</span>}

                            <p>City</p>
                            <Form.Control
                                ref={
                                    register({
                                        required: true,
                                        minLength: 3,
                                    })
                                }
                                className="p_2" type="text" name="city"
                            />
                            {errors.city?.type === "required" && <span style={{ color: 'red' }}> <FontAwesomeIcon icon={faExclamationTriangle} />City is required</span>}
                            {errors.city?.type === "minLength" && <span style={{ color: 'red' }}><FontAwesomeIcon icon={faExclamationTriangle} /> Minimum Three Characters</span>}

                        </Col>
                        <Col sm={12} md={6} lg={6} xl={6}>
                            <p>last Name</p>
                            <Form.Control
                                ref={
                                    register({
                                        required: true,
                                        minLength: 3
                                    })
                                }
                                className="p_2" type="text" name="lastName" placeholder="Enter You last Name"
                            />
                            {errors.lastName?.type === "required" && <span style={{ color: 'red' }}><FontAwesomeIcon icon={faExclamationTriangle} /> Last name is required</span>}
                            {errors.lastName?.type === "minLength" && <span style={{ color: 'red' }}><FontAwesomeIcon icon={faExclamationTriangle} /> Minimum three Characters</span>}

                            <p>Mobile Number</p>
                            <Form.Control
                                ref={
                                    register({
                                        required: true,
                                        minLength: 11,
                                        maxLength: 11

                                    })
                                }
                                className="p_2" type="number" name="mobileNumber"
                            />
                            {errors.mobileNumber?.type === "required" && <span style={{ color: 'red' }}><FontAwesomeIcon icon={faExclamationTriangle} /> Phone Number is required</span>}
                            {errors.mobileNumber?.type === "minLength" && <span style={{ color: 'red' }}><FontAwesomeIcon icon={faExclamationTriangle} /> Minimum Eleven Digits</span>}
                            {errors.mobileNumber?.type === "maxLength" && <span style={{ color: 'red' }}><FontAwesomeIcon icon={faExclamationTriangle} /> Maximum Eleven Digits</span>}
                            <p>Gender</p>
                            <select className="select" name="gender"
                                ref={
                                    register({
                                        required: 'select one option'
                                    })}>
                                <option value=""></option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option disabled>Other</option>
                            </select>
                            {errors.gender && <p style={{ color: 'red' }}><FontAwesomeIcon icon={faExclamationTriangle} />{errors.gender.message}</p>}
                            <p>Country/Region</p>
                            <Form.Control
                                ref={
                                    register({
                                        required: true,
                                        minLength: 2
                                    })
                                }
                                className="p_2" type="text" name="countryRegion"
                            />
                            {errors.countryRegion?.type === "required" && <span style={{ color: 'red' }}><FontAwesomeIcon icon={faExclamationTriangle} /> Country/Region is required</span>}
                            {errors.countryRegion?.type === "minLength" && <span style={{ color: 'red' }}><FontAwesomeIcon icon={faExclamationTriangle} /> Minimum Two Digits</span>}
                            <p>Postcode</p>
                            <Form.Control
                                ref={
                                    register({
                                        required: true,
                                        minLength: 3,
                                    })
                                }
                                className="p_2" type="text" name="Postcode"
                            />
                            {errors.Postcode?.type === "required" && <span style={{ color: 'red' }}><FontAwesomeIcon icon={faExclamationTriangle} /> Postcode is required</span>}
                            {errors.Postcode?.type === "minLength" && <span style={{ color: 'red' }}><FontAwesomeIcon icon={faExclamationTriangle} /> Minimum Three Characters</span>}

                        </Col>
                    </Row>
                    <br />
                  <button type="submit" className="registration">NEXT</button>
                </Form>
            </Container>
            <Footer />
        </>
    );
};

export default Registration;