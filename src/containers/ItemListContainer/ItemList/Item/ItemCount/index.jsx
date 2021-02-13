import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const Contador = ({ firstStock, initial, minus, onAdd, plus}) => {
    const [contador, setContador] = useState(initial)
    const [stock, setStock] = useState(firstStock)
    const [buttonState, setButtonState] = useState(false)
    const [display, setDisplay] = useState(true)

    useEffect(() => {
        setStock(firstStock);
        return () => {  
        }
    }, [firstStock])

    return (
        <>
            <p className="card-text">{stock} productos diponibles.</p>
            <div className="d-grid gap-2 col-12 ml-auto mb-2">
                <ButtonGroup aria-label="Basic example" size="sm">
                    <Button variant="outline-light" size="lg" block onClick={minus(contador, setContador)}>-</Button>
                    <InputGroup >
                        <FormControl readOnly value={contador}/>
                    </InputGroup>
                    <Button variant="outline-light" size="lg" block onClick={plus(contador, stock, setContador)}>+</Button>
                </ButtonGroup>
                <Button variant="outline-light" size="lg" block disabled={buttonState}
                    style={{display: display ? 'block' : 'none' }}
                    onClick={onAdd(contador,stock,setContador,setStock,setButtonState,buttonState,display, setDisplay)}>Add to cart
                </Button>
                <Button variant="outline-light" size="lg" block
                    style={{display: !display ? 'block' : 'none' }} 
                    as={Link} to={"/cart"}
                    > Go To Cart
                </Button>
            </div>
        </>
    )
}

export default Contador