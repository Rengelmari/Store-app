import {  useState } from "react"
import Contador from './Contador';
/* import Select from "../Select"; */
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext";


const ItemDetail = ({producto}) => {

    const { cart, addToCart, isInCart } = useCartContext()

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const itemToCart = {
            id: producto.id,
            precio: producto.precio,
            nombre: producto.descripcion,
            cantidad
        }

        addToCart(itemToCart)
    }

    return (
        <div className="container my-5">
{/*             <img src={producto.img} alt=""/>
            <h3>{producto.descripcion}</h3>
            <p>{producto.desc}</p>
            <h4>{producto.precio}</h4> */}
            

            {
                isInCart(producto.id)
                ?   <Link to="/cart" className="btn btn-success my-2">Terminar mi compra</Link>
                :   <Contador 
                        max={producto.stock}
                        counter={cantidad}
                        setCounter={setCantidad}
                        handleAgregar={handleAgregar}
                    />
            }
        </div>
    )
}

export default ItemDetail;





