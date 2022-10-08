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

    // Función Fetch
    const getProducts = () => {
        const URL = "https://raw.githubusercontent.com/BrunoRealan/React-Store/main/src/resources/Products.json";

        fetch(URL)
            .then(response => response.json())
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