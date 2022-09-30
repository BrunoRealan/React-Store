import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ItemList = () => {

    const [product, setProduct] = useState([]);


    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = () => {
        const URL = "https://raw.githubusercontent.com/BrunoRealan/React-Store/main/src/resources/Products.json"

        fetch(URL)
            .then(response => response.json())
            .then(data => setProduct(data))
    }

    return (
        <>
            <div className="grid gap-5 p-24 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 justify-items-center ">
                {product.map(p =>
                    <div className="shadow-xl w-80 card card-compact bg-base-100" key={p.id}>
                        <figure><img src={p.img} alt={p.name} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{p.name}</h2>
                            <p>USD ${p.price}</p>
                            <div className="justify-end card-actions">
                                <button className="text-base btn btn-primary font-bebas">Comprar</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )

}

export default ItemList;