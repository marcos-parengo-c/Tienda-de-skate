import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartModal from './CartModal'

const Cart = () => {
    return (
        <div className="container">
            <h1>Carrito</h1>
            <CartModal />
        </div>
    )
}

export default Cart