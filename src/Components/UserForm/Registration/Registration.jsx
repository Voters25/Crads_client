import React, { Component } from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap';

export default class Registration extends React.Component {
    render() {

        this.emailFormElement = React.createRef();
        this.passwordFormElement = React.createRef();
        this.passwordTwoFormElement = React.createRef();


        this.changeEmail = () => {
            let email = this.emailFormElement.current.value;
            this.props.changeEmailValue(email);
        }
        this.changePassword = () => {
            let password = this.passwordFormElement.current.value;
            this.props.changePasswordValue(password);
        }
        this.changePasswordTwo = () => {
            let passwordTwo = this.passwordTwoFormElement.current.value;
            this.props.changePasswordTwolValue(passwordTwo);
        }



        this.sendForm = () => {
            let email = this.emailFormElement.current.value;
            let password = this.passwordFormElement.current.value;
            let passwordTwo = this.passwordTwoFormElement.current.value;
            let userForm = {email, password, passwordTwo};
            this.props.sendUserForm(userForm);
        }

        return (

            <Col xs={7} className="m-auto">
                <Form className="mt-4 bg-white border-form-LogIn">
                    <Form.Group sm={2} controlId="formBasicEmail">
                        <Col xs={6}  className="m-auto mt-5">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={this.changeEmail} value={this.props.email} ref={this.emailFormElement} />
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Col xs={6} className="m-auto">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={this.changePassword} value={this.props.password} ref={this.passwordFormElement} />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Col xs={6} className="m-auto">
                            <Form.Label> Repeat password</Form.Label>
                            <Form.Control type="password" placeholder="Repeat password" onChange={this.changePasswordTwo} value={this.props.passwordTwo} ref={this.passwordTwoFormElement} />
                            <Form.Text className="text-muted">
                                Very secret
                            </Form.Text>
                        </Col>
                    </Form.Group>
                    <Col xs={6} className="m-auto">
                    <Button onClick={this.sendForm} variant="primary" className="m-auto">
                        Registration
                    </Button>
                    </Col>
                </Form>
            </Col>

        )
    }
}