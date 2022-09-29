import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CartWidget from './components/CartWidget';
import ItemList from './components/ItemList';
import { BrowserRouter, Routes , Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartWidget>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<ItemList />} />
          </Routes>
          <Footer />
        </CartWidget>
      </BrowserRouter>
    </>
  );
}


export default App;
