import React from 'react'
import Nav from 'react-bootstrap/Nav';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal'

const CartWidget = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
        <Nav.Link>
            <img
                alt="verga"
                src="/images/cart.png"
                width="30"
                height="30"
                className="d-inline-block align-top" 
                onClick={() => setModalShow(true)}
                />
        </Nav.Link>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    )
}
export default CartWidget
