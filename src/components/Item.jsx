import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
	return (
		<div className='container my-5'>
			<Card style={{ width: "14rem" }} className='producto mx-auto'>
				<Card.Img variant='top' src={producto.img} alt={producto.altText} />
				<Card.Body>
					<Card.Title className='Card-title'> {producto.descripcion} </Card.Title>
					<Card.Title className='Card-title'>
						<p>ID: {producto.id}</p>
						<p>Precio: ${producto.precio}</p>
						<small>Stock: {producto.stock}</small>
						{/* <Contador Stock={producto.stock}/> */}
					</Card.Title>
				</Card.Body>
			</Card>
			<Link to={`/item/${producto.id}`}>
				{" "}
				<Button className="btn btn-dark my-2">Ver</Button>{" "}
			</Link>
		</div>
	);
};

export default Item;




/* import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {

    return (
        <div className='container my-5'>
            <Card style={{ width: '14rem' }}  className="producto mx-auto">
                <Card.Img variant="top" src={producto.img}  alt={producto.altText} />
                <Card.Body >
                <Card.Title className='Card-title'> {producto.descripcion} </Card.Title>        
                <Card.Title className='Card-title'> 
                    <p>ID: {producto.id}</p>
                    <p>Precio: ${producto.precio}</p>
                    <small>Stock: {producto.stock}</small>
                </Card.Title> 
                </Card.Body>
            </Card>
            <Link to= {`/item/${producto.id}`} className="btn btn-dark my-2" >Ver</Link>
            
        </div>
    )
}

export default Item; */