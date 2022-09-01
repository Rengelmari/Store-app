import Card from 'react-bootstrap/Card';
import Contador from './Contador';

function ItemCard(props) {
    const {descripcion, img, precio, altText, stock} = props;
    return (
        <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src={img} alt={altText}/>
            <Card.Body>
                <Card.Title>{descripcion}</Card.Title>
                <Card.Text>Precio: {precio}</Card.Text>
                <Card.Text>Stock: {stock}</Card.Text>
                <Contador/>
            </Card.Body>
        </Card>
    );
}

export default ItemCard;