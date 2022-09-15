import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
    
    const addItem = (item, qty) => {
        let itemForCart = {
            ...item,
            qty: qty
        }

        if(!isInCart(item.id)) {
            setCartList([...cartList, itemForCart])
        } else {
            const itemForCart = cartList.map(prod => {
                   
                 if(prod.id === item.id) {
                    const itemForCart = {
                        ...prod,
                        qty: qty + prod.qty};

                    if(itemForCart.qty > item.stock) {
                        itemForCart.qty = item.stock
                 };

                return itemForCart
                  
                } 
            else {
                    
                    return prod
                }
            })
            setCartList(itemForCart)
        }
    }

    const isInCart = (id) => {  
        return cartList.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
       let newCartList = cartList.filter(item => item.id !== id)
       setCartList(newCartList)
    }

    const clear = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{cartList, addItem, removeItem, clear}}>
            {children}  
        </CartContext.Provider>
    );
}

export default CartContextProvider;


/* /* const addItem = (item, qty) => {
    let itemForCart = {
        ...item,
        qty
    }
    setCartList([
        ...cartList,
        itemForCart
    ])
} */
