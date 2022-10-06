import { useEffect, useState } from "react"
import ItemCard from "./ItemCard"

const ItemCategory = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = () => {
        const URL = "https://raw.githubusercontent.com/BrunoRealan/React-Store/main/src/resources/Products.json";

        fetch(URL)
            .then(response => response.json())
            .then(data => data.filter(p => p.type === "SUNGLASS"))
            .then(newData => setProducts(newData));
    }

    return (
        <>
            <div className="grid gap-5 p-24 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 justify-items-center ">
                {products.map(p => <ItemCard key={p.id} {...p} />)}
            </div>
        </>
    )
}



export default ItemCategory