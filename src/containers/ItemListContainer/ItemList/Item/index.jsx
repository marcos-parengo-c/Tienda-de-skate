import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount'
import './index.css';

const onAdd=()=>{
    console.log("algo")
}

const Item = ({ name, price, image, stock }) => {
    const [initial] = useState(0)
    

    return (
        <>
            <Col sm={4}>
                <div className="card text-white bg-dark mb-3" >
                    <Card.Img variant="top" src={image} />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">$ {price}</p>
                        <ItemCount firstStock={stock} initial={initial} onAdd={onAdd}/>
                    </div>
                </div>
            </Col>
        </>
    )
}



export default Item