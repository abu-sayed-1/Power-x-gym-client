import React, { useEffect } from 'react';
import './ClassSchedule.css'
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/Navbar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'


// const summary = [

//     {
//         id: "1000876_9",
//         description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique incidunt nisi quasi explicabo aliquid totam, libero itaque perspiciatis obcaecati. Consectetur facilis quae doloribus beatae voluptas hic, ratione ad ullam aspernatur, cum, accusamus molestias. Odit dignissimos ex neque. Voluptatum officiis nemo consectetur libero iure accusantium eveniet dicta voluptas rerum nisi modi accusamus quaerat, labore cumque ducimus natus dolorem quasi nobis. Veritatis autem aut pariatur! Pariatur assumenda, vel corrupti temporibus porro quo ex! Esse error aspernatur nostrum quidem? Suscipit reprehenderit, culpa dolore dolores ipsam quis modi ab, cum, autem iure adipisci dignissimos impedit consequuntur. Numquam aut inventore nulla eius magni reprehenderit, enim est amet cumque placeat consectetur quia sequi eos quasi optio earum officia vitae beatae deleniti? Labore dolor optio quidem ullam? Est veniam adipisci fugiat nisi veritatis quia deserunt odit, debitis asperiores suscipit aspernatur dolor obcaecati expedita exercitationem sapiente tempora sequi neque sint ab? Itaque dolores veniam corporis quibusdam fuga est ullam inventore provident doloremque, impedit, similique quae quis excepturi mollitia vitae, nam rerum recusandae ipsa molestias! Atque labore reprehenderit aliquid at',
//         advantage: [
//             {
//                 id: 1,
//                 convenience: 'Having Slimmer Shapely Thighs'
//             },
//             {
//                 id: 2,
//                 convenience: 'Getting Stronger Body'
//             },
//             {
//                 id: 3,
//                 convenience: 'Increased Metabolism'
//             }
//             , {
//                 id: 4,
//                 convenience: 'Increased Muscular Endurance'
//             },
//             {
//                 id: 5,
//                 convenience: 'Maximum Results in Less Time'
//             },
//             {
//                 id: 6,
//                 convenience: 'Firm Hips and tummy'
//             }
//         ]
//     }
// ]

// const trainingsData = [
//     {
//         id: 1,
//         daysAndTimes: [
//             { id: 1, dayTime: { day: 'Monday', time: "8:00 AM - 9:00 AM" } },
//             { id: 2, dayTime: { day: 'Tuesday', time: "7:00 AM - 8:00 AM" } },
//             { id: 3, dayTime: { day: 'Wednesday', time: "10:00 AM - 11:00 AM" } },
//             { id: 4, dayTime: { day: 'Thursday', time: "5:00 PM - 6:00 PM" } },
//             { id: 5, dayTime: { day: 'Friday', time: "8:00 PM - 9:00 PM" } },
//             { id: 6, dayTime: { day: 'Saturday', time: "10:00 PM - 11:00 PM" } },
//         ],
//         img: 'https://i.ibb.co/YRK2kDf/victor-freitas-546919-unsplash.png'
//     },
//     {
//         id: 2,
//         daysAndTimes: [
//             { id: 1, dayTime: { day: 'Monday', time: "8:00 AM - 9:00 AM" } },
//             { id: 2, dayTime: { day: 'Tuesday', time: "7:00 AM - 8:00 AM" } },
//             { id: 3, dayTime: { day: 'Wednesday', time: "10:00 AM - 11:00 AM" } },
//             { id: 4, dayTime: { day: 'Thursday', time: "5:00 PM - 6:00 PM" } },
//             { id: 5, dayTime: { day: 'Friday', time: "8:00 PM - 9:00 PM" } },
//             { id: 6, dayTime: { day: 'Saturday', time: "10:00 PM - 11:00 PM" } },
//         ],

