import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../../context/cartContext';
import { Button } from 'react-bootstrap';

const Cart = () => {
    const {clearCart} = useContext(CartContext)
    return (
        <div className="container">
            <h1>Carrito</h1>
            <Button onClick={clearCart}  variant="outline-dark">Clear Cart</Button>
        </div>
    )
}

export default Cart