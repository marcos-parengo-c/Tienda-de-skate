import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import cart from "./cart.png"

const CartWidget = () => {
    return (
        <Nav.Link as={Link} to={"/cart"}>
            <img
                alt=""
                src={cart}
                width="30"
                height="30"
                className="d-inline-block align-top" />
        </Nav.Link>
    )
}
export default CartWidget
