import React, { useState,createContext ,useContext} from "react";

export const CardContext = createContext(null);

export const useCart = ()=>{
    const cart = useContext(CardContext);
    return cart;
}

const CardProvider = (props) => { 
    const [item , setItem]= useState([]);
    return <CardContext.Provider value={{item,setItem}}>
    {props.children}
    </CardContext.Provider>
}
export default CardProvider;