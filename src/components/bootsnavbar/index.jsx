import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./CartWidget"

const bootnavbar = ({ linkTo }) => {
    return (
        <Navbar bg="dark" expand="md" variant="dark" style={{ paddingLeft: "30px" }}>
            <Link to={"/"}>
                <Navbar.Brand href="#home" >
                    <img
                        alt=""
                        src="/images/banner.png"
                        width="60"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    {' '}
                SkateShop
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link>itemDetail</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <Link to={"./itemDetail"}>
                            <NavDropdown.Item href="#action/3.1">itemDetail</NavDropdown.Item>
                        </Link>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href={linkTo} target="_blank">Una pagina de skate real</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            <ul className="navbar-nav mr-auto">
                <CartWidget />
            </ul>
        </Navbar>

    )
}
export default bootnavbar
