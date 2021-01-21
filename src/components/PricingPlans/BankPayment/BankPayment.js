import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/Navbar/NavBar';

const BankPayment = () => {
    return (
        <>
            <section className="header_main mb-5">
                <div className=" overly">
                    <NavBar />
                    <h1 className="text-white text-center">YOUR GYM MEMBERSHIP</h1>
                </div>
            </section>
            <Container>

            </Container>
            <Footer />
        </>
    );
};

export default BankPayment;