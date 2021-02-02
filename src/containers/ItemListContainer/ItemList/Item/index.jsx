import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Item = ({ name, price, image }) => {

    

    return (
        <>
            <Col sm={4}>
                <div className="card"> 
                    <Card.Img variant="top" src={image} />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">$ {price}</p>    
                    </div>
                    
                </div>
            </Col>
        </>
    )
}

export default Item