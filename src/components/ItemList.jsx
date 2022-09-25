import Item from "./Item"


const ItemList = ( {data = []} ) => {

    return (
        <div className="container-cards">
            { data.map((prod) => (<Item producto={prod} key={prod.id}/>))}
        </div>  
    )
}

export default ItemList;