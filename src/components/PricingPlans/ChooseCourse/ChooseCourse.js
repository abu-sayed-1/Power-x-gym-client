import React, { useState } from 'react';
import './ChooseCourse.css'
import { useEffect } from 'react';
import { Container, Card, CardDeck } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import NavBar from '../../Shared/Navbar/NavBar';
import Footer from '../../Shared/Footer/Footer';
import { NavLink } from 'react-router-dom';

const ChooseCourse = () => {
    const [course, setCourse] = useState(null);

    useEffect(() => {
        fetch('https://guarded-meadow-19744.herokuapp.com/chooseCourseData')
            .then(res => res.json())
            .then(data => setCourse(data));
    }, [])
    return (
        <>
            <section className="header_main mb-5">
                <div className=" overly">
                    <NavBar />
                    <h2 className="text-white text-center">PRICING PLANS</h2>
                </div>
            </section>
            <Container className="mb-5">
                <h1 className="text_color text-center">CHOOSE THE OFFER THAT SUITS YOU</h1>
                <p className="text-center">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda illo quas
                    <br /> consequatur unde facilis eligendi atque  laudantium <br />
                     doloribus nobis aperiam.</p>
                <CardDeck sm={12} md={6} lg={4} xl={4} className="my-5 py-5">
                    {
                        course ? course.map(item => <Card className=" " key={item._id}>
                            <Card.Img className="choose_course_img" src={item.img} />
                            <Card.ImgOverlay className="card_Img">
                                <Card.Body>
                                    <h6 className="text-center text-uppercase text_color">{item.billed}</h6>
                                    <h2 className="text-center text-white text-uppercase">{item.title}</h2>
                                    <h3 className="text-center price">{item.price}</h3>
                                    <Card.Text className="text-center text-white p_l ">
                                        <FontAwesomeIcon icon={faCheck} /> {item.advantage.mobile}
                                    </Card.Text>
                                    <Card.Text className="text-center text-white">
                                        <FontAwesomeIcon icon={faCheck} /> {item.advantage.hosting}
                                    </Card.Text>
                                    <Card.Text className="text-center text-white">
                                        <FontAwesomeIcon icon={faCheck} /> {item.advantage.custom}
                                    </Card.Text>
                                    <Card.Text className="text-center text-white">
                                        <FontAwesomeIcon icon={faCheck} /> {item.advantage.outstanding}
                                    </Card.Text>
                                    <Card.Text className="text-center text-white p_l">
                                        <FontAwesomeIcon icon={faCheck} /> {item.advantage.happy}
                                    </Card.Text>
                                    <div className="d-flex justify-content-center">
                                        <NavLink to="/Registration">
                                            <button
                                                onClick={() => sessionStorage.setItem('purchaseId', item.id)}
                                                className="text-uppercase purchase_btn mt-3">
                                                {item.btnName}
                                            </button>
                                        </NavLink>
                                    </div>
                                </Card.Body>
                            </Card.ImgOverlay>
                        </Card>) : 'loading...'
                    }
                </CardDeck>
            </Container>
            <Footer />
        </>
    );
};

export default ChooseCourse;