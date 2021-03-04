
import React, { useContext, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../../../context/cartContext';
import CheckoutAccordionItem from './CheckoutAccordionItem/Index';
import { Accordion } from 'react-bootstrap';

const CheckoutAccordion = () => {
    const { cart,total } = useContext(CartContext)

    useEffect(() => {
        return () => {
        }
    }, [cart])
    return (
        <Accordion className="border p-1" >
            {cart.map((u, i) => { ; return (<CheckoutAccordionItem key={i} cart={u} i={i} />) })}
            <h4 className="p-3">${total} en total</h4>
        </Accordion>
    )
}

export default CheckoutAccordion