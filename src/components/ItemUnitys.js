import { useState } from "react";

const ItemUnitys = () => {
    const product = {
        Name: "Lentes X de sol",
        Price: 300,
        Stock: 5
    };

    const [add, setAdd] = useState(1);

    const clickDecrease = () => {
        add > 1 ? setAdd(add - 1) : setAdd(add)
    };

    const clickAdd = () => {
        add < product.Stock ? setAdd(add + 1) : setAdd(add)
    };


    return (
        <>
            <div className="flex flex-row justify-end m-3">
                <button onClick={clickDecrease} className="pt-1 pb-1 btn btn-xs">-</button>
                <div className="flex justify-center ml-3 mr-3 font-semibold">{add}</div>
                <button onClick={clickAdd} className="pt-1 pb-1 btn btn-xs">+</button>
            </div>
        </>
    )
};

export default ItemUnitys