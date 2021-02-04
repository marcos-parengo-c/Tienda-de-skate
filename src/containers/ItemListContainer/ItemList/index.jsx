import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Item from './Item'

const ItemList = ({ itemProp }) => {

    const [item,setItem] = useState([])

	const promesa = new Promise((result, reject) => {
		setTimeout(function(){ result(itemProp)}, 3000);		
	})
    
	promesa.then(result => {
        console.log(result) 
        setItem(result)
	}, err => {
		console.log(err) 
	}).catch(err => {console.log("atrapado")
					}).finally(()=>{
		console.log("finalizado")
    })
    
    
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