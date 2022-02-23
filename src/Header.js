import React from 'react'
import './Header.css';
import { Nav, Navbar, Container} from 'react-bootstrap';

function Header() {
  return (
    <div className="header">
      <Navbar bg="light" variant="light">
        <Container>
            <Navbar.Brand href="/">Coffee Shop</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link href="/menu">Menu</Nav.Link>
                    <Nav.Link href="/shop">Shop</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header