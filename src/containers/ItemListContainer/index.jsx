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
        //Parte fireBase
        // const baseDeDatos = getFirestore(); 
        // // Guardamos la referencia de la coleccion que queremos tomar
        // const itemCollection = baseDeDatos.collection('productos'); 
        // // Tomando los datos
        // itemCollection.get().then((value) => {
        //     value.docs.forEach(element => { console.log({...element.data(), id:element.id})})
        // })
        //Fin Parte Firebase

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