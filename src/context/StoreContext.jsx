import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {


    const [cartItem, setcartItem] = useState({})

    const addToCart = (itemId) => {
        if (!cartItem[itemId]) {
            setcartItem((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const removeFromCart = (itemId) => {
        setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = food_list.find((product) => product._id == item)
                totalAmount += itemInfo.price * cartItem[item]
            }
        }
        return totalAmount
    }


    const contextValue = {
        food_list,
        cartItem,
        setcartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}


export default StoreContextProvider