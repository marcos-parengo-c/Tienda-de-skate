import React, { useState } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemList from './ItemList'


const ItemListContainer = ({ children, greeting }) => {

    const [items] = useState([
        {name:"Zapatilla",price:2000,image:"images/Zapatilla.jpg",stock:10},
        {name:"Zapatilla",price:2000,image:"images/Zapatilla.jpg",stock:20},
        {name:"Buzo",price:3000,image:"images/Buzo.jpg",stock:5},
        {name:"Pantalon",price:4000,image:"images/Pantalon.jpg",stock:2}])

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