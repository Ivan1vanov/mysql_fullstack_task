import React from 'react'
import {Navbar,Container, Nav, NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavPanel = () => {

    const userInfo = localStorage.getItem('profile')
    const user = userInfo !== null ? JSON.parse(userInfo).user : ''

  return (
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand><Link to='/'>Some APP</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link> <Link to='/auth'>Auth</Link></Nav.Link>
        {user && (
            <Nav.Link href="#">Hello, {user?.userName}!</Nav.Link>
                
           
        )}
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavPanel