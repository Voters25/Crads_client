import React, { Component } from 'react'
import classes from './CardEdit.module.css';
import { Row, Col, Card } from 'react-bootstrap';

export default class CardEdit extends React.Component {
    render() {
        return (
            <Row className="justify-content-center" style={{height: '94.5vh'}}>

                    <Card className="mt-4 " style={{ width: '80%', height: '70%', color: 'black' }}>
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

            </Row>
        )
    }
}

/*

<Col className={classes.Test} ></Col>

*/


/* 

style={{ background: 'yellow', height: '94.5vh'}}

*/

/*

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

*/