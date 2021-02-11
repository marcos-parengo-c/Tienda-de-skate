import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Item from './Item'

const ItemList = ({ itemProp }) => {

    const [item,setItem] = useState([])

    const promesa = new Promise((result, reject) => {
            setTimeout(function(){ result(itemProp)}, 100);			
        })    
        promesa.then(result => {
            setItem(result)
        }, err => {
            console.log(err) 
        }).catch(err => {console.log("atrapado")
                        }).finally(()=>{
        })
    
    return (
        <>
            <Col sm={8}>
                <Row>
                    {item.map((u, i) => { ; return (<Item key={i} is={i} item={u}/>) })}
                </Row>
            </Col>
        </>
    )
}

export default ItemList