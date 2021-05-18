import React from 'react';
import { Card, CardDeck, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';

const TrainingPrograms = ({ TrainingData }) => {
    const history = useHistory();
    // const handleCourseDetail = (id) => {
    //     history.push(`/specificId${id}`)
    // }

    const handleTrainingDetail = id => {
        history.push(`/classSchedule${id}`);
    }
    return (
        <Container >
            <div className="my-5 pt-md-5">
                <h2 className="text-center">TRAINING <span className="text-warning">PROGRAMS</span></h2>
            </div>

            <CardDeck className="mt-5 pt-5">
                {
                    TrainingData ? TrainingData.map(item => <Card key={item._id}>
                        <Card.Img variant="top" className="workOutBg_img" src={item.trainingProgramsImg} />
                        <button
                            onClick={() => handleTrainingDetail(item.ids)}
                            className="
                        text-uppercase
                         Training_Programs_Btn"
                        >
                            {item.trainingBtnName}
                        </button>
                    </Card>) : <h2>loading.....</h2>
                }
            </CardDeck>
            <NavLink to="/coursesList">
                <h5 className="coursesLink pt-1">see more</h5>
            </NavLink>
        </Container>
    );
};

export default TrainingPrograms;