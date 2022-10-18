import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemsContainer from './components/containers/ItemContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemListCard from './components/containers/ItemListCard';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import Checkout from './components/Checkout';

function App() {

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
      </Routes>
    </BrowserRouter>
    </CartProvider>
    
  );
}

export default App;




<Route path='/productos/:categoryId' element={<ItemListContainer/>} />