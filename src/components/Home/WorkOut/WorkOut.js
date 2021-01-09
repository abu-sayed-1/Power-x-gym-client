import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import "./WorkOut.css"

const WorkOut = ({workOutData}) => {

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
                    </Card>) : <h2>loading...</h2>
                }
            </CardDeck>
        </div>
    );
};

export default WorkOut;