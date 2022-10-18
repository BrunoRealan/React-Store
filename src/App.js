import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CartDrawer from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';
import ItemCategory from './components/ItemCategory';
import './App.css';
import { CartProvider } from './context/Context';


function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetail />} />
            <Route path={"/category/:type"} element={<ItemCategory />} />
            <Route path={"cart/"} element={<CartDrawer />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
};


export default App;
