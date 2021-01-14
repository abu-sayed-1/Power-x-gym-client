import React from 'react';
import "./Navbar.css"
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div>
            <Navbar className="mx-lg-5 mx-md-5" expand="lg">
                <Navbar.Brand href="#home" className="brand_name text-white">POWER <span>X</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto ">
                        <Nav.Link className="mr-4 text-white nav_item" href="#">Home</Nav.Link>
                        <Nav.Link className="mr-4 text-white nav_item" href="#">Services</Nav.Link>
                        <Nav.Link className="mr-4 text-white nav_item" href="#">Our classes</Nav.Link>
                        <Nav.Link className="mr-4 text-white nav_item" href="#">About us</Nav.Link>
                        <Nav.Link className="mr-4 text-white nav_item" href="#">Blog</Nav.Link>
                        <Nav.Link className="mr-4 text-white nav_item" href="#">Pricing</Nav.Link>
                        <Nav.Link className="mr-4 text-white nav_item" href="#">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;