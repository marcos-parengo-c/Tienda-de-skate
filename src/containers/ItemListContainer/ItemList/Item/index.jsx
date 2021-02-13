import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount'
import './index.css';

const onAdd = (contador, stock, setContador, setStock, setButtonState, buttonState) => {
    return () => {
        setContador(0);
        setStock(stock - contador);
        console.log("se agregaron " + contador + " productos")
        if (stock - contador === 0) {
            setButtonState(true)
        }
    }
}

const Item = ({ item, is }) => {
    const [initial] = useState(0)
    return (
        <>
            <Col lg={3} md={4} sm={6} className="mb-4">
                <Card bg="dark" text="light" className="h-100">
                    <Link to={`/ItemDetail/${item.name}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Title>${item.price}</Card.Title>
                        </Card.Body>
                    </Link>
                    <Card.Footer>
                        <ItemCount firstStock={item.stock} initial={initial} onAdd={onAdd} />
                    </Card.Footer>
                </Card>
            </Col>
        </>
    )
}

export default Item