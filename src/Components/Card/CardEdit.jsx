import React, { Component } from 'react'
import classes from './CardEdit.module.css';
import { Row, Col, Card, FormGroup, FormControl, Button, Form } from 'react-bootstrap';

export default class CardEdit extends React.Component {
    render() {

        //console.log(this.props.cardText);
        //console.log(this.props.cardTitle);
        let cardTitle = this.props.cardTitle;
        let cardText = this.props.cardText;
        let cardTag = this.props.cardTag;

        let editMode = this.props.editMode;
        let thisCreatePage = this.props.thisCreatePage;
        let cardId = this.props.cardId;
        console.log('This create page? ' + thisCreatePage);
        console.log('Id: ' + cardId);

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

        this.newTagElement = React.createRef();
        this.onChangeCardTag = () => {
            let tag = this.newTagElement.current.value;
            this.props.changeCardTag(tag);
        }


        this.editCard = () => {
            console.log('Edit');
            this.props.onEditCard();
        }
        this.saveCard = () => { // ПРОТЕСТИ
            console.log('Save');
            let postFormContent = {cardId, cardTitle, cardText, cardTag}
            //console.log(postFormContent);
            this.props.saveThisCardChanges(postFormContent);
        }
        this.deleteCard = () => {
            console.log('Delete');
            this.props.deleteThisCard(cardId);
        }
        this.saveNewCard = () => { // НЕ ГОТОВО (НА СЕРВЕРЕ НЕ ПРИХОДИТ ТЕЛО ЗАПРОСА)
            console.log('Save new card');
            let postFormContent = {cardTitle, cardText, cardTag}
            this.props.createNewCard(postFormContent);
        }
        this.deleteNewCard = () => { // НЕ ГОТОВО
            console.log('Delete new card');
            this.props.deleteNewCard();
        }


        return (
            <Row className="justify-content-center" style={{ height: '94.5vh' }}>

                <Card className="mt-4 " style={{ width: '80%', height: '70%', color: 'black' }}>
                    <Card.Body>
                        {editMode ?
                            <Form enctype="multipart/form-data">
                                <FormGroup>
                                    <FormControl onChange={this.onChangeCardTitle} ref={this.newTitleElement} value={this.props.cardTitle} aria-describedby></FormControl>
                                </FormGroup>
                            </Form>
                        :
                            <Card.Title >
                                {this.props.cardTitle}
                            </Card.Title>
                        }
                        {editMode ?
                            <Form enctype="multipart/form-data">
                                <FormGroup>
                                    <FormControl onChange={this.onChangeCardText} ref={this.newTextElement} value={this.props.cardText} aria-describedby></FormControl>
                                </FormGroup>
                            </Form>
                        :
                            <Card.Text>
                                {this.props.cardText}
                            </Card.Text>
                        }
                        {editMode &&
                            <FormControl onChange={this.onChangeCardTag} ref={this.newTagElement} value={this.props.cardTag} aria-describedby></FormControl>
                        }
                        


                        <Button onClick={this.editCard} className="mr-3" variant="dark">Edit</Button>

                        {thisCreatePage ?
                            <Button onClick={this.saveNewCard} className="mr-3" variant="dark">Save</Button>
                        :
                            <Button onClick={this.saveCard} className="mr-3" variant="dark">Save</Button>
                        }
                        {thisCreatePage ?
                            <Button onClick={this.deleteNewCard} className="mr-3" variant="dark">Delete</Button>
                        :
                            <Button onClick={this.deleteCard} className="mr-3" variant="dark">Delete</Button>
                        }
                        {!editMode ?
                            <Button onClick={this.editCard} className="mr-3" variant="warning">{cardTag || cardTag == !undefined ? 'Tag: ' + cardTag : '+ Add tag'}</Button>
                            :
                            null
                        }
                    </Card.Body>
                </Card>

            </Row>
        )
    }
}




/*

<Card.Link href='#'>Edit</Card.Link>
<Card.Link href='#'>Save</Card.Link>
<Card.Link href='#'>Delete</Card.Link>

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