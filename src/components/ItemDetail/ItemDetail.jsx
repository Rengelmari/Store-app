import {  useState } from "react"
import Contador from './Contador';
/* import Select from "../Select"; */
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext";


const ItemDetail = ({producto}) => {

    const { cart, addToCart, isInCart } = useCartContext()
    console.log(cart)

    const [cantidad, setCantidad] = useState(1)
/*     const [contenido, setContenido] = useState(item.talles[0].value)
    const [sabores, setSabores] = useState(item.colores[0].value) */

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
            <img src={producto.img} alt=""/>
            <h3>{producto.descripcion}</h3>
{/*             <p>{item.desc}</p> */}
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
            }
          

        </div>
    )
}

export default ItemDetail;









/* import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Contador from './Contador';



const ItemDetail = ({Item}) => {


    return (
        <div className='container my-5'>
            <Card style={{ width: '18rem' }}  className="producto mx-auto">
                <Card.Img variant="top" src={Item.img}  alt={Item.altText} />
                <Card.Body >
                <Card.Title className='Card-title'> {Item.descripcion} </Card.Title>        
                <Card.Title className='Card-title'> 
                    <p>ID: {Item.key}</p>
                    <p>Precio: ${Item.precio}</p>
                    <small>Stock: {Item.stock}</small>
                    <Contador Stock={Item.stock}/>
                </Card.Title> 
                </Card.Body>
            </Card>
            <Link to= {`/`} className="btn btn-dark my-2">Ir al inicio</Link>
        </div>
    )
}

export default ItemDetail
 */