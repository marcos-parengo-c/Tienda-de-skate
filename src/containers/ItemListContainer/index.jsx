import React, { useState } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Contador from './Contador'
import ItemList from './ItemList'


const ItemListContainer = ({ children, greeting }) => {

    const [producto, setProducto] = useState(0)
    const [items] = useState([{name:"Zapatilla",price:2000,image:"images/Zapatilla.jpg"},{name:"Buzo",price:3000,image:"images/Buzo.jpg"},{name:"Pantalon",price:4000,image:"images/Pantalon.jpg"}])

    return (
        <div className="container">
            <Row>
                <ItemList itemProp={items} />
                <Col sm={4}>
                    <Contador firstStock={10} />
                    <Col sm={12}>
                        <h1>{greeting}</h1>
                    </Col>
                </Col>
            </Row>
        </div>
    )
}

export default ItemListContainer