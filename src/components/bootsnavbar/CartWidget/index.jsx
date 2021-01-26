import React from 'react'
import Nav from 'react-bootstrap/Nav';
import cart from "./cart.png"

const CartWidget = () => {
    return (
        <Nav.Link href="#cart">
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
