import React, {useContext,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../../../context/cartContext';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ModalItem from './ModalItem';

const MyVerticallyCenteredModal = (props) => {
  const {cart,clearCart} = useContext(CartContext)

  useEffect(() => {
    return () => {
    }
  }, [cart])

  return (
      <Modal {...props} size="lg"
        aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header> 
          <Modal.Title  id="contained-modal-title-vcenter">Carrito</Modal.Title>
          <Button onClick={props.onHide} variant="outline-dark">X</Button>
        </Modal.Header>
        <Modal.Body>
          {cart.map((u, i) => { ; return (<ModalItem key={i} cart={u}/>) })}
          <h1 style={{display: cart.length===0 ? 'block' : 'none' }}>Empty Cart v.v</h1>
        </Modal.Body>
        <Modal.Footer>
            <Button as={Link} to={"/Checkout"} onClick={props.onHide} variant="outline-dark">Go to checkout</Button>
            <Button onClick={clearCart}  variant="outline-dark">Clear Cart</Button>
        </Modal.Footer>
      </Modal>
    );
}
export default MyVerticallyCenteredModal
