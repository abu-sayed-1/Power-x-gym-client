import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/Navbar/NavBar';

const Membership = () => {
    return (
        <>
            <section className="header_main mb-5">
                <div className=" overly">
                    <NavBar />
                    <h1 className="text-white text-center">YOUR GYM MEMBERSHIP</h1>
                </div>
            </section>
            <Container className="my-5 py-5">
                <Form className=" m-auto justify-content-center">
                    <Row>
                        <Col>
                            <label>First Name</label>
                            <Form.Control className="p-4" type="text" name="firstName" placeholder="Enter You First Name" />
                            <label>Email</label>
                            <Form.Control className="p-4" type="email" name="email" placeholder="Enter You Email" />
                            <label>Date Of Birth</label>
                            <Form.Control type="date" name="date" />
                            <label>Address line 1:</label>
                            <Form.Control className="p-4" type="text" name="address" />
                            <label>City</label>
                            <Form.Control className="p-4" type="text" name="city" />
                        </Col>
                        <Col>
                            <label>last Name</label>
                            <Form.Control className="p-4" type="text" name="lastName" placeholder="Enter You last Name" />
                            <label>Mobile Number</label>
                            <Form.Control className="p-4" type="number" name="mobileNumber" />
                            <label>Gender</label>
                            <Form.Control className="p-4" as="select" custom>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option disabled>Other</option>
                            </Form.Control>
                            <label>Country/Region</label>
                            <Form.Control className="p-4" type="text" name="countryRegion" />
                            <label>Postcode</label>
                            <Form.Control className="p-4" type="number" name="Postcode" />
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