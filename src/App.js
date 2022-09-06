import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer' ;
import ItemDetailContainer from './utils/ItemDetailContainer';



const App = () => {
  return (
    <>
      <NavBar />
      {/* <ItemListContainer greeting="Bienvenidos a TechHouse"/> */}
      <ItemDetailContainer />
    </>
    );
}

export default App;
