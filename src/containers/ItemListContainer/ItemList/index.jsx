import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Item from './Item'
import { getFirestore } from '../../../firebase';


const ItemList = ({ id }) => {

    const [item, setItem] = useState([])
    useEffect(() => {
        const baseDeDatos = getFirestore();
        const itemCollection = baseDeDatos.collection('productos');
        if ((typeof id === 'undefined') || id===true ) {
            itemCollection.get().then((value) => {
                let aux = value.docs.map(element => {
                    return ({ ...element.data(), id: element.id })
                })
                setItem(aux)
            })
        } else {
            var query = itemCollection.where("brand", "==", id);
            query.get().then((value) => {
                let aux = value.docs.map(element => {
                    return ({ ...element.data(), id: element.id })
                })
                setItem(aux)
            })
        }
        return () => {
        }
    }, [id])

    return (
        <>
            <Col sm={12}>
                <Row>
                    {item.map((u, i) => { ; return (<Item key={i} is={i} item={u} />) })}
                </Row>
            </Col>
        </>
    )
}

export default ItemList