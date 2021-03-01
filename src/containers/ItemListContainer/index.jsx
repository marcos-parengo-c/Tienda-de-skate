import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Row from 'react-bootstrap/Row';
import ItemList from './ItemList'
// import { getFirestore } from '../../firebase';

const ItemListContainer = ({ children, greeting, listaDeItems }) => {

    const { id } = useParams();
    const [categoryId, setcategoryId] = useState()

    useEffect(() => {
        if (typeof id === 'undefined') {
            setcategoryId(true)
        } else {
            setcategoryId(id);
        }
        return () => {
        }
    }, [id])
    return (
        <div className="container">
            <Row>
                <ItemList id={categoryId} />
            </Row>
        </div>
    )
}
export default ItemListContainer