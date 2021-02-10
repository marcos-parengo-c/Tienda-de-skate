import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const Contador = ({ firstStock, initial , onAdd}) => {
    const [contador, setContador] = useState(initial)
    const [stock, setStock] = useState(firstStock)
    const [buttonState, setButtonState] = useState(false)
    useEffect(() => {
        setStock(firstStock);
        return () => {
            console.log("Will Unmount")
        }
    }, [firstStock])
    console.log("Will Render")
    return (
        <>
            <p className="card-text">{stock} productos diponibles.</p>
            <div className="d-grid gap-2 col-12 ml-auto">
                <ButtonGroup aria-label="Basic example" size="sm">
                    <Button variant="outline-light" size="lg" block onClick={() => {
                        if (contador > 0) { setContador(contador - 1) }
                    }}>-</Button>
                    <InputGroup >
                        <FormControl
                            value={contador}
                        />
                    </InputGroup>
                    <Button variant="outline-light" size="lg" block onClick={() => {
                        if (contador < stock) {
                            setContador(contador + 1)
                        } else { alert('No podes añadir mas de este producto ya que el stock es de ' + stock) }
                    }}>+</Button>
                </ButtonGroup>
                <Button variant="outline-light" size="lg" block disabled={buttonState}
                    onClick={onAdd(contador,stock,setContador,setStock,setButtonState,buttonState)}>Add to cart
                </Button>
            </div>
        </>
    )
}

export default Contador