import { Link } from 'react-router-dom';
import './ItemContainer.css';

const ItemContainer = () => {

return (
    <>
        <div className='inicio'>
            <img src='/img/inicio.png' className='imgPrincipal' alt='Imagen de inicio'></img>
        </div>  
        <div>
            <h1 className='titulo'>ALECIRAM</h1>
            <Link to= {`/productos`} className="btn btn-dark my-2">Ver productos</Link>
        </div>   
    </>
)
}
export default ItemContainer;
