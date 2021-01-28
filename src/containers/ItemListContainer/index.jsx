import React, { useState } from 'react';
import './index.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer = ({ children, greeting }) => {
    const [contador, setContador] = useState(0)
    const [producto, setProducto] = useState(0)

    return (
        <div className="container">
            <Row>
                <Col>
                    <div className="card">
                        <div class="card-body">
                            <div class="d-grid gap-2 col-6 ml-auto">
                                <div class="d-flex justify-content-start">
                                    <button type="button" className="btn btn-primary" onClick={() => { if (contador > 0) { setContador(contador - 1) } }}>-</button>
                                    <input type="number" className="num" value={contador} />
                                    <button type="button" className="btn btn-primary" onClick={() => { setContador(contador + 1) }}>+</button>
                                </div>
                                <button type="button" className="btn btn-primary"
                                    onClick={() => {
                                        setProducto(contador + producto);
                                        setContador(0);
                                    }}>Add to cart
                            </button>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <h1>{greeting}</h1>
                </Col>
                <Col>
                    <div className="card">
                        <div class="card-body">
                            <h5 className="card-title">Carrito</h5>
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