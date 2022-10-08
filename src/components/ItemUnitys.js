import { useState } from "react";

//Contador (en prueba)
const ItemUnitys = () => {
    const product = {
        Name: "Lentes X de sol",
        Price: 300,
        Stock: 5
    };

    //UseState
    const [add, setAdd] = useState(1);

    //Funcion Sumar
    const clickDecrease = () => {
        add > 1 ? setAdd(add - 1) : setAdd(add)
    };

    //Función Restar
    const clickAdd = () => {
        add < product.Stock ? setAdd(add + 1) : setAdd(add)
    };

    //Función Render
    return (
        <>
            <div className="flex flex-row items-center justify-end m-3">
                <button onClick={clickDecrease} className="pt-1 pb-1 btn btn-xs">-</button>
                <div className="flex justify-center ml-3 mr-3 text-2xl font-medium font-bebas">{add}</div>
                <button onClick={clickAdd} className="pt-1 pb-1 btn btn-xs">+</button>
            </div>
        </>
    );
};


export default ItemUnitys;