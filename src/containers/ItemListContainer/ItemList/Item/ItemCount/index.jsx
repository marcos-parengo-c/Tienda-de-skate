import React, { useState,useEffect,useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { CartContext } from '../../../../../context/cartContext';

const ItemCount = ({ initial, plus, minus,item}) => {
    const {addItem,isInCart,cart} = useContext(CartContext)
    const [quantity, setQuantity] = useState(initial)
    const [stock, setStock] = useState(item.stock)
    const [display, setDisplay] = useState(false)

    useEffect(() => {   
        if(isInCart(item)[0]===true){
            setStock((item.stock)-cart[isInCart(item)[1]].Cantidad)
            setDisplay(true)
        }else{
            setStock(item.stock);
            setDisplay(false)
        }
        return () => {  
        }
    }, [item,stock,cart,isInCart])
    return (
        <>
            <p className="card-text">{stock} productos diponibles.</p>
            <div className="d-grid gap-2 col-12 ml-auto mb-2">
                <ButtonGroup aria-label="Basic example" size="sm">
                    <Button variant="outline-light" size="lg" block onClick={minus(quantity,setQuantity)}>-</Button>
                    <InputGroup >
                        <FormControl readOnly value={quantity}/>
                    </InputGroup>
                    <Button variant="outline-light" size="lg" block onClick={plus(quantity,stock,setQuantity)}>+</Button>
                </ButtonGroup>
                <Button variant="outline-light" size="lg" block disabled={stock===0 || quantity===0 ? true : false}
                    onClick={addItem(item,quantity,setQuantity,stock,setStock,setDisplay,display)}>Add to cart
                </Button>
            </div>
        </>
    )
}

export default ItemCount