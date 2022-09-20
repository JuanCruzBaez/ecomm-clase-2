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
            setCartList([
                ...cartList,
                itemForCart
            ])
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


    const calcTotalPerItem = (idItem) => {
        let index = cartList.map(item => item.id).indexOf(idItem);
        return cartList[index].price * cartList[index].qty;
    }

     const calcSubTotal = () => {
        if (cartList.length !== 0) {
            let totalPerItem = cartList.map(item => calcTotalPerItem(item.id));
            return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue)

        }
        
    }

    const calcTotal = () => {
        return calcSubTotal();
    }


    const calcItemsQty = () => {
        let qtys = cartList.map(item => item.qty); 
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    const displayItemNumber = () => {
        const number = calcItemsQty()
        return (number <= 0 ? null : number)
    }

    const endTransaction = () => {
        alert("Gracias por su compra")
        clear() 
    }

    return (
        
        <CartContext.Provider value={{cartList, addItem, removeItem, clear, calcTotal, calcItemsQty, calcSubTotal, calcTotalPerItem, displayItemNumber, endTransaction}}>
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
