import React, { Component } from 'react'
import classes from './CardList.module.css';
import { Row, Col, Card, Button } from 'react-bootstrap'
import CardElementContainer from './CardElement/CardElementContainer';
import CardElement from './CardElement/CardElement';
import { TagElement } from './TagElement/TagElement';

export default class CardList extends React.Component {

    componentDidMount() {
        this.props.getCardList();
        //console.log(Date());


        //let date = new Date();
        //let getDate = date.getDate();
        //let getDay = date.getDay();
        //let getHours = date.getHours();
        //let getMinutes = date.getMinutes();
        //console.log('Месяц: ' + getDate);
        //console.log('День: ' + getDay);
        //console.log('Час: ' + getHours);
        //console.log('Минута: ' + getMinutes);
    }

    render() {

        this.getList = async () => {
            await this.props.getCardList();
            console.log(this.props.cardList); // Чёт приходит не сразу...
        }

        this.newCard = () => {
            this.props.createNewCard();
        }

        this.getCardListWithTag = (tag) => {
            this.props.getCardsWithTag(tag);
        }

        
        this.tagElements = this.props.tagList
        .map((e => <TagElement key={Math.random().toString(36)} tag={e} getCardListWithTag={this.getCardListWithTag} /> ))

        this.cardElements = this.props.cardList
        .map((e => <CardElement key={e._id} title={e.Title} content={e.Content} tag={e.Tag} date={e.Date} id={e._id} openThisCard={this.props.openThisCard} deleteThisCard={this.props.deleteThisCard} /> ))


        // Навесь onClick на карточки, для их открытия.

        return (
            <Row>
                <Col  className={classes.Test}>
                    <Row>
                        <Col md style={{ background: 'yellow', height: '8vh' }}>{this.tagElements}</Col>
                    </Row>
                    <Row>
                        <Col md={12} style={{ background: 'rgb(65, 74, 78)', height: '86.5vh', overflow: 'auto', color: 'white' }}>
                            <Button onClick={this.newCard} className="mt-3 mb-1 ml-2">+ New Card</Button>
                            <Button onClick={this.getList} className="mt-3 mb-1 ml-2">Update list</Button>
                            <Row className="justify-content-around " style={{ overflow: 'hidden', height: '35rem' }} >

                                {this.cardElements}
                                
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

// <CardElementContainer />



// className="justify-content-center"
// className="flex-md-nowrap"