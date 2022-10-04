import { useState, useEffect } from "react";
import { GetData } from "../GetData"
import Spinner from "react-bootstrap/Spinner";
import ItemList from '../ItemList';
import { Link } from 'react-router-dom';
import { collection, getDocs, getFirestore } from "firebase/firestore"

const ItemListCard = () => {

    const [products, setProducts]=  useState([]);
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        setLoading(true)
        const db = getFirestore()
        const productos = collection(db, 'items')
        getDocs(productos)
            .then((resp) => {
                const productosDB = resp.docs.map( (doc) => ({id: doc.id, ...doc.data()}) )
                console.log(productosDB)
                setProducts(productosDB)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

/* useEffect(() => {
    setLoading(true)
    GetData()
    .then(resp => {
        setData(resp);
        setLoading(false);
    })
    .catch (error => console.log(error))
},[]) */

return (
    <>
    <Link to= {`/`} className="btn btn-dark my-2">Ir al inicio</Link>
    {
        loading? <Spinner animation="grow" variant="dark" />  
        :
                <ItemList productos={products} />
}
</>
)
}

export default ItemListCard;
