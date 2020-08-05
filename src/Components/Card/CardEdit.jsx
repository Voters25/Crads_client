import React, { Component } from 'react'
import classes from './CardEdit.module.css';
import { Row, Col, Card, FormGroup, FormControl } from 'react-bootstrap';

export default class CardEdit extends React.Component {
    render() {

        // ЕСЛИ КЛИКНУЛИ ПО edit ТО ОТРИСОВАТЬ ФОРМУ С ТЕКСТОМ ИЗ КАРТОЧКИ

        this.newTitleElement = React.createRef();
        this.onChangeCardTitle = () => {
            let text = this.newTitleElement.current.value;
            this.props.changeCardTitle(text);
        }
        console.log(this.props.cardTitle);

        this.newTextElement = React.createRef();
        this.onChangeCardText = () => {
            let text = this.newTextElement.current.value;
            this.props.changeCardText(text);
        }
        console.log(this.props.cardText);



        return (
            <Row className="justify-content-center" style={{ height: '94.5vh' }}>

                <Card className="mt-4 " style={{ width: '80%', height: '70%', color: 'black' }}>
                    <Card.Body>
                        <Card.Title>
                            Title
                        </Card.Title>
                        <FormGroup >
                            <FormControl onChange={this.onChangeCardTitle} ref={this.newTitleElement} value={this.props.cardTitle} aria-describedby></FormControl>
                        </FormGroup>
                        
                        <Card.Text>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatem adipisci veritatis necessitatibus, voluptas dolorum natus repudiandae autem minus perferendis et, consequuntur iure, saepe earum vitae! Quae iure odio possimus?
                        </Card.Text>
                        <FormGroup >
                            <FormControl onChange={this.onChangeCardText} ref={this.newTextElement} value={this.props.cardText} aria-describedby></FormControl>
                        </FormGroup>

                        <Card.Link href='#'>Edit</Card.Link>
                        <Card.Link href='#'>Save</Card.Link>
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