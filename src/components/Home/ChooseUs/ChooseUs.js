import React from 'react';
import { Card, CardDeck, Container } from 'react-bootstrap';

const ChooseUs = ({ chooseUsData }) => {
    return (
        <Container className="mt-5 pt-2 my-5 py-5">
            <h1 className="text-center  my-5 py-5"><span className="text-warning">WHY</span> CHOOSE US</h1>
            <CardDeck className="mt-5">
                {
                    chooseUsData ? chooseUsData.map(item => <Card key={item._id}>
                        <Card.Body className="text-center">
                            <Card.Img variant="top" className="w-25 pt-5" src={item.chooseUsIcon} />
                            <Card.Title className="pt-5">{item.chooseUsTitle}</Card.Title>
                            <Card.Text className="pt-2">
                                {item.chooseUsDescription}
                            </Card.Text>
                        </Card.Body>
                    </Card>) : <h2>loading...</h2>
                }
            </CardDeck>
        </Container>
    );
};

export default ChooseUs;