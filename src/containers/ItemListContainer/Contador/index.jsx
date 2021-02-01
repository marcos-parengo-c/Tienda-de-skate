import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contador = ({ firstStock }) => {
    const [contador, setContador] = useState(0)
    const [stock, setStock] = useState(firstStock)
    
    return (
                <Col>
                    <div className="card">
                        <div class="card-body">
                            <div class="d-grid gap-2 col-6 ml-auto">
                                <div class="d-flex justify-content-start">
                                    <button type="button" className="btn btn-primary" onClick={() => { if (contador > 0) { setContador(contador - 1) } }}>-</button>
                                    <input type="number" className="num" value={contador} />
                                    <button type="button" className="btn btn-primary" onClick={() => {
                                         if(contador<stock){
                                             setContador(contador + 1)
                                            }else{alert('No podes añadir mas que estos elementos ya que el stock es de '+stock)}
                                             }}>+</button>
                                </div>
                                <button type="button" className="btn btn-primary"
                                    onClick={() => {
                                            setContador(0);
                                            setStock(stock-contador)
                                    }}>Add to cart
                            </button>
                            </div>
                        </div>
                    </div>
                </Col>
    )
}

export default Contador