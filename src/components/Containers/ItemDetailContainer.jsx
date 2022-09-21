import { useEffect, useState } from "react"
import { GetData } from "../GetData"
import { useParams } from 'react-router-dom'
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {

    const {itemId} = useParams();
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        GetData()
            .then((item) => {
                setItem(item.find(producto => producto.id === (itemId)))
/*                 setItem( res.find((producto) => producto.id === Number(itemId)) ) */
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

export default ItemDetailContainer;