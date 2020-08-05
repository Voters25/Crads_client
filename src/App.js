import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import NavBarContainer from './Components/NavBar/NavBarContainer';
import CardListContainer from './Components/CardsList/CardListContainer';
import CardEditContainer from './Components/Card/CardEditContainer';

//import { Grid, Row, Col } from 'react-bootstrap';
//import * as BootstrapComponents from 'react-bootstrap';



function App() {
  return (
    <div className="Wripper"> 
      <NavBarContainer />
      <div className="h-1000"></div>
      <Container fluid>
        <Row fluid>
          <Col>
              <Route exact path='/' component={CardListContainer} />
              <Route path='/card' component={CardEditContainer} />
          </Col>
          {/*<Col md className="Test"></Col>*/}
        </Row>
      </Container>
    </div>
  );
}

export default App;



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