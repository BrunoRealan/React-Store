import { useEffect, useState } from "react";
import { getFirestore, getDocs, collection } from "firebase/firestore"
import ItemCard from "./ItemCard";

//Catálogo de Productos
const ItemListContainer = () => {

    //UseState & UseEffect
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
    }, []);

    //Función para traer los productos de Firebase
    const getProducts = () => {
        const db = getFirestore();
        const myCollection = collection(db, "products");

        getDocs(myCollection)
            .then(snapshot => {
                const data = snapshot.docs.map(e => ({ id: e.id, ...e.data() }))
                setProducts(data);
            });
    };

    //Función Render
    return (
        <>
            <div className="grid gap-10 p-24 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 justify-items-center ">
                {products.map(p => <ItemCard key={p.id} {...p} />)}
            </div>
        </>
    );
};


export default ItemListContainer;