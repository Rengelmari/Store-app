import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemsContainer from './components/ItemContainer/ItemContainer';
import Contador from './components/ItemContainer/Contador';


function App() {

  return (
    <div className="App">
      <NavBar/>
      <ItemsContainer>
        <Contador Stock={25} />
      </ItemsContainer>
    </div>  
  );
}

export default App;
