import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CartWidget from './components/CartWidget';
import ItemList from './components/ItemList';

function App() {
  return (
    <>
      <CartWidget>
        <NavBar />
        <ItemList />
        <Footer />
      </CartWidget>
    </>
  );
}


export default App;
