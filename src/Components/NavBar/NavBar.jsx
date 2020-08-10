import React, { Component } from 'react'
import { Button, Navbar, Container, Nav, Form, FormControl, Row, Col } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';



export default class NavBar extends React.Component {
    render() {

        this.getAllCards = () => {
            this.props.getAllCard();
        }

        return (

            <Navbar collapseOnSelect expand="md" bg="" style={{ background: '#ff9800' }} >
                <Container>
                    <NavbarToggle aria-controls="responsive-navbar-nav" />
                    <NavbarCollapse id="responsive-navbar-nav" >
                        <Button onClick={this.getAllCards} variant="outline-dark">All cards</Button>
                        {/*<Button variant="outline-info">Refresh</Button>*/}
                    </NavbarCollapse>
                </Container>
            </Navbar>
        )
    }
}




/*

<Navbar collapseOnSelect expand="md" bg="dark" variant="dark" >
                <Container>
                    <NavbarToggle aria-controls="responsive-navbar-nav" />
                    <NavbarCollapse id="responsive-navbar-nav" >
                        <Nav className="mr-auto">

                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </NavbarCollapse>
                </Container>
            </Navbar>

*/