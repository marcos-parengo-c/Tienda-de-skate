import React, { useContext } from 'react'
import { Button, Col, Container, Row, Card, Accordion } from 'react-bootstrap';
import { CartContext } from '../../../../../context/cartContext';

const ModalItem = ({ i, cart }) => {
  const { removeItem } = useContext(CartContext)
  return (
    <Container >
        <Accordion.Toggle as={Col} eventKey={i.toString()}>
        <Row>
          <Col sm={7}>
            <h4>{cart.Item.name}</h4>
          </Col>
          <Col sm={{ span: 1, offset: 4 }}>
            <Button onClick={removeItem(cart.Item.name)} variant="outline-dark" style={{ float: 'right' }} className="float-right">X</Button>
          </Col>
        </Row>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={i.toString()}>
          <Card.Body>
            <p>X{cart.Cantidad} productos</p>
            <p>${cart.Item.price} cada uno, ${(cart.Item.price)*(cart.Cantidad)} en total</p>
          </Card.Body>
        </Accordion.Collapse>   
    </Container>
  );
}
export default ModalItem