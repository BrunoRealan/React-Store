import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCard from "./ItemCard";

// Items por Categoría
const ItemCategory = () => {

    // UseState & UseParams
    const { type: categoryID } = useParams();
    const [products, setProducts] = useState([]);

    // UseEffect 
    useEffect(() => {
        getProducts()
        // eslint-disable-next-line
    }, [categoryID]);

    //Función para traer el producto de Firebase y filtrar por tipo de producto
    const getProducts = () => {
        const db = getFirestore();
        const myCollection = collection(db, "products");
        getDocs(myCollection)
            .then(snapshot => snapshot.docs.map(e => ({ id: e.id, ...e.data() })))
            .then(data => data.filter(p => p.type === categoryID))
            .then(newData => setProducts(newData));
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


export default ItemCategory;