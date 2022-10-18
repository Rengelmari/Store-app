import { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const Checkout = () => {

    const {cart,cartTotal,terminarCompra}=useCartContext()

    const [values, setValues] = useState({
        name: "",
        email: "",
        phone:"",
    })

    const orden = {
        comprador: values,
        items:cart,
        total:cartTotal(),

    }

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        const db = getFirestore()
        e.preventDefault()
        console.log(orden)
        const ordenesRef= collection(db,"orders")
        addDoc(ordenesRef,orden)
        .then((snapshot)=>{
            terminarCompra(snapshot.id)
        })

    }

    if(cart.length === 0){
        return <Navigate to="/"/>
    }
    return (
        <div>
            <h2>Checkout</h2>

            <form onSubmit={handleSubmit} className="formulario">
                <input
                    name='name'
                    onChange={handleInputChange}
                    type={"text"}
                    value={values.name}
                    placeholder="Nombre"></input>
                <input
                    name='email'
                    onChange={handleInputChange}
                    type={"email"}
                    value={values.email}
                    placeholder="Email"></input>
                <input
                    name='phone'
                    onChange={handleInputChange}
                    type={"text"}
                    value={values.phone}
                    placeholder="Teléfono"></input>
                <button type='submit' className='btn1'>Enviar</button>

            </form>
        </div>
    )
}

export default Checkout
