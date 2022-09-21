import { useState, useEffect } from "react";
import { GetData } from "../GetData"
import Spinner from "react-bootstrap/Spinner";
import ItemList from '../ItemList';
import { Link } from 'react-router-dom';

const ItemListCard = () => {

    const [data, setData]=  useState([]);
    const[loading, setLoading] = useState(true)
    
useEffect(() => {
/*     setLoading(true) */
    GetData()
    .then(resp => {
        setData(resp);
        setLoading(false);
    })
    .catch (error => console.log(error))
},[])

return (
    <>
    <Link to= {`/`} className="btn btn-dark my-2">Ir al inicio</Link>
    {
        loading? <Spinner animation="grow" variant="dark" />  
        :
                <ItemList data={data} />
}
</>
)
}

export default ItemListCard;
