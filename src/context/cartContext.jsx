import  { createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart,setCart]=useState([{name:"marki"}]);
    return <CartContext.Provider value={{cart,setCart}}>
        {children}
    </CartContext.Provider>
}