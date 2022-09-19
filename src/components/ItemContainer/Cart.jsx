import { useCartContext } from '../../context/CartContext';
import Cart from '../../components/ItemContainer/Cart';


const Carrito = () => {

    const { cart, cartTotal, emptyCart, removeItem } = useCartContext()

    

    return (
        <div className="container my-5">
            <h2>Tu carrito</h2>
            <hr/>

            { cart.map((item) => (
                <div key={item.id}>
                    <h3>{item.nombre}</h3>
                    <p>Precio: {item.precio}</p>
                    <p>Cantidad: {item.cantidad}</p>
                    <small>Color: {item.color}</small>
                    <small>Talle: {item.talle}</small>
                    <button onClick={() => removeItem(item.id)} className="btn btn-danger mx-2"></button>
                    <hr/>
                </div>
            ))}


            <h4>Total: ${cartTotal()}</h4>
            <button onClick={emptyCart} className="btn btn-danger">Vaciar carrito</button>
        </div>
    )
}

export default Carrito