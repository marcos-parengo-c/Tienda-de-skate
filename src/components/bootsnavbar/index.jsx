import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./CartWidget"

const bootnavbar = ({ linkTo }) => {
    return (
        <Navbar bg="dark" expand="md" variant="dark" style={{ paddingLeft: "30px" }}>
            <Navbar.Brand as={Link} to={"/"}>
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
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                    <NavDropdown title="Categories" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to={"/category/Bones"}>Bones</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/category/Spitfire"}>Spitfire</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/category/Grizzly"}>Grizzly</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/category/Element"}>Element</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/category/RedBones"}>RedBones</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/category/Independent"}>Independent</NavDropdown.Item>
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
