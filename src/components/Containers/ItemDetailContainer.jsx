import { useEffect, useState } from "react";
import { GetData } from "../GetData";
import ItemDetail from "./../ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

	const [item, setItem] = useState(null);
	const [loading, setLoading] = useState(true);

	const { key } = useParams();
	console.log(key);

	useEffect(() => {
		setLoading(true);
		GetData()
			.then((res) => {
				setItem(res.find((producto) => producto.id === Number(key)));
			})
			.catch((err) => console.log(err))
			.finally(() => {
				setLoading(false);
			})}, [key]);
        
	return (
        <div>
            {
            loading ? 
            <h2>Cargando Producto...</h2> 
            : <ItemDetail item={item} />
            }
        </div>
    )
        
};

export default ItemDetailContainer;





/* import { useEffect, useState } from "react"
import { GetData } from "../GetData"
import { useParams } from 'react-router-dom'
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {

    const [item, setItem] = useState()
    const [loading, setLoading] = useState(true)
    debugger
    const {key} = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                setItem( res.find((prod) => prod.id === Number(key)) )
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
            })

    }, [])

    return (
        <div>
            {
                loading
                ? <h2>Cargando Producto...</h2>
                : <ItemDetail item={item} />
            }
            

        </div>
    )
}

export default ItemDetailContainer */