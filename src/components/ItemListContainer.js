import { useEffect, useState } from "react";
import { getFirestore, getDocs, collection } from "firebase/firestore"
import ItemCard from "./ItemCard";
import Spinner from "./Spinner";

//Catálogo de Productos
const ItemListContainer = () => {

    //UseState & UseEffect
    const [products, setProducts] = useState([]);
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        getProducts();
    }, []);

    //Consigue la DB desde Firebase
    const getProducts = () => {
        setSpinner(true);
        const db = getFirestore();
        const myCollection = collection(db, "products");

        getDocs(myCollection)
            .then(snapshot => {
                const data = snapshot.docs.map(e => ({ id: e.id, ...e.data() }));
                setProducts(data);
                setSpinner(false);
            });
    };

    //Render del Spinner mientras carga y luego crea Cards por cada producto
    return (
        <>
            {spinner ? <Spinner /> :
                <div className="grid gap-10 p-24 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 justify-items-center ">
                    {products.map(p => <ItemCard key={p.id} {...p} />)}
                </div>}
        </>
    );
};


export default ItemListContainer;