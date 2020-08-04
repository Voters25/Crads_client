import React, { Component } from 'react'
import classes from './CardList.module.css';
import { Row, Col } from 'react-bootstrap'

export default class CardList extends React.Component {
    render() {
        return (
            <Row>
                <Col md className={classes.Test}></Col>
                <Col md className={classes.Test}></Col>
            </Row>
        )
    }
}