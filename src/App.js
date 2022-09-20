import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer' ;
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Footer from './components/Footer';
import CartContextProvider from './components/CartContext';

const App = () => {
  return (
      <CartContextProvider value={[]}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:id' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </CartContextProvider>
    );
    
};

export default App;
