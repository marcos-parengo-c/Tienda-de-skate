import { createContext, useState } from 'react';

export const CartContext = createContext();



export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const isInCart = (item) => {
        const isDuplicated = (element) => element.Item.name === item.name;
        const index = cart.findIndex(isDuplicated)
        if (index===-1){return [false,index]}else{return[true,index]}
    }

    const addItem = (item, quantity, setQuantity, stock, setStock, setDisplay) => {
        return () => {
            if (quantity > 0) {
                if (isInCart(item)[0]) {
                    cart[isInCart(item)[1]].Cantidad = cart[isInCart(item)[1]].Cantidad + quantity;
                } else {
                    setDisplay(true)
                    setCart([...cart, { "Item": item, "Cantidad": quantity }])
                }
                setStock(stock - quantity);
                setQuantity(0)
            }
        }
    }
    const removeItem = (id) => {
        return () => {
            const isDuplicated = (element) => element.Item.name === id;
            const index = cart.findIndex(isDuplicated)
            if (index !== -1) {
                cart.splice(index, 1);
            }
        }
    }
    const clearCart = () => {
        setCart([])
    }
    return <CartContext.Provider value={{ cart, setCart, addItem, clearCart,removeItem }}>
        {children}
    </CartContext.Provider>
}