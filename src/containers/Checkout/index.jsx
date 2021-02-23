import React, { useContext,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../../context/cartContext';
import { Button } from 'react-bootstrap';

const Checkout = () => {
    const {clearCart,cart} = useContext(CartContext)
    useEffect(() => {
        
        return () => {
            
        }
    }, [cart])
    return (
        <div className="container">
            <h1>Checkout</h1>
            <Button onClick={clearCart}  variant="outline-dark">Clear Cart</Button>
        </div>
    )
}

export default Checkout