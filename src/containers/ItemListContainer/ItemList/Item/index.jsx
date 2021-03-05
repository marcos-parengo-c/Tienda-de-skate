import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount'
import './index.css';

const Item = ({ item, is }) => {
    const [initial] = useState(0)
    return (
        <>
            <Col xl={2} lg={3} md={3} sm={4} className="mb-4">
                <Card bg="dark" text="light" className="h-100">
                    <Link to={`/ItemDetail/${item.id}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Title>${item.price}</Card.Title>
                        </Card.Body>
                    </Link>
                    <Card.Footer>
                       <ItemCount firstStock={item.stock} initial={initial} plus={plus} minus={minus} item={item}/>
                    </Card.Footer>
                </Card>
            </Col>
        </>
    )
}

const minus = (quantity, setQuantity) => {
    return () => {
        if (quantity > 0) { setQuantity(quantity - 1) }
    }
}

const plus = (quantity, stock, setQuantity) => {
    return () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        } else { alert('No podes añadir mas de este producto ya que el stock es de ' + stock) }
    }
}

export default Item