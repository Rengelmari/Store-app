import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
/* import Contador from '../Contador/Contador'; */



const ItemDetail = (props) => {
    const {key, descripcion, img, precio, altText, stock} = props;

    const {productTitle} = useParams();
    return (
        <div className='container my-5'>
            <Card style={{ width: '18rem' }}  className="producto mx-auto">
                <Card.Img variant="top" src={img}  alt={altText} />
                <Card.Body >
                <Card.Title className='Card-title'> {descripcion} </Card.Title>        
                <Card.Title className='Card-title'> 
                    <p>Precio: ${precio}</p>
                    <small>Stock: {stock}</small>
                </Card.Title> 
                </Card.Body>
            </Card>
            <Link to= {`/`} className="btn btn-dark my-2" variant="primary">Ir al inicio</Link>
        </div>
    )
}

export default ItemDetail
