import Card from 'react-bootstrap/Card';
import Contador from './Contador';
import { Link } from 'react-router-dom';

function ItemCard(props) {
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

export default ItemCard;