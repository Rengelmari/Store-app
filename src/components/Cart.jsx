import { useCartContext } from '../context/CartContext';
import { Link } from "react-router-dom";

const Carrito = () => {

    const { cart, cartTotal, emptyCart, removeItem } = useCartContext()

    

    return (
        <div className="container my-5">
            <h2>Tu carrito</h2>
            <hr/>

            { cart.map((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>Precio: $ {item.precio}</p>
                    <p>Cantidad: {item.cantidad}</p>
                    <button onClick={() => removeItem(item.id)} className="btn btn-danger mx-2">Eliminar</button>
                    <hr/>
                </div>
            ))}


            <h4>Total: ${cartTotal()}</h4>
            <button onClick={emptyCart} className="btn btn-danger">Vaciar carrito</button>

            <Link to= {`/`} className="btn btn-dark my-2">Ir al inicio</Link>
        </div>
    )
}

export default Carrito