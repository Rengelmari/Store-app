import {  useState } from "react"
import Contador from './Contador';
/* import Select from "../Select"; */
import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext";
import Card from 'react-bootstrap/Card';


const ItemDetail = ({item}) => {

/*     const { addToCart, isInCart } = useCartContext()

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const itemToCart = {
            id: producto.id,
            precio: producto.precio,
            nombre: producto.descripcion,
            cantidad
        }

        addToCart(itemToCart)
    } */

    return (
<div className='container my-5'>
            <Card style={{ width: '14rem' }}  className="producto mx-auto">
                <Card.Img variant="top" src={item.img}  alt={item.altText} />
                <Card.Body >
                <Card.Title className='Card-title'> {item.descripcion} </Card.Title>        
                <Card.Title className='Card-title'> 
                    <p>ID: {item.id}</p>
                    <p>Precio: ${item.precio}</p>
                    <small>Stock: {item.stock}</small>
                    {/* <Contador Stock={producto.stock}/> */}
                </Card.Title> 
                </Card.Body>
            </Card>

{/*         <div className="container my-5">
            <img src={producto.img} alt=""/>
            <h3>{producto.descripcion}</h3>
            <p>{producto.desc}</p>
            <h4>{producto.precio}</h4>
            

            {
                isInCart(producto.id)
                ?   <Link to="/cart" className="btn btn-success my-2">Terminar mi compra</Link>
                :   <Contador 
                        max={producto.stock}
                        counter={cantidad}
                        setCounter={setCantidad}
                        handleAgregar={handleAgregar}
                    />
            } */}
        </div>
    )
}

export default ItemDetail;





