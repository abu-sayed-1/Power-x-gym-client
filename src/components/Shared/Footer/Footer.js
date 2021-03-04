import React from 'react';
import "./Footer.css"
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileMedical } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <div className="footer_container">
            <Container className="mt-5 pt-5">
                <Row>
                    <Col>
                        <Navbar.Brand href="/" className="brand_name text-white">POWER <span>X</span></Navbar.Brand>
                    </Col>
                    <Col>
                        <h5 className="text-white">Need Help?</h5>
                        <a className="text-white link_item" href="/help/center">Help Center</a><br />
                        <a className="text-white link_item" href="/email/support">Email Support</a><br />
                        <a className="text-white link_item" href="/live/chat">Live Chat</a><br />
                        <a className="text-white link_item" href="/gift/certificates">Gift Certificates</a><br />
                        <a className="text-white link_item" href="/sendus/feedback">Send Us Feedback</a>
                    </Col>
                    <Col>
                        <h5 className="text-white">Digital Resources</h5>
                        <a className="text-white link_item" href="/articles">Articles</a><br />
                        <a className="text-white link_item" href="/e-books">E-Books</a>
                    </Col>
                    <Col>
                        <h2 className="text-white">Connect whit Us</h2>
                        <FontAwesomeIcon icon={faFileMedical} />
                        <p className="text-white">Forum</p>


                    </Col>
                    <Col>
                        <h5 className="text-white">Join Our Newsletter</h5>
                        <p className="text-white">Get exclusive news,features,and
                        updates from the Shredder Weight
                        loss Academy
                    </p>
                    </Col>
                </Row>
            </Container>
            <footer className="d-flex justify-content-center align-self-end">
                <samp className="text-muted ">
                    © {new Date().getFullYear()} Ahmed LTD, All Rights Reserved.
                    </samp>
            </footer>
        </div>
    );
};

export default Footer;