import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer' ;
import CartWidget from './components/CartWidget' ;

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a TechHouse"/>
    </>
    );
}


export default App;
