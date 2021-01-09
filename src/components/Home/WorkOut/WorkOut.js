import React, { useEffect, useState } from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import "./WorkOut.css"
// const workOutData = [
//     {
//         id: 1,
//         img: "https://i.ibb.co/f486XXn/Mask-Group-2.png",
//         icon: "https://i.ibb.co/vLW5xXB/Group-80.png",
//         workOutName: "PROGRESSION",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam debitis quas possimus eos corrupti eaque provident ipsa a praesentium corporis! Voluptates id odio facilis. Nobis modi asperiores tempora doloribus vel."
//     },

//     {
//         id: 2,
//         text: 'workout',
//         img: "https://i.ibb.co/YB1Rk3r/daniel-apodaca-Wdo-Qio6-HPVA-unsplash.jpg",
//         icon: "https://i.ibb.co/YZN5hZ8/Group-81.png",
//         workOutName: "WORKOUT",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam debitis quas possimus eos corrupti eaque provident ipsa a praesentium corporis! Voluptates id odio facilis. Nobis modi asperiores tempora doloribus vel."
//     },

//     {
//         id: 3,
//         img: "https://i.ibb.co/nmb55FN/damir-spanic-uyt-Hn-ZAKNWQ-unsplash.jpg",
//         icon: "https://i.ibb.co/4N2BBSJ/Group-82.png",
//         workOutName: "NUTRITION",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam debitis quas possimus eos corrupti eaque provident ipsa a praesentium corporis! Voluptates id odio facilis. Nobis modi asperiores tempora doloribus vel."
//     },

//     {
//         id: 4,
//         OurDreamImg: "https://i.ibb.co/FDPQydh/wells-chan-H-v-Axu-Wxmi8-unsplash.jpg",
//         title: 'we are here to dream! out team is here surve you.',
//         outDreamDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam debitis quas possimus eos corrupti eaque provident ipsa a praesentium corporis! Voluptates id odio facilis. Nobis modi asperiores tempora doloribus vel."

//     },

//     {
//         id: 5,
//         TrainingProgramsImg: "https://tse3.mm.bing.net/th?id=OIP.m7X5I3QdI8fcz_bRbxY7SwHaEq&pid=Api&P=0&w=272&h=172"
//     },

//     {
//         id: 6,
//         TrainingProgramsImg: "https://i.ibb.co/27hk9ZC/arthur-edelman-qfjuh4-OLdxw-unsplash.jpg"
//     },

//     {
//         id: 7,
//         chooseUsIcon: "https://i.ibb.co/7GhZ6hd/Group-87.png",
//         chooseUsTitle: "free fitness training",
//         chooseUsDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam debitis quas possimus eos corrupti eaque provident ipsa a praesentium corporis! Voluptates id odio facilis. Nobis modi asperiores tempora doloribus vel."
//     },

//     {
//         id: 8,
//         chooseUsIcon: "https://i.ibb.co/NKPHH1S/Group-88.png",
//         chooseUsTitle: "tons of cardio & strength",
//         chooseUsDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam debitis quas possimus eos corrupti eaque provident ipsa a praesentium corporis! Voluptates id odio facilis. Nobis modi asperiores tempora doloribus vel."
//     },

//     {

//         id: 9,
//         chooseUsIcon: "https://i.ibb.co/Dzx9Xb8/gift-2.png",
//         chooseUsTitle: "no commitment memberships",
//         chooseUsDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam debitis quas possimus eos corrupti eaque provident ipsa a praesentium corporis! Voluptates id odio facilis. Nobis modi asperiores tempora doloribus vel."
//     }

// ];
const WorkOut = () => {
    const [workOutData, setWorkOutData] = useState(null);
    // const handleHomeData = (homeData) => {
    //     console.log(homeData);
    //     fetch("http://localhost:4000/homePageData", {
    //         method: 'POST',
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(homeData)
    //     })
    //         .then(result => console.log(result));
    // }


    useEffect(() => {
        fetch("http://localhost:4000/workOutData")
            .then(res => res.json())
            .then(data => setWorkOutData(data))
    }, [])


    return (

        <div className="container mt-5">
            <CardDeck className=" m-0 p-0 w-100 h-25">
                {
                    workOutData ? workOutData.map(item => <Card key={item._id}>
                        <Card.Img variant="top" className="workOutBg_img" src={item.img} />
                        <Card.ImgOverlay className="card_Img">
                            <Card.Body className="text-center">
                                <Card.Img variant="top" className="w-25 pt-5 mt-5" src={item.icon} />
                                <Card.Title className="text-white pt-4 workOut_title">{item.workOutName}</Card.Title>
                                <Card.Text className="text-white pt-2">
                                    {item.description}
                                </Card.Text>
                            </Card.Body>
                        </Card.ImgOverlay>
                    </Card>) :<h2>loading...</h2>
                }
            </CardDeck>
        </div>
    );
};

export default WorkOut;