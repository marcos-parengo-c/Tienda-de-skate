import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemList from './ItemList'


const ItemListContainer = ({ children, greeting,listaDeItems }) => {

    const [items] = useState(listaDeItems)

    return (
        <div className="container">
            <Row>
                <ItemList itemProp={items} />
                <Col sm={4}>
                    <Col sm={12}>
                        <h1>{greeting}</h1>
                    </Col>
                </Col>
            </Row>
        </div>
    )
}

export default ItemListContainer