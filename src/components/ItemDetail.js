import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/Context";
import ItemUnitys from "./ItemUnitys";
import { getDoc, getFirestore, doc } from "firebase/firestore"

// Detalle del Item
const ItemDetail = () => {

    // UseState & UseParams
    const { addItem } = useCart();
    const { id: itemId } = useParams();
    const [item, setItem] = useState([]);

    //UseEffect
    useEffect(() => {
        getProducts();
        // eslint-disable-next-line
    }, [itemId]);

    const getProducts = () => {
        const db = getFirestore()
        const itemDoc = doc(db, "products", itemId)

        getDoc(itemDoc)
            .then(snapshot => setItem({ id: snapshot.id, ...snapshot.data() }))
    };

    const addToCart = (quantity) => {
        addItem(item, quantity)
    }

    //Función Render
    return (
        <>
            <div className="flex flex-col items-center max-w-full mx-auto mt-5 lg:mb-14 lg:mt-14 lg:max-w-7xl">
                <div className="shadow-xl card lg:card-side bg-base-200">
                    <img src={item.imgA} className="w-full lg:w-2/3" alt={item.name} />
                    <div className="card-body">
                        <h2 className="card-title">Gafas: {item.name}</h2>
                        <p>{item.detail}</p>
                        <p className="mt-2 mb-2 text-xl font-medium text-success font-bebas">USD ${item.price}</p>
                        <ItemUnitys stock={item.stock} addToCart={addToCart} />
                    </div>
                </div>
            </div>
        </>
    );
    ;
}

export default ItemDetail;