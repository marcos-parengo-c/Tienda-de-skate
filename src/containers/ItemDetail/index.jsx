import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import Info from './Info'
import { getFirestore } from '../../firebase';

const ItemDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState({})

    useEffect(() => {
        const baseDeDatos = getFirestore();
        var docRef = baseDeDatos.collection("productos").doc(id);
        docRef.get().then((doc) => {
            if (doc.exists) {
                setItem({...doc.data(), id: doc.id});
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
        return () => {
        }
    }, [id])

    return (
        <div className="container">
            <Row>
                <Col sm={6}>
                    <Carousel prevLabel="" nextLabel="" fade={true} className="border border-dark" >
                        <Carousel.Item>
                            <Image src={item.image} alt="asdad" thumbnail className="d-block w-100 border-0" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={item.image1} thumbnail className="d-block w-100 border-0" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={item.image2} thumbnail className="d-block w-100 border-0" />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Info item={item} />
            </Row>
        </div>
    )
}

export default ItemDetail