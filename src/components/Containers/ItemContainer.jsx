import { Link } from 'react-router-dom';
const ItemsContainer = () => {


return (
    <div>
        <p>Hola</p>
        <Link to= {`/productos`} className="btn btn-dark my-2">Ver productos</Link>
    </div>  
    
    )
}
export default ItemsContainer;
