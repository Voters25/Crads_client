import React, { Component } from 'react'
import classes from './CardList.module.css';
import { Row, Col, Card } from 'react-bootstrap'
import CardElementContainer from './CardElement/CardElementContainer';
//import CardElement from './CardElement/CardElement';

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
                        <Col md={12} style={{ background: 'rgb(65, 74, 78)', height: '86.5vh', overflow: 'auto', color: 'white' }}>
                        Карточки ___ новая карточка центрируется, даже если она дна. Нехорошо!!!
                            <Row className="justify-content-around ">

                                
                                <CardElementContainer />
                                <CardElementContainer />
                                <CardElementContainer />
                                <CardElementContainer />

                                
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}


// className="justify-content-center"

// className="flex-md-nowrap"