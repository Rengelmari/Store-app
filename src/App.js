import './App.css';
import ItemContainer from './components/ItemContainer/ItemContainer';
import NavBar from './components/NavBar/NavBar';


function App() {

  return (
    <div className="App">
      <NavBar/>
      <ItemContainer greetings = "Bienvenid@" />
    </div>
  );
}

export default App;
