import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <CartWidget>
        <NavBar />
        <ItemListContainer greeting={"nuevo/a visitante"}/>
        <Footer />
      </CartWidget>
    </>
  );
}


export default App;
