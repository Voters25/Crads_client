import React, { Component } from 'react'
import classes from './CardList.module.css';
import { Row, Col, Card } from 'react-bootstrap'
import CardListContainer from './CardListContainer';

export default class CardList extends React.Component {
    render() {
        return (
            <Row>
                <Col  className={classes.Test}>
                    <Row>
                        <Col md style={{ background: 'yellow', height: '8vh' }}>ТЕГИ</Col>
                    </Row>
                    <Row>
                        <Col md={12}  style={{ background: 'rgb(65, 74, 78)', height: '86.5vh', color: 'white' }}>
                            Карточки
                                <Row className="justify-content-center">
                                <Card className="ml-3 mr-3" style={{ width: '18rem', color: 'black' }}>
                                    <Card.Body>
                                        <Card.Title>
                                            Title
                                    </Card.Title>
                                        <Card.Text>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatem adipisci veritatis necessitatibus, voluptas dolorum natus repudiandae autem minus perferendis et, consequuntur iure, saepe earum vitae! Quae iure odio possimus?
                                    </Card.Text>
                                        <Card.Link href='#'>Link</Card.Link>
                                        <Card.Link href='#'>Link</Card.Link>
                                    </Card.Body>
                                </Card>


                                <Card className="ml-3 mr-3" style={{ width: '18rem', color: 'black' }}>
                                    <Card.Body>
                                        <Card.Title>
                                            Title
                                    </Card.Title>
                                        <Card.Text>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatem adipisci veritatis necessitatibus, voluptas dolorum natus repudiandae autem minus perferendis et, consequuntur iure, saepe earum vitae! Quae iure odio possimus?
                                    </Card.Text>
                                        <Card.Link href='#'>Link</Card.Link>
                                        <Card.Link href='#'>Link</Card.Link>
                                    </Card.Body>
                                </Card>


                                <Card className="ml-3 mr-3" style={{ width: '18rem', color: 'black' }}>
                                    <Card.Body>
                                        <Card.Title>
                                            Title
                                    </Card.Title>
                                        <Card.Text>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatem adipisci veritatis necessitatibus, voluptas dolorum natus repudiandae autem minus perferendis et, consequuntur iure, saepe earum vitae! Quae iure odio possimus?
                                    </Card.Text>
                                        <Card.Link href='#'>Link</Card.Link>
                                        <Card.Link href='#'>Link</Card.Link>
                                    </Card.Body>
                                </Card>

                                <Card className="ml-3 mr-3" style={{ width: '18rem', color: 'black' }}>
                                    <Card.Body>
                                        <Card.Title>
                                            Title
                                    </Card.Title>
                                        <Card.Text>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatem adipisci veritatis necessitatibus, voluptas dolorum natus repudiandae autem minus perferendis et, consequuntur iure, saepe earum vitae! Quae iure odio possimus?
                                    </Card.Text>
                                        <Card.Link href='#'>Link</Card.Link>
                                        <Card.Link href='#'>Link</Card.Link>
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