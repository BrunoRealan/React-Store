import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ItemCard from "./ItemCard";
import Spinner from "./Spinner";

// Items por Categoría
const ItemCategory = () => {

    // UseState & UseParams
    const [products, setProducts] = useState([]);
    const [spinner, setSpinner] = useState(false);
    const { type: categoryID } = useParams();

    // UseEffect 
    useEffect(() => {
        getProducts()
        // eslint-disable-next-line
    }, [categoryID]);

    //Función para traer el producto de Firebase y filtrar por tipo de producto
    const getProducts = () => {
        setSpinner(true);
        const db = getFirestore();
        const myCollection = collection(db, "products");

        getDocs(myCollection)
            .then(snapshot => snapshot.docs.map(e => ({ id: e.id, ...e.data() })))
            .then(data => data.filter(p => p.type === categoryID))
            .then(newData => {
                setProducts(newData);
                setSpinner(false);
            });
    };

    //Render del Spiner mientras carga y luego del listado de productos por categoría
    return (
        <>
            {spinner ? <Spinner /> :
                <div className="grid gap-10 p-24 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 justify-items-center ">
                    {products.map(p => <ItemCard key={p.id} {...p} />)}
                </div>}
        </>
    );
};


export default ItemCategory;