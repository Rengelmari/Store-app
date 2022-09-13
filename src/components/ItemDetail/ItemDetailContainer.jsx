
const ItemDetailComponent = ({productos, setCarrito, carrito}) => {
    return (
        <>
            {productos.map((producto, index) => {
                return (
                    <div key={index}>
                        <h3>{producto.title}</h3>
                        <img src={producto.thumbnail} alt=''></img>
                        <div>
                            <button onClick={() => {
                                setCarrito ([...carrito, producto]);
                                }}> Agregar al carrito
                            </button>
                        </div>
                    </div>
                )
            })}
        </>  
    )
}

export default ItemDetailComponent;