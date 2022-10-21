import { useState } from "react";

//Contador (en prueba)
const ItemUnitys = ({ stock, addToCart }) => {

    //UseState
    const [counter, setCounter] = useState(1);

    //Funcion Restar
    const clickDecrease = () => {
        counter > 1 ? setCounter(counter - 1) : setCounter(counter)
    };

    //Función Sumar
    const clickAdd = () => {
        counter < Number(stock) ? setCounter(counter + 1) : setCounter(counter)
    };

    //Función Render
    return (
        <>
            <div className="flex flex-row items-center justify-end m-3">
                <button onClick={clickDecrease} className="pt-1 pb-1 btn btn-xs">-</button>
                <div className="flex justify-center ml-3 mr-3 text-2xl font-medium font-bebas">{counter}</div>
                <button onClick={clickAdd} className="pt-1 pb-1 btn btn-xs">+</button>
            </div>
            <div>
                <button onClick={()=>addToCart(counter)} className="text-lg font-bebas btn btn-sm">AGREGAR AL CARRITO</button>
            </div>
        </>
    );
};


export default ItemUnitys;