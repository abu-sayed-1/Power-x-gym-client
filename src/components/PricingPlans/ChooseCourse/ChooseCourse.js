import React, { useState } from 'react';
import './ChooseCourse.css'
import { useEffect } from 'react';
import { Container, Card, CardDeck } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import NavBar from '../../Shared/Navbar/NavBar';
import Footer from '../../Shared/Footer/Footer';
import { NavLink } from 'react-router-dom';


// const ChooseCourseData = [
//     {
//         id: 1,
//         img: 'https://tse2.mm.bing.net/th?id=OIP.BMXkVguaVTg1-yDnDI-1fwHaEl&pid=Api&P=0&w=270&h=168',
//         billed: 'billed monthly',
//         title: 'advance plan',
//         price: '$140',
//         advantage: {
//             mobile: 'Mobile-Optimized',
//             hosting: 'Best Hosting',
//             custom: 'Free Custom',
//             outstanding: 'Outstanding',
//             happy: 'Happy Customers',
//         },
//         btnName: 'purchase'
//     }, {
//         id: 2,
//         img: 'https://i.ibb.co/5hSM867/daniel-apodaca-Wdo-Qio6-HPVA-unsplash.jpg',
//         billed: 'billed monthly',
//         title: 'basic plan',
//         price: '$120',
//         advantage: {
//             mobile: 'Mobile-Optimized',
//             hosting: 'Best Hosting',
//             custom: 'Free Custom',
//             outstanding: 'Outstanding',
//             happy: 'Happy Customers',
//         },
//         btnName: 'purchase'
//     }, {
//         id: 3,
//         img: 'https://tse4.mm.bing.net/th?id=OIP.eCxf2a06RzVvKP-56E2kgAHaDJ&pid=Api&P=0&w=392&h=167',
//         billed: 'billed monthly',
//         title: 'beginners',
//         price: '$90',
//         advantage: {
//             mobile: 'Mobile-Optimized',
//             hosting: 'Best Hosting',
//             custom: 'Free Custom',
//             outstanding: 'Outstanding',
//             happy: 'Happy Customers',
//         },
//         btnName: 'purchase'
//     },
// ]


const ChooseCourse = () => {
    const [course, setCourse] = useState(null);

    // useEffect(() => {
    //      fetch('http://localhost:4000/pricingPlans', {
    //          method: 'POST',
    //          headers: {'Content-type': 'application/json'},
    //          body: JSON.stringify(ChooseCourseData)
    //      })
    //      .then(res => console.log(res))
    // }, [])

    useEffect(() => {
        fetch('http://localhost:4000/chooseCourseData')
            .then(res => res.json())
            .then(data => setCourse(data));
    }, [])
    return (
        <>
            <section className="header_main mb-5">
                <div className=" overly">
                    <NavBar />
                    <h1 className="text-white text-center align-self-center">PRICING PLANS</h1>
                </div>
            </section>
            <Container className="mb-5">
                <h1 className="text_color text-center">CHOOSE THE OFFER THAT SUITS YOU</h1>
                <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda <br /> illo quas consequatur unde facilis eligendi atque laudantium doloribus nobis aperiam.</p>
                <CardDeck sm={12} md={6} lg={4} xl={4} className="my-5 py-5">
                    {
                        course ? course.map(item => <Card className=" " key={item._id}>
                            <Card.Img className="choose_course_img" src={item.img} />
                            <Card.ImgOverlay className="card_Img">
                                <Card.Body>
                                    <h6 className="text-center text_color">{item.billed}</h6>
                                    <h2 className="text-center text-white">{item.title}</h2>
                                    <h3 className="text-center price">{item.price}</h3>
                                    <Card.Text className="text-center text-white p_l ">
                                        <FontAwesomeIcon icon={faCheck} />    {item.advantage.mobile}
                                    </Card.Text>
                                    <Card.Text className="text-center text-white">
                                        <FontAwesomeIcon icon={faCheck} />  {item.advantage.hosting}
                                    </Card.Text>
                                    <Card.Text className="text-center text-white">
                                        <FontAwesomeIcon icon={faCheck} /> {item.advantage.custom}
                                    </Card.Text>
                                    <Card.Text className="text-center text-white">
                                        <FontAwesomeIcon icon={faCheck} />  {item.advantage.outstanding}
                                    </Card.Text>
                                    <Card.Text className="text-center text-white p_l">
                                        <FontAwesomeIcon icon={faCheck} />  {item.advantage.happy}
                                    </Card.Text>
                                    <NavLink to="/Registration">
                                        <button onClick={() => sessionStorage.setItem('purchaseId', item.id)} className="purchase_btn text-uppercase mt-3">{item.btnName}</button>
                                    </NavLink>
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