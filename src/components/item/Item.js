import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Item.css"

const Item = ({ producto }) => {
	return (
		<div className='container my-5 galeria'>
			<Card style={{ width: "14rem" }} className='producto mx-auto'>
				<Card.Img variant='top' src={producto.image} alt={producto.altText} />
				<Card.Body>
					<Card.Title className='Card-title'> {producto.title} </Card.Title>
					<Card.Title className='Card-title'>
						<p>Precio: ${producto.precio}</p>
						<small>Stock: {producto.stock} unidades</small>
					</Card.Title>
				</Card.Body>
				<Link to={`/item/${producto.id}`}>
					{" "}
					<Button className="btn btn-dark my-2">Ver</Button>{" "}
				</Link>
			</Card>
		</div>
	);
};

export default Item;