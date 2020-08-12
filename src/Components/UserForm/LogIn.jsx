import React, { Component } from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'
import './LogIn.css';

export default class LogIn extends React.Component {
    render() {


        this.emailFormElement = React.createRef();
        this.passwordFormElement = React.createRef();
        

        this.changeEmail = () => {
            let email = this.emailFormElement.current.value;
            this.props.changeEmailValue(email);
        }
        this.changePassword = () => {
            let password = this.passwordFormElement.current.value;
            this.props.changePasswordValue(password);
        }

        this.sendForm = () => {
            let email = this.emailFormElement.current.value;
            let password = this.passwordFormElement.current.value;
            let userForm = {email, password};
            this.props.sendUserForm(userForm);
        }

        this.getRegistrationPage = () => {
            this.props.getRegPage();
        }

        //             border border-warning rounded


        return (

            <Col xs={7} className="m-auto">
                <Form className="mt-4 bg-white border-form-LogIn">
                    <Form.Group sm={2} controlId="formBasicEmail">
                        <Col xs={6}  className="m-auto mt-5">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={this.changeEmail} ref={this.emailFormElement} value={this.props.email} />
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Col xs={6} className="m-auto">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={this.changePassword} ref={this.passwordFormElement} value={this.props.password} />
                        </Col>
                    </Form.Group>
                    <Col xs={6} className="m-auto">
                    <Button onClick={this.sendForm} variant="primary" className="m-auto">
                        Log in
                    </Button>
                    <Button onClick={this.getRegistrationPage} variant="warning" className="ml-2">
                        Registration
                    </Button>
                    </Col>
                </Form>
            </Col>

        )
    }
}