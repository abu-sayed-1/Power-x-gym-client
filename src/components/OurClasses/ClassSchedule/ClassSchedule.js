import React, { useEffect } from 'react';
import './ClassSchedule.css'
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/Navbar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

const ClassSchedule = () => {
    const { id } = useParams();
    const [classSchedule, setClassSchedule] = useState(null);
    const [classScheduleData, setClassScheduleData] = useState(null);
    console.log(classScheduleData, 'data')

    useEffect(() => {
        fetch(`https://guarded-meadow-19744.herokuapp.com/checkout${id}`)
            .then(res => res.json())
            .then(data => setClassSchedule(data))
    }, [id]);

    useEffect(() => {
        fetch(`https://guarded-meadow-19744.herokuapp.com/classScheduleSpecificData`)
            .then(res => res.json())
            .then(data => setClassScheduleData(data))
    }, []);

    return (
        <>
            <section className="header_main mb-5">
                <div className="overly">
                    <NavBar />
                    <h1 className="text-white text-center">Class Schedule</h1>
                </div>
            </section>
            <Container className="mb-5">
                {classSchedule ? <Row>
                    <Col sm={12} md={6} lg={6} xl={6}>
                        <img className="img-fluid" src={classSchedule[0].img} alt="" />
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6}>
                        <>
                            <h1 className=""><span className="class pt-sm-5">CLASS</span> SCHEDULE</h1>
                            {
                                classSchedule[0].daysAndTimes.map(item => <div className="shadow rounded p-4 m-1" key={item.id}>
                                    <h4>{item.dayTime.day}</h4>
                                    <p className="time_list">{item.dayTime.time}</p>
                                </div>)
                            }
                        </>
                    </Col>
                </Row> : 'Loading....'}
                {
                    classScheduleData ? <div>
                        <Row>
                            <Col sm={12} md={6} lg={6} xl={6}>
                                <p className="mt-4 classSchedule_description">{classScheduleData[0].description}</p>
                                {
                                    classScheduleData[0].advantage.map(item => <div className="mt-4 pt-1" key={item.id}>
                                        <h5><FontAwesomeIcon className="square_icon mr-4" icon={faCheckSquare} />{item.convenience}</h5>
                                    </div>)
                                }
                            </Col>
                            <Col sm={12} md={6} lg={6} xl={6} className=" d-flex justify-content-md-end justify-content-sm-center align-items-end">
                                <NavLink to="/chooseCourse">
                                    <button className="brand_btn">JOIN US</button>
                                </NavLink>
                            </Col>
                        </Row>
                    </div> : 'Loading...'
                }
            </Container>
            <Footer />
        </>
    );
};

export default ClassSchedule;