import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';
import ItemCategory from './components/ItemCategory';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartDrawer>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetail />} />
            <Route path={"/category/sunGlasses"} element={<ItemCategory />} />
            <Route path={"/category/eyeGlasses"} element={<ItemCategory />} />
          </Routes>
          <Footer />
        </CartDrawer>
      </BrowserRouter>
    </>
  );
}


export default App;
