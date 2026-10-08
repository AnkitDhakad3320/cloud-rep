import React from "react";
import { useCart } from "../context/Cart";


const Cart = () => {
    const cart = useCart();
    const total = cart.item.reduce((a,b)=> a + b.price , 0);
    console.log(cart.item.price);
    return <div className="cart">
        <p>________________</p>
        <h1>Cart</h1>
        {cart && cart.item.map((items)=><li>{items.item} -  {items.price}</li>)}
        <h3>Total :{total}$ </h3>
    </div>
}
export default Cart;