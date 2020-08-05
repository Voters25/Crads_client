import React, { Component } from 'react'
import classes from './CardList.module.css';
import { Row, Col, Card } from 'react-bootstrap'
import CardListContainer from './CardListContainer';

export default class CardList extends React.Component {
    render() {





        // Навесь onClick на карточки, для их открытия.


        return (
            <Row>
                <Col  className={classes.Test}>
                    <Row>
                        <Col md style={{ background: 'yellow', height: '8vh' }}>ТЕГИ</Col>
                    </Row>
                    <Row>
                        <Col md={12} style={{ background: 'rgb(65, 74, 78)', height: '86.5vh', color: 'white' }}>
                            Карточки ___ новая карточка центрируется, даже если она дна. Нехорошо!!!
                                <Row className="justify-content-around flex-nowrap">
                                <Card className="mt-3 mr-3 ml-3"  style={{ width: '19rem', color: 'black' }}>
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


                                
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}


// className="justify-content-center"