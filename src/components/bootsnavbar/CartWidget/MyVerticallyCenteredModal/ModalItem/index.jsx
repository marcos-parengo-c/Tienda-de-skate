import React, { useContext } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { CartContext } from '../../../../../context/cartContext';

const ModalItem = ({ i, cart }) => {
  const { removeItem } = useContext(CartContext)
  return (

    <Container >
      <Row>
        <Col sm={7}>
          <h4>{cart.Item.name}</h4>
          <p>X{cart.Cantidad}</p>
        </Col>
        <Col sm={{ span: 1, offset: 4 }}>
          <Button onClick={removeItem(cart.Item.name)} variant="outline-dark" style={{float: 'right'}} className="float-right">X</Button>
        </Col>
      </Row>
    </Container>
  );
}
export default ModalItem