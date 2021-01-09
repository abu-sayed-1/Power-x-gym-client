import React from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container className="mt-5 pt-5">
            <Row>
                <Col>
                    <Navbar.Brand href="#home" className="brand_name">POWER <span>X</span></Navbar.Brand>
                </Col>
                <Col>
                    <h5>Need Help?</h5>
                    <a href="/help/center">Help Center</a>
                    <a href="/email/support">Email Support</a>
                    <a href="/live/chat">Live Chat</a>
                    <a href="/gift/certificates">Gift Certificates</a>
                    <a href="/sendus/feedback">Send Us Feedback</a>
                </Col>
                <Col>
                    <h5>Digital Resources</h5>
                    <a href="/articles">Articles</a>
                    <a href="/e-books">E-Books</a>
                </Col>
                <Col>
                    <h2>Connect whit Us</h2>

                </Col>
                <Col>
                    <h5>Join Our Newsletter</h5>
                    <p>Get exclusive news,features,and
                    updates from the Shredder Weight
                    loss Academy
                    </p>

                </Col>
            </Row>
        </Container>
    );
};

export default Footer;