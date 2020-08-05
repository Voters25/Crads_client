import React, { Component } from 'react'
import classes from './CardList.module.css';
import { Row, Col, Card, Button } from 'react-bootstrap'
import CardElementContainer from './CardElement/CardElementContainer';
//import CardElement from './CardElement/CardElement';

export default class CardList extends React.Component {

    /* componentDidMount() {
        this.props.getCardList();
    } */

    render() {

        this.getList = async () => {
            this.props.getCardList();
            console.log(this.props.cardList); // Чёт приходит не сразу...
        }
        


        // Навесь onClick на карточки, для их открытия.


        return (
            <Row>
                <Col  className={classes.Test}>
                    <Row>
                        <Col md style={{ background: 'yellow', height: '8vh' }}>ТЕГИ</Col>
                    </Row>
                    <Row>
                        <Col md={12} style={{ background: 'rgb(65, 74, 78)', height: '86.5vh', overflow: 'auto', color: 'white' }}>
                            <Button className="mt-3 mb-1 ml-2">+ New Card</Button>
                            <Button onClick={this.getList} className="mt-3 mb-1 ml-2">ВРЕМЯНКА ОБНОВИТЬ СПИСОК</Button>
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