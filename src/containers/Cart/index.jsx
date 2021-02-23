import React, { useContext,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../../context/cartContext';
import { Button } from 'react-bootstrap';

const Cart = () => {
    const {clearCart,cart} = useContext(CartContext)
    useEffect(() => {
        
        return () => {
            
        }
    }, [cart])
    return (
        <div className="container">
            <h1>Carrito</h1>
            <Button onClick={clearCart}  variant="outline-dark">Clear Cart</Button>
        </div>
    )
}

export default Cart