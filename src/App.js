import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemsContainer from './components/ItemContainer/ItemContainer';

function App() {
  const Hola = "Bienvenido"
  return (
    <div className="App">
      <NavBar/>
      <ItemsContainer saludo={Hola}/>
    </div>  
  );
}

export default App;
