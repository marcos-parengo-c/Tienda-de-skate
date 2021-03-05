import React, { useContext,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../../context/cartContext';
import CheckoutForm from './CheckoutForm';
import CheckoutAccordion from './CheckoutAccordion';


const Checkout = () => {
    const {cart,total} = useContext(CartContext)
    useEffect(() => {
        return () => {
        }
    }, [cart,total])
    return (
        <div className="container">
            <CheckoutForm/>
            <CheckoutAccordion />
        </div>
    )
}

export default Checkout