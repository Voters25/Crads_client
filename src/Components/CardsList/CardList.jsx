import React, { Component } from 'react'
import classes from './CardList.module.css';
import { Row, Col } from 'react-bootstrap'

export default class CardList extends React.Component {
    render() {
        return (
            <Row>
                <Col md className={classes.Test}>
                    <Row>
                        <Col md style={{ background: 'yellow', height: '8vh' }}>ТЕГИ</Col>
                    </Row>
                    <Row>
                        <Col md style={{ background: 'rgb(65, 74, 78)', height: '86.5vh', color: 'white' }}>Карточки</Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}