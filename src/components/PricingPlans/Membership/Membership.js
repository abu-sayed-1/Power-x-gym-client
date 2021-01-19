import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/Navbar/NavBar';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'



// button[type="submit"]:active,
// input[type="button"]:active,
// input[type="submit"]:active {
//   transition: 0.3s all;
//   transform: translateY(3px);
//   border: 1px solid transparent;
//   opacity: 0.8;
// ✅ ❌
// }
const Membership = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data, 'my form Data')
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
                        <Col>
                            <label>First Name</label>
                            <Form.Control
                                ref={
                                    register({
                                        required: true,
                                        minLength: 3
                                    })
                                }
                                className="p-4" type="text"
                                name="firstName"
                                placeholder="Enter You First Name"
                            />
                            {errors.firstName?.type === "required" && <span style={{ color: 'red' }}>  <FontAwesomeIcon icon={faExclamationTriangle} />  First name is required</span>}
                            {errors.firstName?.type === "minLength" && <span style={{ color: 'red' }}>  <FontAwesomeIcon icon={faExclamationTriangle} /> Minimum three Characters</span>}

                            <label>Email</label>
                            <Form.Control
                                ref={
                                    register({
                                        required: true,
                                        pattern: ".*?@?[^@]*\.+.*"
                                    })
                                }
                                className="p-4" type="email" name="email" placeholder="Enter You Email"
                            />
                            {errors.email?.type === "required" && <span style={{ color: 'red' }}> <FontAwesomeIcon icon={faExclamationTriangle} /> Email is required</span>}
                            {errors.firstName?.type === "pattern" && <span style={{ color: 'red' }}>example@gmail.com</span>}

                            <label>Date Of Birth</label>
                            <Form.Control className="p-4" type="date" name="date" />
                            <label>Address line 1:</label>

                            <Form.Control
                                ref={
                                    register({
                                        required: true,
                                        minLength: 20
                                    })
                                }
                                className="p-4" type="text" name="address"
                            />
                            {errors.address?.type === "required" && <span style={{ color: 'red' }}><FontAwesomeIcon icon={faExclamationTriangle} /> Address is required</span>}
                            {errors.address?.type === "minLength" && <span style={{ color: 'red' }}><FontAwesomeIcon icon={faExclamationTriangle} /> Minimum Twenty Characters</span>}

                            <label>City</label>
                            <Form.Control
                                ref={
                                    register({
                                        required: true,
                                        minLength: 3,
                                    })
                                }
                                className="p-4" type="text" name="city"
                            />
                            {errors.city?.type === "required" && <span style={{ color: 'red' }}> <FontAwesomeIcon icon={faExclamationTriangle} />City is required</span>}
                            {errors.city?.type === "minLength" && <span style={{ color: 'red' }}><FontAwesomeIcon icon={faExclamationTriangle} /> Minimum Three Characters</span>}

                        </Col>
                        <Col>
                            <label>last Name</label>
                            <Form.Control
                                ref={
                                    register({
                                        required: true,
                                        minLength: 3
                                    })
                                }
                                className="p-4" type="text" name="lastName" placeholder="Enter You last Name"
                            />
                            {errors.lastName?.type === "required" && <span style={{ color: 'red' }}><FontAwesomeIcon icon={faExclamationTriangle} /> Last name is required</span>}
                            {errors.lastName?.type === "minLength" && <span style={{ color: 'red' }}><FontAwesomeIcon icon={faExclamationTriangle} /> Minimum three Characters</span>}

                            <label>Mobile Number</label>
                            <Form.Control
                                ref={
                                    register({
                                        required: true,
                                        minLength: 11,
                                        maxLength: 11

                                    })
                                }
                                className="p-4" type="number" name="mobileNumber"
                            />
                            {errors.mobileNumber?.type === "required" && <span style={{ color: 'red' }}><FontAwesomeIcon icon={faExclamationTriangle} /> Phone Number is required</span>}
                            {errors.mobileNumber?.type === "minLength" && <span style={{ color: 'red' }}><FontAwesomeIcon icon={faExclamationTriangle} /> Minimum Eleven Digits</span>}
                            {errors.mobileNumber?.type === "maxLength" && <span style={{ color: 'red' }}><FontAwesomeIcon icon={faExclamationTriangle} /> Maximum Eleven Digits</span>}

                            <label>Gender</label>
                            <Form.Control ref={register({ required: true })} name='gender' className="p-4" as="select" custom>
                                <option activeValue="male">Male</option>
                                <option value="female">Female</option>
                                <option disabled>Other</option>
                            </Form.Control>
                            {errors.gender?.type === "required" && <span style={{ color: 'red' }}> Gender is required</span>}

                            <label>Country/Region</label>
                            <Form.Control
                                ref={
                                    register({
                                        required: true,
                                        minLength: 2
                                    })
                                }
                                className="p-4" type="text" name="countryRegion"
                            />
                            {errors.countryRegion?.type === "required" && <span style={{ color: 'red' }}><FontAwesomeIcon icon={faExclamationTriangle} /> Country/Region is required</span>}
                            {errors.countryRegion?.type === "minLength" && <span style={{ color: 'red' }}><FontAwesomeIcon icon={faExclamationTriangle} /> Minimum Two Digits</span>}

                            <label>Postcode</label>
                            <Form.Control
                                ref={
                                    register({
                                        required: true,
                                        minLength: 3,
                                    })
                                }
                                className="p-4" type="number" name="Postcode"
                            />
                            {errors.Postcode?.type === "required" && <span style={{ color: 'red' }}><FontAwesomeIcon icon={faExclamationTriangle} /> Postcode is required</span>}
                            {errors.Postcode?.type === "minLength" && <span style={{ color: 'red' }}><FontAwesomeIcon icon={faExclamationTriangle} /> Minimum Three Digits</span>}

                        </Col>
                    </Row>
                    <Button type="submit">NEXT</Button>
                </Form>
            </Container>
            <Footer />
        </>
    );
};

export default Membership;