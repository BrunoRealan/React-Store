import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/Context";
import ItemUnitys from "./ItemUnitys";

// Detalle del Item
const ItemDetail = () => {

    // UseState & UseParams
    const {addItem} = useCart();
    const { id: itemId } = useParams();
    const [item, setItem] = useState([]);

    //UseEffect
    useEffect(() => {
        getProducts();
        // eslint-disable-next-line
    }, [itemId]);

    //Función Fetch
    const getProducts = () => {
        const URL = "https://raw.githubusercontent.com/BrunoRealan/React-Store/main/src/resources/Products.json"

        fetch(URL)
            .then(response => response.json())
            .then(data => data.find(i => i.id === itemId))
            .then(item => setItem(item))
    };

    const addHandler = () => {
        addItem( item.id )
    }

    //console.log(useCart);
    //Función Render
    return (
        <>
            <div className="flex flex-col items-center justify-center max-w-full mx-auto mt-3 lg:mt-10 lg:max-w-7xl">
                <div className="shadow-xl card lg:card-side bg-base-200">
                    <img src={item.imgA} className="w-full lg:w-2/3" alt={item.name} />
                    <div className="card-body">
                        <h2 className="card-title">Gafas: {item.name}</h2>
                        <p>{item.detail}</p>
                        <p className="mt-2 mb-2 text-xl font-medium text-success font-bebas">USD ${item.price}</p>
                        <ItemUnitys />
                        <button onClick={addHandler} className="text-lg font-bebas btn btn-sm">AGREGAR AL CARRITO</button>
                    </div>
                </div>
            </div>
        </>
    );
};


export default ItemDetail;