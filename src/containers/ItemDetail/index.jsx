import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const ItemDetail = ({ children, greeting }) => {

    return (
        <div className="container">
            <Row>
                <Col sm={4}>
                    <Image src="images/products/Rueda.jpg" thumbnail />
                </Col>
                <Col sm={8}>
                    <h1>"Hola"</h1>
                </Col>
            </Row>
        </div>
    )
}

export default ItemDetail