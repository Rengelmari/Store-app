import Card from "react-bootstrap/Card";
import Contador from "./Contador"
import { useEffect, useState } from "react";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
	const { addToCart, isInCart } = useCartContext()

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            precio: item.precio,
            nombre: item.descripcion,
            cantidad
        }

        addToCart(itemToCart)
    }

	return (
/* 		<div className='container my-5'>
			<Card style={{ width: "14rem" }} className='producto mx-auto'>
				<Card.Img variant='top' src={item.img} alt={item.altText} />
				<Card.Body>
					<Card.Title className='Card-title'> {item.descripcion} </Card.Title>
					<Card.Title className='Card-title'>
						<p>ID: {item.id}</p>
						<p>Precio: ${item.precio}</p>
						<small>Stock: {item.stock}</small>
						<Contador Stock={item.stock}/>
					</Card.Title>
				</Card.Body>
			</Card> */

			<div className="container my-5">
            <img src={item.image} alt=""/>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <h4>{item.precio}</h4>
            

            {
                isInCart(item.id)
                ?   <Link to="/cart" className="btn btn-success my-2">Terminar mi compra</Link>
                :   <Contador 
                        max={item.stock}
                        counter={cantidad}
                        setCounter={setCantidad}
                        handleAgregar={handleAgregar}
                    />
            } 
		</div>
	);
};

export default ItemDetail;
















/* import {  useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext";
import Contador from "./Contador"

const ItemDetail = ({item}) => {

    const { cart, addToCart, isInCart } = useCartContext()
    console.log(cart)

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            precio: item.precio,
            descripcion: item.desc,
            cantidad
        }

        addToCart(itemToCart)
    }

    return (
        <div className="container my-5">
            <>
            <Link to= {`/`} className="btn btn-dark my-2">Ir al inicio</Link>
            </>
            <img src={item.img}/>
            <h3>{item.desc}</h3>
            <p>{item.desc}</p>
            <h4>{item.precio}</h4>
            {
                isInCart(item.id)
                ?   <Link to="/cart" className="btn btn-success my-2">Terminar mi compra</Link>
                :   <Contador
                        max={item.stock}
                        counter={cantidad}
                        setCounter={setCantidad}
                        handleAgregar={handleAgregar}
                    />
                
            }
        </div>
    )
}

export default ItemDetail */