import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
function NavbarComponent() {
  return (
    <Navbar bg='success' sticky='top' variant='dark'>
    <Container>
      <Navbar.Brand href='#home'>📝Note Taker</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='/notes'>Notes</Nav.Link>
        </Nav>
    </Container>
  </Navbar>
  )
}

export default NavbarComponent
