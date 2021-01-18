import React from 'react';
import './CoursesList.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/Navbar/NavBar';
import { useHistory } from 'react-router-dom';

// const courseLists = [
//     {
//         id: 1,
//         trainingName: 'psycho training',
//         img: 'https://i.ibb.co/YRK2kDf/victor-freitas-546919-unsplash.png'
//     },
//     {
//         id: 2,
//         trainingName: 'self defense',
//         img: 'https://i.ibb.co/4N7QFhw/baylee-gramling-5m4-Z14-SDL80-unsplash.jpg'
//     },
//     {
//         id: 3,
//         trainingName: 'advance gym',
//         img: 'https://i.ibb.co/f0hCqpK/humphrey-muleba-LOA2m-Tj1vhc-unsplash.jpg'
//     },
//     {
//         id: 4,
//         trainingName: 'cardio training',
//         img: 'https://i.ibb.co/fdZN2sK/alora-griffiths-Tuzrz-Arccvc-unsplash.jpg'
//     },
//     {
//         id: 5,
//         trainingName: 'strength training',
//         img: 'https://i.ibb.co/5LWKD5Z/john-fornander-FIu48iuo-4g-unsplash.jpghttps://i.ibb.co/5LWKD5Z/john-fornander-FIu48iuo-4g-unsplash.jpg'
//     },
//     {
//         id: 6,
//         trainingName: 'psycho training',
//         img: 'https://tse3.mm.bing.net/th?id=OIP.Xal5xEgVnt39uwC2nLanSgHaFO&pid=Api&P=0&w=281&h=199'
//     }

// ]
const CoursesList = () => {
    const [coursesData, setCoursesData] = useState(null);
    // useEffect(() => {
    //     fetch('http://localhost:4000/coursesList', {
    //         method: 'POST',
    //         body: JSON.stringify(courseLists),
    //         headers: { 'Content-type': 'application/json' }
    //     })
    //         .then(result => console.log(result, "courses List"))
    // }, [])

    useEffect(() => {
        fetch('http://localhost:4000/coursesByData')
            .then(res => res.json())
            .then(data => setCoursesData(data))
    }, []);

    const history = useHistory();
    const handleCourseDetail = (id) => {
           console.log(id, 'course id ')
    }

    return (

        <>
            <section className="header_main mb-5">
                <div className=" overly">
                    <NavBar />
                    <h1 className="text-white text-center">OUR CLASSES</h1>
                </div>
            </section>
            <Container className="pt-5">
                <Row>
                    {
                        coursesData ? coursesData.map(list =>
                            <Col sm={12} md={6} lg={4} xl={4} key={list._id}>
                                <img src={list.img} alt="" className="course_img" />
                                <button onClick={() => handleCourseDetail(list.id)} className="courses_btn text-uppercase">{list.trainingName} <FontAwesomeIcon icon={faArrowRight} className="ml-2" /> </button>
                            </Col>

                        ) : ''
                    }
                </Row>
            </Container>
            <Footer />
        </ >

    );
};

export default CoursesList;