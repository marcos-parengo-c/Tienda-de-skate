import React, { useState } from 'react';
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

const Item = ({ item }) => {
    const [initial] = useState(0)

    return (
        <>
            <Col lg={3} md={4} sm={6} style={{marginBottom:"25px"}}>
                <div className="card text-white bg-dark mb-3 h-100">
                    <Card.Img variant="top" src={item.image} />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">$ {item.price}</p>
                        <ItemCount firstStock={item.stock} initial={initial} onAdd={onAdd} />
                    </div>
                </div>
            </Col>
        </>
    )
}

export default Item