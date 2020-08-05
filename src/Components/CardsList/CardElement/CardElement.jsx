import React, { Component } from 'react'
import classes from './CardElement.module.css';
import { Row, Col, Card, Button } from 'react-bootstrap'
import CardElementContainer from './CardElementContainer';

export default class CardElement extends React.Component {
    render() {





        // Навесь onClick на карточки, для их открытия.


        return (
            <Card className="mt-3 mr-3 ml-3 " style={{ width: '19rem', height: '20rem', color: 'black' }} key={this.props.id}>
                <Card.Body>
                    <Card.Title >
                        {this.props.title}
                    </Card.Title>
                    <Card.Text className={classes.text} >
                        {this.props.content}
                    </Card.Text>
                    <Button className="mr-3" variant="dark">Open</Button>
                    <Button className="mr-3" variant="dark">Delete</Button>
                </Card.Body>
            </Card>
        )
    }
}

// style={{ overflow: 'hidden', height: '16rem' }}


// className="justify-content-center"
// className="flex-md-nowrap"

/*

<Card className="mt-3 mr-3 ml-3" style={{ width: '19rem', color: 'black' }}>
                <Card.Body>
                    <Card.Title>
                        Title
                    </Card.Title>
                    <Card.Text>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatem adipisci veritatis necessitatibus, voluptas dolorum natus repudiandae autem minus perferendis et, consequuntur iure, saepe earum vitae! Quae iure odio possimus?
                    </Card.Text>
                    <Button className="mr-3" variant="dark">Open</Button>
                    <Button className="mr-3" variant="dark">Delete</Button>
                </Card.Body>
            </Card>

*/