import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';
import ItemCategory from './components/ItemCategory';
import Checkout from './components/CheckOut';
import { CartProvider } from './context/Context';
import './App.css';


function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <div className="divContainer">
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetail />} />
              <Route path="/category/:type" element={<ItemCategory />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/cart/checkout" element={<Checkout />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
};


export default App;
