import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Item from './Item'
import CardDeck from 'react-bootstrap/CardDeck';

const ItemList = ({ itemProp }) => {

    const [item] = useState(itemProp)
    console.log(item)
    return (
        <>
            <Col sm={8}>
                <Row>
                    {item.map((u, i) => { ; return (<Item name={u.name} price={u.price} image={u.image} />) })}
                </Row>
            </Col>
        </>
    )
}

export default ItemList