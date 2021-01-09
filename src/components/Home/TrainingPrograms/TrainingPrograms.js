import React from 'react';
import { Card, CardDeck, Container } from 'react-bootstrap';

const TrainingPrograms = ({ TrainingData }) => {
    return (
        <Container >
            <h2 className="text-uppercase mt-5 pt-5 text-center">Training <span className="text-warning">Programs</span> </h2>
            <CardDeck className="mt-5 pt-5">
                {
                    TrainingData ? TrainingData.map(item => <Card key={item._id}>
                        <Card.Img variant="top" className="workOutBg_img" src={item.trainingProgramsImg} />
                            <button className="text-uppercase Training_Programs_Btn">{item.trainingBtnName}</button>
                            {/* <i class="fal fa-arrow-right"></i> */}
                    </Card>) : <h2>loading...</h2>
                }
            </CardDeck>
        </Container>
    );
};

export default TrainingPrograms;