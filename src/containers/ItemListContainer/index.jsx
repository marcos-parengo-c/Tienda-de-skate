import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Row from 'react-bootstrap/Row';
import ItemList from './ItemList'
import { productContext } from '../../context/productContext';

const ItemListContainer = ({ children, greeting, listaDeItems }) => {

    const { id } = useParams();
    const itemCntxt = useContext(productContext)
    const [items, setItems] = useState(itemCntxt)

    useEffect(() => {
        if (typeof id === 'undefined') {
            setItems(itemCntxt)
        } else {
            setItems(itemCntxt.filter(items => items.brand === id));
        } return () => {
        }
    }, [id,itemCntxt])

    return (
        <div className="container">
            <Row>
                <ItemList itemProp={items} />
            </Row>
        </div>
    )
}

export default ItemListContainer