import React, { Component } from 'react'
//import classes from './CardList.module.css';
import { Row, Col, Card } from 'react-bootstrap'
import CardElementContainer from './CardElementContainer';

export default class CardElement extends React.Component {
    render() {





        // Навесь onClick на карточки, для их открытия.


        return (
            <Card className="mt-3 mr-3 ml-3" style={{ width: '19rem', color: 'black' }}>
                <Card.Body>
                    <Card.Title>
                        Title
                    </Card.Title>
                    <Card.Text>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatem adipisci veritatis necessitatibus, voluptas dolorum natus repudiandae autem minus perferendis et, consequuntur iure, saepe earum vitae! Quae iure odio possimus?
                                    </Card.Text>
                    <Card.Link href='#'>Edit</Card.Link>
                    <Card.Link href='#'>Delete</Card.Link>
                </Card.Body>
            </Card>
        )
    }
}


// className="justify-content-center"

// className="flex-md-nowrap"