//         img: 'https://i.ibb.co/4N7QFhw/baylee-gramling-5m4-Z14-SDL80-unsplash.jpg'
//     },
//     {
//         id: 3,
//         daysAndTimes: [
//             { id: 1, dayTime: { day: 'Monday', time: "8:00 AM - 9:00 AM" } },
//             { id: 2, dayTime: { day: 'Tuesday', time: "7:00 AM - 8:00 AM" } },
//             { id: 3, dayTime: { day: 'Wednesday', time: "10:00 AM - 11:00 AM" } },
//             { id: 4, dayTime: { day: 'Thursday', time: "5:00 PM - 6:00 PM" } },
//             { id: 5, dayTime: { day: 'Friday', time: "8:00 PM - 9:00 PM" } },
//             { id: 6, dayTime: { day: 'Saturday', time: "10:00 PM - 11:00 PM" } },
//         ],
//         img: 'https://i.ibb.co/f0hCqpK/humphrey-muleba-LOA2m-Tj1vhc-unsplash.jpg'
//     },
//     {
//         id: 4,
//         daysAndTimes: [
//             { id: 1, dayTime: { day: 'Monday', time: "8:00 AM - 9:00 AM" } },
//             { id: 2, dayTime: { day: 'Tuesday', time: "7:00 AM - 8:00 AM" } },
//             { id: 3, dayTime: { day: 'Wednesday', time: "10:00 AM - 11:00 AM" } },
//             { id: 4, dayTime: { day: 'Thursday', time: "5:00 PM - 6:00 PM" } },
//             { id: 5, dayTime: { day: 'Friday', time: "8:00 PM - 9:00 PM" } },
//             { id: 6, dayTime: { day: 'Saturday', time: "10:00 PM - 11:00 PM" } },
//         ],
//         img: 'https://i.ibb.co/fdZN2sK/alora-griffiths-Tuzrz-Arccvc-unsplash.jpg'
//     },
//     {
//         id: 5,
//         daysAndTimes: [
//             { id: 1, dayTime: { day: 'Monday', time: "8:00 AM - 9:00 AM" } },
//             { id: 2, dayTime: { day: 'Tuesday', time: "7:00 AM - 8:00 AM" } },
//             { id: 3, dayTime: { day: 'Wednesday', time: "10:00 AM - 11:00 AM" } },
//             { id: 4, dayTime: { day: 'Thursday', time: "5:00 PM - 6:00 PM" } },
//             { id: 5, dayTime: { day: 'Friday', time: "8:00 PM - 9:00 PM" } },
//             { id: 6, dayTime: { day: 'Saturday', time: "10:00 PM - 11:00 PM" } },
//         ],

//         img: 'https://i.ibb.co/5LWKD5Z/john-fornander-FIu48iuo-4g-unsplash.jpghttps://i.ibb.co/5LWKD5Z/john-fornander-FIu48iuo-4g-unsplash.jpg'
//     },
//     {
//         id: 6,
//         daysAndTimes: [
//             { id: 1, dayTime: { day: 'Monday', time: "8:00 AM - 9:00 AM" } },
//             { id: 2, dayTime: { day: 'Tuesday', time: "7:00 AM - 8:00 AM" } },
//             { id: 3, dayTime: { day: 'Wednesday', time: "10:00 AM - 11:00 AM" } },
//             { id: 4, dayTime: { day: 'Thursday', time: "5:00 PM - 6:00 PM" } },
//             { id: 5, dayTime: { day: 'Friday', time: "8:00 PM - 9:00 PM" } },
//             { id: 6, dayTime: { day: 'Saturday', time: "10:00 PM - 11:00 PM" } },
//         ],
//         img: 'https://tse3.mm.bing.net/th?id=OIP.Xal5xEgVnt39uwC2nLanSgHaFO&pid=Api&P=0&w=281&h=199'
//     }
// ];

const ClassSchedule = () => {
    //  useEffect(() => {
    //      fetch('http://localhost:4000/classScheduleDetail', {
    //          method: 'POST',
    //          headers: {'Content-type': 'application/json'},
    //          body: JSON.stringify(summary)
    //      })
    //      .then(res => console.log(res))
    // }, [])


    const { id } = useParams();
    const [classSchedule, setClassSchedule] = useState(null);
    const [classScheduleData, setClassScheduleData] = useState(null);
    console.log(classScheduleData, 'data')

    useEffect(() => {
        fetch(`http://localhost:4000/checkout${id}`)
            .then(res => res.json())
            .then(data => setClassSchedule(data))
    }, [id]);

    useEffect(() => {
        fetch(`http://localhost:4000/classScheduleSpecificData`)
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
                </Row> : ''}
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