import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Col, Row, OverlayTrigger, Tooltip, Overlay } from 'react-bootstrap';
import { CartContext } from '../../../context/cartContext';
import { getFirestore } from '../../../firebase';

const CheckoutForm = () => {
    const { cart, clearCart } = useContext(CartContext)
    const provincias = ["Buenos Aires", "Catamarca", "Chaco", "Chubut", "Ciudad Autonoma de Buenos Aires", "Córdoba", "Corrientes", "Entre Ríos", "Formosa", "Jujuy",
        "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis",
        "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego, Antártida e Isla del Atlántico Sur", "Tucumán"]
    const [data] = useState({})
    let history = useHistory();

    useEffect(() => {
        return () => {
        }
    }, [cart])

    const handleChange = (event) => {
        data[event.target.id] = event.target.value
    }

    const handleSubmit = (event) => {
        console.log(cart.length)
        if (cart.length !== 0) {
            data.items = cart;
            const baseDeDatos = getFirestore();
            const comprasCollection = baseDeDatos.collection('compras');
            comprasCollection.add(data)
                .then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);
                    alert("Tu compra se proceso con exito, pronto nos comunicaremos con vos para que realices el pago")
                    history.push("/");
                    clearCart();
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });
            event.preventDefault();
            event.stopPropagation();
        } else {
            alert("No tienes ningun elemento agregado al carrito")
            history.push("/");
        }
    };
    return (
        <Form className="border p-3" onSubmit={handleSubmit}>
            <Row>
                <Form.Group as={Col} controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" required onChange={handleChange} />
                    <Form.Text className="text-muted">ejemplo@ejemplo.com</Form.Text>
                </Form.Group>
                <Form.Group as={Col} controlId="formNameLastName">
                    <Form.Label>Nombre y Apellido</Form.Label>
                    <Form.Control required onChange={handleChange} />
                    <Form.Text className="text-muted">Nombre y Apellido</Form.Text>
                </Form.Group>
                <Form.Group as={Col} controlId="formPhone">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control required onChange={handleChange} />
                    <Form.Text className="text-muted">+XX X XX XXXX-XXXX</Form.Text>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId="formAddress">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control required onChange={handleChange} />
                    <Form.Text className="text-muted">Calle XXXX</Form.Text>
                </Form.Group>
                <Form.Group as={Col} controlId="formAddressData">
                    <Form.Label>Piso, numero de departamento</Form.Label>
                    <Form.Control required onChange={handleChange} />
                    <Form.Text className="text-muted">X° N° XX</Form.Text>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId="formCity">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control required onChange={handleChange} />
                    <Form.Text className="text-muted">Nombre de tu Ciudad</Form.Text>
                </Form.Group>
                <Form.Group as={Col} controlId="formProvince">
                    <Form.Label>Provincia</Form.Label>
                    <Form.Control as="select" onChange={handleChange} required>
                        {provincias.map((element, i) => { return <option key={i}>{element}</option> })}
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="FormPostalCode">
                    <Form.Label>Codigo postal</Form.Label>
                    <Form.Control required onChange={handleChange} />
                    <Form.Text className="text-muted">xxxx</Form.Text>
                </Form.Group>
            </Row>
            <Form.Group id="formTyC" className="mt-3">
                <Form.Check type="checkbox" label="Acepto los terminos y condiciones" required />
            </Form.Group>
            <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip-disabled">El carrito debe tener como minimo un articulo!</Tooltip>}>
                <span className="d-inline-block">
                    <Button variant="outline-dark" type="submit" className="mt-3" disabled={cart.length === 0 ? true : false}>Submit</Button>
                </span>
            </OverlayTrigger>
        </Form>
    )
}

export default CheckoutForm