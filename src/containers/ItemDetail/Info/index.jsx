import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col'; 
import Card from 'react-bootstrap/Card'; 
import ItemCount from './ItemCount'

const onAdd = (contador, stock, setContador, setStock, setButtonState, buttonState,display, setDisplay) => {
    return () => {
        setContador(0);
        setStock(stock - contador);
        console.log("se agregaron " + contador + " productos")
        if (stock - contador === 0) {
            setButtonState(true)
            setDisplay(false)
        }
    }
}

const minus = (contador, setContador) => {
    return () => {
        if (contador > 0) { setContador(contador - 1) }
    }
}

const plus = (contador, stock, setContador) => {
    return () => {
        if (contador < stock) {
            setContador(contador + 1)
        } else { alert('No podes añadir mas de este producto ya que el stock es de ' + stock) }
    }
}

const Info = ({ item}) => {
    const [itemRecibido, setItemRecibido] = useState(item)

    
    useEffect(() => {
        setItemRecibido(item);
        return () => {
        }
    }, [item])
    
    return (
        <Col sm={6} >
            <Card bg="dark" text="light" className="h-100"> 
                <Card.Body>
                    <Card.Title>{itemRecibido.name}</Card.Title>
                    <Card.Title>${itemRecibido.price}</Card.Title>
                    <Card.Text>{itemRecibido.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <ItemCount firstStock={itemRecibido.stock} initial={0} onAdd={onAdd} plus={plus} minus={minus}/>
                </Card.Footer>
            </Card>   
        </Col>      
    )
}

export default Info