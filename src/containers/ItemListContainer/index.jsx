import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemList from './ItemList'


const ItemListContainer = ({ children, greeting }) => {

    const [items] = useState([
        {
            "name": "Ruedas Bones Original Formula 54mm",
            "price": 5000,
            "stock": 10,
            "image": "images/products/Rueda.jpg",
            "defaultStock": 10,
            "brand": "Bones",
        },
        {
            "name": "Ruedas Bones OF New Ground 52mm",
            "price": 3711,
            "stock": 10,
            "image": "images/products/Rueda2.jpg",
            "defaultStock": 10,
            "brand": "Bones",
        },
        {
            "name": "Ruedas Spitfire Afterburner 54mm",
            "price": 2675,
            "stock": 10,
            "image": "images/products/Rueda3.jpg",
            "defaultStock": 10,
            "brand": "Spitfire",
        },
        {
            "name": "Lija micro perforada Grizzly OG black",
            "price": 1000,
            "stock": 10,
            "image": "images/products/Lija.jpg",
            "defaultStock": 10,
            "brand": "Grizzly",
        },
        {
            "name": "Lija Grizzly Tie-Dye",
            "price": 867,
            "stock": 10,
            "image": "images/products/Lija2.jpg",
            "defaultStock": 10,
            "brand": "Grizzly",
        },
        {
            "name": "Lija Grizzly Palm Trees",
            "price": 867,
            "stock": 10,
            "image": "images/products/Lija3.jpg",
            "defaultStock": 10,
            "brand": "Grizzly",
        },
        {
            "name": "Tabla element sections",
            "price": 5000,
            "stock": 10,
            "image": "images/products/Tabla.jpg",
            "defaultStock": 10,
            "brand": "Element",
        },
        {
            "name": "Tabla Creature Pappo Blues",
            "price": 5000,
            "stock": 10,
            "image": "images/products/Tabla2.jpg",
            "defaultStock": 10,
            "brand": "Element",
        },
        {
            "name": "Tabla Check Skate A.C.A.B.",
            "price": 1200,
            "stock": 10,
            "image": "images/products/Tabla3.jpg",
            "defaultStock": 10,
            "brand": "Element",
        },
        {
            "name": "Rulemanes Red Bones",
            "price": 4000,
            "stock": 8,
            "image": "images/products/Rulemanes.jpg",
            "defaultStock": 10,
            "brand": "RedBones",
        },
        {
            "name": "BAKER 4 LIFE hollow",
            "price": 5000,
            "stock": 20,
            "image": "images/products/Truck.jpg",
            "defaultStock": 10,
            "brand": "Independent",
        }])

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