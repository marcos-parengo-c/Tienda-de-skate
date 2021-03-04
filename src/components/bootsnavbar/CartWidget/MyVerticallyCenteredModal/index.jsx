import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../../../context/cartContext';
import { Button, Modal, Accordion, Container, Col, Row, ButtonGroup } from 'react-bootstrap';
import ModalItem from './ModalItem';

const MyVerticallyCenteredModal = (props) => {
  const { cart, clearCart, total } = useContext(CartContext)

  useEffect(() => {
    return () => {
    }
  }, [cart,total])

  return (
    <Modal {...props} size="lg"
      aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header>
        <Container >
          <Row>
            <Col >
              <Modal.Title id="contained-modal-title-vcenter">Carrito</Modal.Title>
            </Col>
            <Col>
              <Button onClick={props.onHide} variant="outline-dark" style={{ float: 'right' }} >X</Button>
            </Col>
          </Row>
        </Container>
      </Modal.Header>
      <Modal.Body>
        <Accordion>
          {cart.map((u, i) => { ; return (<ModalItem key={i} cart={u} i={i} />) })}
        </Accordion>
        <h2 style={{ display: cart.length === 0 ? 'block' : 'none' }}>Empty Cart v.v</h2>
      </Modal.Body>
      <Modal.Footer>
        <Container >
          <Row>
            <Col >
              <h4>${total} en total</h4>
            </Col>
            <Col>
              <ButtonGroup aria-label="Basic example" style={{ float: 'right' }} >
                <Button onClick={clearCart} variant="outline-dark">Clear Cart</Button>
                <Button as={Link} to={"/Checkout"} variant="outline-dark" onClick={props.onHide} >Go to checkout</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Container>
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal
