import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import Info from './Info'

const getItems = (item,setItemRecibido) =>  {
    const promesa = new Promise((result, reject) => {
        setTimeout(function(){ result(item)}, 3000);			
    })    
    promesa.then(result => {
        setItemRecibido(result)
    }, err => {
        console.log(err) 
    }).catch(err => {console.log("atrapado")
                    }).finally(()=>{
    })
}

const ItemDetail = () => {
    const [item] = useState({
        "name": "Tabla Check Skate A.C.A.B.",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit euismod mauris eget luctus. Maecenas pretium hendrerit lectus, eget interdum magna ullamcorper id. Integer molestie nisl massa, at vehicula lacus consectetur sed. Proin in urna in est lacinia venenatis. Vestibulum vulputate porttitor libero vel pellentesque. Vivamus suscipit mauris arcu, dapibus pulvinar felis accumsan in. Donec ultrices dui sit amet tellus euismod suscipit. Pellentesque eget malesuada sapien. Vivamus hendrerit mi nec laoreet gravida. Nam suscipit augue urna, vel faucibus sem eleifend et. Etiam euismod lobortis tellus, at maximus eros vehicula ut. Fusce tincidunt lobortis massa vitae faucibus. Integer nec fermentum lorem.",
        "price": 1200,
        "stock": 10,
        "image": "images/products/Tabla.jpg",
        "image1": "images/products/Tabla2.jpg",
        "image2": "images/products/Tabla3.jpg",
        "defaultStock": 10,
        "brand": "Element",
    })

    const [itemRecibido,setItemRecibido] = useState({})

    getItems(item,setItemRecibido)

    return (
        <div className="container">
            <Row>
                <Col sm={6}>
                    <Carousel prevLabel="" nextLabel="" fade="true" className="border border-dark" >
                        <Carousel.Item>
                            <Image src={itemRecibido.image} thumbnail className="d-block w-100 border-0" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={itemRecibido.image1} thumbnail className="d-block w-100 border-0" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={itemRecibido.image2} thumbnail className="d-block w-100 border-0" />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Info item={itemRecibido}/>
            </Row>
        </div>
    )
}

export default ItemDetail