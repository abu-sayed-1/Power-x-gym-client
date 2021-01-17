import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container,Card, CardDeck } from 'react-bootstrap';

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
    console.log(coursesData)

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
    }, [])

    return (
        // <Container>
            <CardDeck>
                {
                    coursesData ? coursesData.map(list =>
                        <Card>
                            <img src={list.img} alt="" className="w-100"/>
                            {/* <Card.Footer> */}
                                <button>{list.trainingName}</button>
                            {/* </Card.Footer> */}
                        </Card>

                    ) : ''
                }
            </CardDeck>
        // </Container>
    );
};

export default CoursesList;