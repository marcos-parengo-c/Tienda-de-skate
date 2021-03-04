import React, { useContext, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { CartContext } from '../../../context/cartContext';

const CheckoutForm = () => {
    const { cart } = useContext(CartContext)
    const provincias = ["Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa", "Jujuy",
        "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis",
        "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego, Antártida e Isla del Atlántico Sur", "Tucumán"]
    useEffect(() => {
        return () => {
        }
    }, [cart])
    return (
        <Form>
            <Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email"/>
                    <Form.Text className="text-muted">ejemplo@ejemplo.com</Form.Text>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Nombre y Apellido</Form.Label>
                    <Form.Control />
                    <Form.Text className="text-muted">Nombre y Apellido</Form.Text>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPhone">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control />
                    <Form.Text className="text-muted">+XX X XX XXXX-XXXX</Form.Text>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId="formGridAddress1">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control />
                    <Form.Text className="text-muted">Calle XXXX</Form.Text>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridAddress2">
                    <Form.Label>Piso, numero de departamento</Form.Label>
                    <Form.Control/>
                    <Form.Text className="text-muted">X° N° XX</Form.Text>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control />
                    <Form.Text className="text-muted">Nombre de tu Ciudad</Form.Text>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Provincia</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Elegir</option>
                        {provincias.map(element => { return <option>{element}</option> })}
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Codigo postal</Form.Label>
                    <Form.Control />
                    <Form.Text className="text-muted">xxxx</Form.Text>
                </Form.Group>
            </Row>
            <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Acepto los terminos y condiciones" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default CheckoutForm