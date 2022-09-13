import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemsContainer from './components/ItemContainer/ItemContainer';
import { useState } from 'react';
import { useEffect } from "react";
import ItemDetail from './components/ItemDetail/ItemDetail';
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
/*   const [carrito, setCarrito] = useState([])
  const [productos, setProductos] = useState ([])



  const SearchProducts = async () =>{
    try {
        const Respuesta = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=samsung')
        const data = await Respuesta.json();
        setProductos(data.results);
    } catch (e) {
    }
}

useEffect(() => {
    SearchProducts()
}, []) */

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element= {<ItemsContainer/>}/>
        <Route path="/productos" element= {<ItemsContainer/>} />
        <Route path="/item/:key" element= {<ItemDetail/>} />
        {/* <Route path="/api" element= {<ItemDetailContainer/>} productos ={productos} setCarrito = {setCarrito} carrito ={carrito} /> */}
      </Routes>
    </BrowserRouter>


/*     <div className="App">
      <NavBar />
      <ItemsContainer />
      <ItemDetailContainer productos ={productos} setCarrito = {setCarrito} carrito ={carrito} />
    </div> */
  );
}

export default App;
