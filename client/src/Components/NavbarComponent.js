import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg='success' sticky='top' variant='dark'>
    <Container>
      <Navbar.Brand href='/Home'>📝Note Taker</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='me-auto'>
          <Nav.Link href='/notes'>Notes</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarComponent
