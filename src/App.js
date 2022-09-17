import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CartWidget from './components/CartWidget';

function App() {
  return (
    <>
      <CartWidget>
        <NavBar />
          <h1>Hola Mundo!</h1>
          <ul>
            <li>Numero 1</li>
            <li>Numero 2</li>
          </ul>
        <Footer />
      </CartWidget>
    </>
  );
}

export default App;
