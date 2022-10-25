import './App.css';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ItemContainer from './components/containers/ItemContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import ItemListCard from './components/containers/ItemListCard';
import NavBar from './components/navBar/NavBar';
import { CartProvider } from './context/CartContext';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element= {<ItemContainer/>}/>
        <Route path="/productos" element= {<ItemListCard/>} />
        <Route path="/item/:key" element= {<ItemDetailContainer/>}  />
        <Route path="/cart" element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
    
  );
}

export default App;
