import React, { useState } from 'react';
import "./Navbar.css"
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignRight, faTimes } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    const [func, setFunc] = useState(false);
    return (
        <div>
            <Navbar className="mx-lg-5 mx-md-5" expand="lg">
                <Navbar.Brand href="/" className="brand_name text-white">POWER <span>X</span></Navbar.Brand>
                <Navbar.Toggle onClick={() => setFunc(!func)} aria-controls="" className="menu_icon" >
                    {func ? <FontAwesomeIcon className="icon" icon={faTimes} /> : <FontAwesomeIcon className="icon" icon={faAlignRight} />}
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto ">
                        <NavLink to="/home" className="mr-4 text-white nav_item" href="#">Home</NavLink>
                        <Nav.Link className="mr-4 text-white nav_item" href="#">Services</Nav.Link>
                        <NavLink to="/coursesList" className="mr-4 text-white nav_item">Our classes</NavLink>
                        <Nav.Link className="mr-4 text-white nav_item" href="#">About us</Nav.Link>
                        <NavLink to="/" className="mr-4 text-white nav_item" href="#">Blog</NavLink>
                        <NavLink to="/chooseCourse" className="mr-4 text-white nav_item">Pricing</NavLink>
                        <Nav.Link className="mr-4 text-white nav_item" href="#">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;