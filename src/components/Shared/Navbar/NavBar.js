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
                        <NavLink to="/home" className="mr-4 text-white nav_item">Home</NavLink>
                        <NavLink to="/" className="mr-4 text-white nav_item">Services</NavLink>
                        <NavLink to="/coursesList" className="mr-4 text-white nav_item">Our classes</NavLink>
                        <NavLink to="/" className="mr-4 text-white nav_item">About us</NavLink>
                        <NavLink to="/" className="mr-4 text-white nav_item">Blog</NavLink>
                        <NavLink to="/chooseCourse" className="mr-4 text-white nav_item">Pricing</NavLink>
                        <NavLink to="/" className="mr-4 text-white nav_item">Contact Us</NavLink>
                     </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;