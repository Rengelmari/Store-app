import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemsContainer from './components/Containers/ItemContainer';
import ItemDetail from './components/ItemDetail';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemListCard from './components/Containers/ItemListCard';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import ItemDetailContainer from './components/Containers/ItemDetailContainer';
import Checkout from './components/Checkout';

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
    <CartProvider>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element= {<ItemsContainer/>}/>
        <Route path="/productos" element= {<ItemListCard/>} />
        <Route path="/item/:key" element= {<ItemDetailContainer/>}  />
        <Route path="/cart" element={<Cart/> } />
        <Route path='/checkout' element={<Checkout/>}/>
        {/* <Route path="/api" element= {<ItemDetailContainer/>} productos ={productos} setCarrito = {setCarrito} carrito ={carrito} /> */}
      </Routes>
    </BrowserRouter>
    </CartProvider>
    


/*     <div className="App">
      <NavBar />
      <ItemsContainer />
      <ItemDetailContainer productos ={productos} setCarrito = {setCarrito} carrito ={carrito} />
    </div> */
  );
}

export default App;
