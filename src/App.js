import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemsContainer from './components/ItemContainer/ItemContainer';
/* import Contador from './components/ItemContainer/Contador'; */


function App() {
  /*   const Stock = 10;
   */
  return (
    <div className="App">
      <NavBar />
      <ItemsContainer />
      {/*       <Contador Stock={Stock} /> */}
    </div>
  );
}

export default App;
