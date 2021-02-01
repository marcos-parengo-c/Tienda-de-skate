import React, { useState } from 'react';
import './index.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contador from './Contador'


const ItemListContainer = ({ children, greeting }) => {

    const [producto, setProducto] = useState(0)

    return (
        <div className="container">
            <Row>
                <Contador firstStock={10} />
                <Col>
                    <h1>{greeting}</h1>
                </Col>
                <Col>
                    <div className="card">
                        <div class="card-body">
                            <h5 className="card-title">Carrito que no funciona xd</h5>
                            <p className="card-text">{producto} productos.</p>
                            <a href="#" class="btn btn-primary" onClick={() => { setProducto(0) }}>Eliminar carrito</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ItemListContainer