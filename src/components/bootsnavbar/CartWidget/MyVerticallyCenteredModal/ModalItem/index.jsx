import React from 'react'

const ModalItem = ({i,cart}) => {
    return (
        <div >
          <h4>{cart.Item.name}</h4>
          <p>X{cart.Cantidad}</p>
        </div>  
    );
}
export default ModalItem