import React from 'react';
import { Card, CardDeck, Container } from 'react-bootstrap';

const TrainingPrograms = ({ TrainingData }) => {
    return (
        <Container >
            <div className="my-5 pt-md-5">
                <h2 className="text-center">TRAINING <span className="text-warning">PROGRAMS</span></h2>
            </div>

            <CardDeck className="mt-5 pt-5">
                {
                    TrainingData ? TrainingData.map(item => <Card key={item._id}>
                        <Card.Img variant="top" className="workOutBg_img" src={item.trainingProgramsImg} />
                        <button className="text-uppercase Training_Programs_Btn">{item.trainingBtnName}</button>
                    </Card>) : <h2>loading.....</h2>
                }
            </CardDeck>
        </Container>
    );
};

export default TrainingPrograms;