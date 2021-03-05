import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantTotal, setCantTotal] = useState(0);
    
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
                setTotal(total+(quantity*(item.price)))
                setStock(stock - quantity);
                setCantTotal(cantTotal+quantity)
                setQuantity(0)
            }
        }
    }
    const removeItem = (item,quantity) => {
        return () => {        
            setCantTotal(cantTotal-quantity)
            setTotal(total-(quantity*(item.price)))
            setCart(cart.filter(cart => cart.Item.name !== item.name));
        }
    }
    const clearCart = () => {
        setTotal(0)
        setCantTotal(0)
        setCart([])
    }
    return <CartContext.Provider value={{ cart, setCart, addItem, clearCart,removeItem,total,cantTotal,isInCart }}>
        {children}
    </CartContext.Provider>
}