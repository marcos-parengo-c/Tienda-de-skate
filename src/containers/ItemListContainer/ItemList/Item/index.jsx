import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount'
import './index.css';

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

const Item = ({ item, is }) => {
    const [initial] = useState(0)
    return (
        <>
            <Col xl={2} lg={3} md={3} sm={4} className="mb-4">
                <Card bg="dark" text="light" className="h-100">
                    <Link to={`/ItemDetail/${item.name}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Title>${item.price}</Card.Title>
                        </Card.Body>
                    </Link>
                    <Card.Footer>
                       <ItemCount firstStock={item.stock} initial={initial} onAdd={onAdd} plus={plus} minus={minus}/>
                    </Card.Footer>
                </Card>
            </Col>
        </>
    )
}

export default Item