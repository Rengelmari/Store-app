import { useState, useEffect } from "react";
import { GetData } from "../GetData"
import Spinner from "react-bootstrap/Spinner";
import ItemList from '../ItemDetail/ItemList';
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

    /*     <div className="row">
            {
                <div className="container-cards">
                    {data.map((StockProd) => <Item {StockProd}/>)}
                </div>  

            }
            
        </div>    */

/* variant="primary" */


{/* <Card style={{ width: '14rem' }}>
<Card.Img variant="top" src={StockProd.img} alt={StockProd.altText}/>
<Card.Body>
    <Card.Title>{StockProd.descripcion}</Card.Title>
    <Card.Text>Precio: {StockProd.precio}</Card.Text>
    <Card.Text>Stock: {StockProd.stock}</Card.Text>
    <Link to= {`/item/${StockProd.id}`} className="btn btn-dark my-2" >
        
    Ver</Link>
</Card.Body>
</Card> */}











/* function ItemListCard(props) {
    const {key, descripcion, img, precio, altText, stock} = props;
    const producto = {title:{key}}
    return (
        <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src={img} alt={altText}/>
            <Card.Body>
                <Card.Title>{descripcion}</Card.Title>
                <Card.Text>Precio: {precio}</Card.Text>
                <Card.Text>Stock: {stock}</Card.Text>
                <Contador Stock={stock}/>
                <Link to= {`/item/${producto.key}`} className="btn btn-dark my-2" variant="primary" 
                    key={key} descripcion={descripcion} precio={precio} img={img} altText={altText} stock={stock}>
                Ver</Link>
            </Card.Body>
        </Card>
    );
}

export default ItemListCard; */