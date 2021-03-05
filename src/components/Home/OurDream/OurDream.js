import React from 'react';
import './OurDream.css'
import { Col, Container, Row } from 'react-bootstrap';

const OurDream = ({ ourDreamData }) => {
    return (
        <Container className="mt-5 pt-5">
            {
                ourDreamData ? <Row>
                    <Col sm={12} md={6} lg={6} xl={6} className="mr-0">
                        <img src={ourDreamData[0].ourDreamImg} className="img-fluid" alt="" />
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6} className="pl-md-5 pl-lg-5 pl-xl-5">
                        <h1 className="about_us">ABOUT US</h1>
                        <h1 className=""><span className="text-warning">{ourDreamData[0].title}</span>{ourDreamData[0].secondTitle}</h1>
                        <p className="pt-4 our_dream_description">{ourDreamData[0].ourDreamDescription}</p>
                    </Col>
                </Row> : <h2>loading.....</h2>
            }
        </Container>
    );
};

export default OurDream;