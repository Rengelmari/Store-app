import { useState } from "react";
import { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import ItemCard from "./ItemCard";

const StockProds = [
    {id:1, descripcion:"Aros Luna", precio:2500, img: "./img/landscape3.png", altText:"moon & mountain earrings", stock:55 },
    {id:2, descripcion:"Aros Sol", precio:3000, img: "./img/landscape2.png", altText:"sun & mountain earrings", stock:75 },
    {id:4, descripcion:"Aros Desert", precio:4000, img: "./img/landscape6.png", altText:"sun & desert earrings", stock:10 },
    {id:5, descripcion:"Aros Mountain", precio:4000, img: "./img/landscape4.png", altText:"mountain & river earrings", stock:82 },
    {id:6, descripcion:"Aros Ocean", precio:4000, img: "./img/landscape5.png", altText:"moon & ocean earrings", stock:36 }
]

const ItemsContainer = () => {

    const [data, setData]=  useState([]);
    const[loading, setLoading] = useState(true)
    
    const getData = () => {
        const setError = false;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(!setError) {
                    resolve(StockProds)
                }
                else {
                    reject(console.log("Error"))
                }
            }, 6000)
        })
    }
useEffect(() => {
    getData
    .then(resp => {
        setData(resp);
        setLoading(false);
    })
    .catch (error => console.log(error))
},[])

return (
    <>
    {
        loading? <Spinner animation="grow" variant="dark" />  
        :
        <div className="row">
            {
                data.map((StockProd) => (
                    <div className="col-5">
                        <ItemCard key={StockProd.id} descripcion={StockProd.descripcion} precio={StockProd.precio} img={StockProd.img} altText={StockProd.altText} stock={StockProd.stock}/>
                    </div>
                ))
            }
        </div>
    }  
    </>     
    )
}
export default ItemsContainer;
