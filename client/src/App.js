import './App.css';
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar bg='success' sticky='top' variant='dark'>
          <Container>
            <Navbar.Brand href='#home'>📝Note Taker</Navbar.Brand>
            <Switch>
              <Nav className='me-auto'>
                <Nav.Link href='#home'>Home</Nav.Link>
                <Nav.Link href='/notes'>Notes</Nav.Link>
              </Nav>
            </Switch>
          </Container>
        </Navbar>
        <Container>
          <div className='jumbotron text-center'>
            <h1 className='display-4'>
              Note Taker{' '}
              <span role='img' aria-label='Memo'>
                📝
              </span>
            </h1>
            <h4 className='mt-4'>Take notes with Express</h4>
            <a className='btn btn-dark btn-lg mt-4' href='/notes' role='button'>
              Get Started
            </a>
          </div>
        </Container>
      </div>
    </Router>
  );
}

export default App;
