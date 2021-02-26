import React, { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/Navbar/NavBar';

const trainingsData = [
    {
        id: 1,
        daysAndTime: [
            { id: 1, day: 'Monday' },
            { id: 2, time: "8:00 AM - 9:00 AM" },
            { id: 3, day: 'Tuesday' },
            { id: 4, time: "7:00 AM - 8:00 AM" },
            { id: 5, day: 'Wednesday' },
            { id: 6, time: "10:00 AM - 11:00 AM" },
            { id: 7, day: 'Thursday' },
            { id: 8, time: "5:00 PM - 6:00 PM" },
            { id: 9, day: 'Friday' },
            { id: 10, time: "8:00 PM - 9:00 PM" },
            { id: 11, day: 'Saturday' },
            { id: 12, time: "10:00 PM - 11:00 PM" }
        ],

        img: 'https://i.ibb.co/YRK2kDf/victor-freitas-546919-unsplash.png'
    },
    {
        id: 2,
        daysAndTime: [
            { id: 1, day: 'Monday' },
            { id: 2, time: "8:00 AM - 9:00 AM" },
            { id: 3, day: 'Tuesday' },
            { id: 4, time: "7:00 AM - 8:00 AM" },
            { id: 5, day: 'Wednesday' },
            { id: 6, time: "10:00 AM - 11:00 AM" },
            { id: 7, day: 'Thursday' },
            { id: 8, time: "5:00 PM - 6:00 PM" },
            { id: 9, day: 'Friday' },
            { id: 10, time: "8:00 PM - 9:00 PM" },
            { id: 11, day: 'Saturday' },
            { id: 12, time: "10:00 PM - 11:00 PM" }
        ],

        img: 'https://i.ibb.co/4N7QFhw/baylee-gramling-5m4-Z14-SDL80-unsplash.jpg'
    },
    {
        id: 3,
        daysAndTime: [
            { id: 1, day: 'Monday' },
            { id: 2, time: "8:00 AM - 9:00 AM" },
            { id: 3, day: 'Tuesday' },
            { id: 4, time: "7:00 AM - 8:00 AM" },
            { id: 5, day: 'Wednesday' },
            { id: 6, time: "10:00 AM - 11:00 AM" },
            { id: 7, day: 'Thursday' },
            { id: 8, time: "5:00 PM - 6:00 PM" },
            { id: 9, day: 'Friday' },
            { id: 10, time: "8:00 PM - 9:00 PM" },
            { id: 11, day: 'Saturday' },
            { id: 12, time: "10:00 PM - 11:00 PM" }
        ],

        img: 'https://i.ibb.co/f0hCqpK/humphrey-muleba-LOA2m-Tj1vhc-unsplash.jpg'
    },
    {
        id: 4,
        daysAndTime: [
            { id: 1, day: 'Monday' },
            { id: 2, time: "8:00 AM - 9:00 AM" },
            { id: 3, day: 'Tuesday' },
            { id: 4, time: "7:00 AM - 8:00 AM" },
            { id: 5, day: 'Wednesday' },
            { id: 6, time: "10:00 AM - 11:00 AM" },
            { id: 7, day: 'Thursday' },
            { id: 8, time: "5:00 PM - 6:00 PM" },
            { id: 9, day: 'Friday' },
            { id: 10, time: "8:00 PM - 9:00 PM" },
            { id: 11, day: 'Saturday' },
            { id: 12, time: "10:00 PM - 11:00 PM" }
        ],

        img: 'https://i.ibb.co/fdZN2sK/alora-griffiths-Tuzrz-Arccvc-unsplash.jpg'
    },
    {
        id: 5,
        daysAndTime: [
            { id: 1, day: 'Monday' },
            { id: 2, time: "8:00 AM - 9:00 AM" },
            { id: 3, day: 'Tuesday' },
            { id: 4, time: "7:00 AM - 8:00 AM" },
            { id: 5, day: 'Wednesday' },
            { id: 6, time: "10:00 AM - 11:00 AM" },
            { id: 7, day: 'Thursday' },
            { id: 8, time: "5:00 PM - 6:00 PM" },
            { id: 9, day: 'Friday' },
            { id: 10, time: "8:00 PM - 9:00 PM" },
            { id: 11, day: 'Saturday' },
            { id: 12, time: "10:00 PM - 11:00 PM" }
        ],

        img: 'https://i.ibb.co/5LWKD5Z/john-fornander-FIu48iuo-4g-unsplash.jpghttps://i.ibb.co/5LWKD5Z/john-fornander-FIu48iuo-4g-unsplash.jpg'
    },
    {
        id: 6,
        daysAndTime: [
            { id: 1, day: 'Monday' },
            { id: 2, time: "8:00 AM - 9:00 AM" },
            { id: 3, day: 'Tuesday' },
            { id: 4, time: "7:00 AM - 8:00 AM" },
            { id: 5, day: 'Wednesday' },
            { id: 6, time: "10:00 AM - 11:00 AM" },
            { id: 7, day: 'Thursday' },
            { id: 8, time: "5:00 PM - 6:00 PM" },
            { id: 9, day: 'Friday' },
            { id: 10, time: "8:00 PM - 9:00 PM" },
            { id: 11, day: 'Saturday' },
            { id: 12, time: "10:00 PM - 11:00 PM" }
        ],

        img: 'https://tse3.mm.bing.net/th?id=OIP.Xal5xEgVnt39uwC2nLanSgHaFO&pid=Api&P=0&w=281&h=199'
    }
];

const ClassSchedule = () => {
    //  useEffect(() => {
    //      fetch('http://localhost:4000/classScheduleDetail', {
    //          method: 'POST',
    //          headers: {'Content-type': 'application/json'},
    //          body: JSON.stringify(trainingsData)
    //      })
    //      .then(res => console.log(res))
    // }, [])


    const { id } = useParams();
    const [classSchedule, setClassSchedule] = useState(null);
    console.log(classSchedule, id, 'classSchedule')

    useEffect(() => {
        fetch(`http://localhost:4000/checkout${id}`)
            .then(res => res.json())
            .then(data => setClassSchedule(data))
    }, [id]);

    return (
        <>
            <section className="header_main mb-5">
                <div className=" overly">
                    <NavBar />
                    <h1 className="text-white text-center align-self-center">Class Schedule</h1>
                </div>
            </section>
            <Container>
                {classSchedule ? <Row>
                    <Col>
                        <img className="img-fluid" src={classSchedule[0].img} alt="" />
                    </Col>
                    <Col>
                        <div>
                            <h1><span className="class">CLASS</span> SCHEDULE</h1>
                            {
                                classSchedule[0].daysAndTime.map(item => <div className="border" key={item}>
                                    <h4>{item.day} {item.time}</h4>
                                </div>)
                            }

                        </div>
                    </Col>
                </Row> : ''}
            </Container>
            <Footer />
        </>
    );
};

export default ClassSchedule;