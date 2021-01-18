import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

// const trainingsData = [
//     {
//         id: 1,
//         days: {
//             Monday: 'Monday',
//             Tuesday: 'Tuesday',
//             Wednesday: 'Wednesday',
//             Thursday: 'Thursday',
//             Friday: 'Friday',
//             Saturday: 'Saturday',
//         },
//         dates: {
//             first: "8:00 AM - 9:00 AM",
//             second: "7:00 AM - 8:00 AM",
//             third: "10:00 AM - 11:00 AM",
//             four: "5:00 PM - 6:00 PM",
//             five: "8:00 PM - 9:00 PM",
//             six: "10:00 PM - 11:00 PM"

//         },

//         img: 'https://i.ibb.co/YRK2kDf/victor-freitas-546919-unsplash.png'
//     },
//     {
//         id: 2,
//         days: {
//             Monday: 'Monday',
//             Tuesday: 'Tuesday',
//             Wednesday: 'Wednesday',
//             Thursday: 'Thursday',
//             Friday: 'Friday',
//             Saturday: 'Saturday',
//         },
//         dates: {
//             first: "8:00 AM - 9:00 AM",
//             second: "7:00 AM - 8:00 AM",
//             third: "10:00 AM - 11:00 AM",
//             four: "5:00 PM - 6:00 PM",
//             five: "8:00 PM - 9:00 PM",
//             six: "10:00 PM - 11:00 PM"

//         },

//         img: 'https://i.ibb.co/4N7QFhw/baylee-gramling-5m4-Z14-SDL80-unsplash.jpg'
//     },
//     {
//         id: 3,
//         days: {
//             Monday: 'Monday',
//             Tuesday: 'Tuesday',
//             Wednesday: 'Wednesday',
//             Thursday: 'Thursday',
//             Friday: 'Friday',
//             Saturday: 'Saturday',
//         },
//         dates: {
//             first: "8:00 AM - 9:00 AM",
//             second: "7:00 AM - 8:00 AM",
//             third: "10:00 AM - 11:00 AM",
//             four: "5:00 PM - 6:00 PM",
//             five: "8:00 PM - 9:00 PM",
//             six: "10:00 PM - 11:00 PM"

//         },

//         img: 'https://i.ibb.co/f0hCqpK/humphrey-muleba-LOA2m-Tj1vhc-unsplash.jpg'
//     },
//     {
//         id: 4,
//         days: {
//             Monday: 'Monday',
//             Tuesday: 'Tuesday',
//             Wednesday: 'Wednesday',
//             Thursday: 'Thursday',
//             Friday: 'Friday',
//             Saturday: 'Saturday',
//         },
//         dates: {
//             first: "8:00 AM - 9:00 AM",
//             second: "7:00 AM - 8:00 AM",
//             third: "10:00 AM - 11:00 AM",
//             four: "5:00 PM - 6:00 PM",
//             five: "8:00 PM - 9:00 PM",
//             six: "10:00 PM - 11:00 PM"

//         },

//         img: 'https://i.ibb.co/fdZN2sK/alora-griffiths-Tuzrz-Arccvc-unsplash.jpg'
//     },
//     {
//         id: 5,
//         days: {
//             Monday: 'Monday',
//             Tuesday: 'Tuesday',
//             Wednesday: 'Wednesday',
//             Thursday: 'Thursday',
//             Friday: 'Friday',
//             Saturday: 'Saturday',
//         },
//         dates: {
//             first: "8:00 AM - 9:00 AM",
//             second: "7:00 AM - 8:00 AM",
//             third: "10:00 AM - 11:00 AM",
//             four: "5:00 PM - 6:00 PM",
//             five: "8:00 PM - 9:00 PM",
//             six: "10:00 PM - 11:00 PM"

//         },

//         img: 'https://i.ibb.co/5LWKD5Z/john-fornander-FIu48iuo-4g-unsplash.jpghttps://i.ibb.co/5LWKD5Z/john-fornander-FIu48iuo-4g-unsplash.jpg'
//     },
//     {
//         id: 6,
//         days: {
//             Monday: 'Monday',
//             Tuesday: 'Tuesday',
//             Wednesday: 'Wednesday',
//             Thursday: 'Thursday',
//             Friday: 'Friday',
//             Saturday: 'Saturday',
//         },
//         dates: {
//             first: "8:00 AM - 9:00 AM",
//             second: "7:00 AM - 8:00 AM",
//             third: "10:00 AM - 11:00 AM",
//             four: "5:00 PM - 6:00 PM",
//             five: "8:00 PM - 9:00 PM",
//             six: "10:00 PM - 11:00 PM"

//         },

//         img: 'https://tse3.mm.bing.net/th?id=OIP.Xal5xEgVnt39uwC2nLanSgHaFO&pid=Api&P=0&w=281&h=199'
//     }
// ];
const ClassSchedule = () => {
    const { id } = useParams();
    const [classSchedule, setClassSchedule] = useState(null);
    console.log(classSchedule, 'classSchedule')
    // useEffect(() => {
    //     fetch('http://localhost:4000/trainingData', {
    //         method: 'POST',
    //         body: JSON.stringify(trainingsData),
    //         headers: {
    //             'Content-type': 'application/json'
    //         }
    //     })
    //         .then(res => console.log(res, "training Data"))
    // }, [])

    useEffect(() => {
        fetch('http://localhost:4000/checkoutId',{
          method:"POST",
          headers:{"Content-type": 'application/json'},
          body: JSON.stringify(id) 
        })
            .then(res => res.json())
            .then(data => setClassSchedule(data))
    }, [id])
    return (
        <div>
            <h2>this is trainingData</h2>
        </div>
    );
};

export default ClassSchedule;