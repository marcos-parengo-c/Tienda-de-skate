import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import wheel from './wheel.png';
import CartWidget from "./CartWidget"


const bootnavbar = ({ link }) => {
    return (
        <Navbar bg="dark" expand="md" variant="dark">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={wheel}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                {' '}
            SkateShop
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href={link} target="_blank">Una pagina de skate real</NavDropdown.Item>
                    </NavDropdown>
                </Nav>    
            </Navbar.Collapse>
            <ul class="navbar-nav mr-auto">
                <CartWidget />
            </ul>
        </Navbar>
        
    )
}
export default bootnavbar
