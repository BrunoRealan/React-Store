import { useState } from "react";

//Contador
const ItemCounter = ({ stock, addToCart }) => {

    //Estilos del contador
    const styles = {
        div: "flex flex-row items-center justify-center m-1 lg:justify-end",
        button: "content-center pt-1 pb-1 btn btn-sm",
        counter: "flex justify-center ml-3 mr-3 text-2xl font-medium font-bebas",
        addButton : "text-lg font-thin uppercase font-bebas btn btn-sm"
    };

    //UseState
    const [counter, setCounter] = useState(1);

    //Funcion Restar
    const itemDecrease = () => {
        counter > 1 ? setCounter(counter - 1) : setCounter(counter)
    };

    //Función Sumar
    const itemAdd = () => {
        counter < Number(stock) ? setCounter(counter + 1) : setCounter(counter)
    };

    //Render del componente contador
    return (
        <>
            <div className={styles.div}>
                <button onClick={itemDecrease} className={(styles.button) + " text-2xl"}>-</button>
                <div className={styles.counter}>{counter}</div>
                <button onClick={itemAdd} className={(styles.button) + " text-xl"}>+</button>
            </div>
            <div className={styles.div}>
                <button onClick={() => addToCart(counter)} className={styles.addButton}>Agregar al carrito</button>
            </div>
        </>
    );
};


export default ItemCounter;