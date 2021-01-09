import React from 'react';
import './OurDream.css'
import { Col, Container, Row } from 'react-bootstrap';

const OurDream = ({ ourDreamData }) => {
    return (
        <Container className="mt-5 pt-5">
            {
                ourDreamData ? <Row>
                    <Col sm={12} md={6} lg={6} xl={6}>
                        <img src={ourDreamData[0].OurDreamImg} className="img-fluid" alt="" />
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6} className="offset-1">
                        <h1 className="pt-5 mt-4 text-uppercase"><span className="text-warning">{ourDreamData[0].title}</span>{ourDreamData[0].secondTitle}</h1>
                        <p className="pt-4 our_dream_description">{ourDreamData[0].outDreamDescription}</p>
                    </Col>
                </Row> : <h2>loading...</h2>
            }
        </Container>
    );
};

export default OurDream;