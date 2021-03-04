import React, { useContext } from 'react'
import { Button, Col, Container, Row, Card, Accordion, ButtonGroup } from 'react-bootstrap';
import { CartContext } from '../../../../context/cartContext';

const CheckoutAccordionItem = ({cart,i}) => {
    const { removeItem } = useContext(CartContext)
    return (
        <div>
            <Container className="p-3">
                <Row>
                    <Col>
                        <h4>{cart.Item.name}</h4>
                    </Col>
                    <Col >
                        <ButtonGroup aria-label="Basic example" style={{ float: 'right' }} >
                            <Button onClick={removeItem(cart.Item, cart.Cantidad)} variant="outline-dark" style={{ float: 'right' }}>Eliminar articulo</Button>
                            <Accordion.Toggle as={Button} variant="outline-dark" style={{ float: 'right' }} eventKey={i.toString()}>Mostrar detalles</Accordion.Toggle>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Accordion.Collapse eventKey={i.toString()}>
                    <Card.Body>
                        <p>X{cart.Cantidad} productos</p>
                        <p>${cart.Item.price} cada uno, ${(cart.Item.price) * (cart.Cantidad)} en total</p>
                    </Card.Body>
                </Accordion.Collapse>
            </Container>
        </div>
    );
}
export default CheckoutAccordionItem