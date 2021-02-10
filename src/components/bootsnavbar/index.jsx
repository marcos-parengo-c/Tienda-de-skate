import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./CartWidget"

const bootnavbar = ({ linkTo }) => {
    return (
        <Navbar bg="dark" expand="md" variant="dark" style={{ paddingLeft: "30px" }}>
            <Link to={"/"} style={{ textDecoration: 'none' }}>
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
                    <Link to={"./"}>
                        <Nav.Link href="#a">Home</Nav.Link>
                    </Link>
                    <Link to={"./itemDetail"}>
                        <Nav.Link href="#a">itemDetail</Nav.Link>
                    </Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <Link to={"./itemDetail"}>
                            <NavDropdown.Item href="#a">itemDetail</NavDropdown.Item>
                        </Link>
                        <Link to={"./itemDetail"}>
                            <NavDropdown.Item href="#a">itemDetail</NavDropdown.Item>
                        </Link>
                        <Link to={"./itemDetail"}>
                            <NavDropdown.Item href="#a">itemDetail</NavDropdown.Item>
                        </Link>
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
