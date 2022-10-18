import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore"

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    const {key} = useParams()

    useEffect(() => {
        setLoading(true)
        const db = getFirestore()

        const docRef = doc(db, 'items', key)

        getDoc(docRef)
            .then((doc) => {
                setItem({id: doc.id, ...doc.data()})
            })
            .finally(() => {
                setLoading(false)
            })
    }, [key])
    
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