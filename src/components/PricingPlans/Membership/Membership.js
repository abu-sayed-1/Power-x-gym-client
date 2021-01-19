import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/Navbar/NavBar';
import { useForm } from 'react-hook-form';


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
                            {errors.firstName?.type === "required" && <span style={{ color: 'red' }}>  <img src="https://tse4.mm.bing.net/th?id=OIP.NJtR4fpshSUUBS0_6cXj_AHaHa&pid=Api&P=0&w=300&h=300" alt="" width="20" />  First name is required</span>}
                            {errors.firstName?.type === "minLength" && <span style={{ color: 'red' }}> <img src="https://tse4.mm.bing.net/th?id=OIP.NJtR4fpshSUUBS0_6cXj_AHaHa&pid=Api&P=0&w=300&h=300" alt="" width="20" />  minimum three Characters</span>}
                            <br />
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
                            {errors.email?.type === "required" && <span style={{ color: 'red' }}>Email is required</span>}
                            {errors.firstName?.type === "pattern" && <span style={{ color: 'red' }}>example@gmail.com</span>}
                            <br />
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