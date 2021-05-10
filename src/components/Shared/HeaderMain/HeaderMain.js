import React from 'react';
import './HeaderMain.css';
import NavBar from '../Navbar/NavBar';
import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Video from './Video/Video';

const HeaderMain = () => {
    return (
        <main className="header_main">
            <div className="overly">
                <NavBar />
                <Row className="mx-md-5 mt-5 pt-4">
                    <Col sm={12} md={6} lg={6} xl={6} className="text-white pl-sm-2 mt-lg-5 pt-lg-3">
                        <h1>THE BEST FITNESS STUDIO <br /> IN TOWN</h1>
                        <p className="line_height">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum commodi, expedita excepturi quod molestias odio in voluptatibus rem! Similique quibusdam laborum sequi, sapiente error nesciunt provident quod vero nobis itaque?</p>
                        <NavLink to="/chooseCourse">
                            <button className="brand_btn mb-4">JOIN US</button>
                        </NavLink>
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6} className="mt-lg-5 pt-lg-3">
                        <Video />
                    </Col>
                </Row>
            </div>
        </main>
    );
};

export default HeaderMain;