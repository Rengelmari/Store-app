import React from "react"
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CartWidget =() => {
    const { cartQuantity } = useContext(CartContext)

    return (
        <>
        
        <Link to= {`/cart`}>
        <i className="ri-shopping-bag-line cesta"/>
        <span>{cartQuantity()}</span>
        </Link>
        </>
        
        
    )
}
export default CartWidget;
