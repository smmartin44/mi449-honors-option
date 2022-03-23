import React from 'react'
import './Header.css'
import { Nav, Navbar, Container } from 'react-bootstrap'
import Link from './components/Link'

function Header () {
  return (
    <div className='header'>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='/'>Coffee Shop</Navbar.Brand>
          <Nav className='me-auto'>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
            <Link href='/menu'>Menu</Link>
            <Link href='/shop'>Shop</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
