import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import Info from './Info'
import { productContext } from '../../context/productContext';
import { CartContext } from '../../context/cartContext';

const ItemDetail = () => {
    const {cart} = useContext(CartContext)
    const itemCntxt = useContext(productContext)
    const [FullItem] = useState(itemCntxt) 
    const [itemRecibido, setItemRecibido] = useState({})
    const [itemARend, setItemARend] = useState({})
    
    const { id } = useParams();
    useEffect(() => {
        setItemARend(FullItem.find(FullItem => FullItem.name === id))
        getItems(itemARend,setItemRecibido)
        return () => {
        }
    }, [id,FullItem,itemARend,cart])

    return (
        <div className="container">
            <Row>
                <Col sm={6}>
                    <Carousel prevLabel="" nextLabel="" fade={true} className="border border-dark" >
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
                <Info item={itemRecibido} />
            </Row>
        </div>
    )
}

const getItems = (item, setItemRecibido) => {
    const promesa = new Promise((result, reject) => {
        setTimeout(function () { result(item) }, 500);
    })
    promesa.then(result => {
        setItemRecibido(result)
    }, err => {
        console.log(err)
    }).catch(err => {
        console.log("atrapado")
    }).finally(() => {
    })
}

export default ItemDetail