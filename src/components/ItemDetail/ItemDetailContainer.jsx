import { useEffect, useState } from "react"
import { GetData } from "../GetData"
import { useParams } from 'react-router-dom'
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)

        GetData()
            .then((res) => {
                setItem( res.find((producto) => producto.id === Number(itemId)) )
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
                : <ItemDetail item={producto} />
            }
            

        </div>
    )
}

export default ItemDetailContainer;