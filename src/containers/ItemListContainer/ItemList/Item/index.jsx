import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Contador from './Contador'
import './index.css';

const Item = ({ name, price, image, stock }) => {
    return (
        <>
            <Col sm={4}>
                <div className="card text-white bg-dark mb-3" >
                    <Card.Img variant="top" src={image} />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">$ {price}</p>
                        <Contador firstStock={stock} />
                    </div>

                </div>
            </Col>
        </>
    )
}

export default Item