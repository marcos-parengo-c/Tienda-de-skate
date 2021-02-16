import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

const MyVerticallyCenteredModal = (props) => {
    return (
      <Modal {...props} size="lg"
        aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header> 
          <Modal.Title  id="contained-modal-title-vcenter">Carrito</Modal.Title>
          <Button onClick={props.onHide} variant="outline-dark">X</Button>
        </Modal.Header>
        <Modal.Body>
          <h4>Remera</h4>
          <p>x1</p>
          <h4>Remera</h4>
          <p>x1</p>
        </Modal.Body>
        <Modal.Footer>
            <Button as={Link} to={"/Cart"} onClick={props.onHide} variant="outline-dark">Go to checkout</Button>
        </Modal.Footer>
      </Modal>
    );
}
export default MyVerticallyCenteredModal
