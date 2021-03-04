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

const CoursesList = () => {
    const [coursesData, setCoursesData] = useState(null);
    useEffect(() => {
        fetch('http://localhost:4000/coursesByData')
            .then(res => res.json())
            .then(data => setCoursesData(data))
    }, []);

    const history = useHistory();
    const handleCourseDetail = (id) => {
        history.push(`/specificId${id}`)
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
                                <button onClick={() => handleCourseDetail(list.id)}
                                    className="courses_btn text-uppercase">
                                      {list.trainingName}
                                    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                                </button>
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