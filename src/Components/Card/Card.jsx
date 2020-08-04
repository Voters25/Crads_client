import React, { Component } from 'react'
import classes from './Card.module.css';
import { Row, Col } from 'react-bootstrap';

export default class Card extends React.Component {
    render() {
        return (
            <Row>
                <Col className={classes.Test} ></Col>
            </Row>
        )
    }
}

/* 

style={{ background: 'yellow', height: '94.5vh'}}

*/