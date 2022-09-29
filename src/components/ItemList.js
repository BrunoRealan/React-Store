import { useEffect , useState } from "react";


const ItemList = () => {

    const [product, setProduct] = useState([]);


    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = ()=> {
        const URL = "https://raw.githubusercontent.com/BrunoRealan/React-Store/main/src/resources/Products.json"

        fetch(URL)
            .then(response => response.json())
            .then(data => console.log(data))
    }
    
    return (
        <>
            <div>
                {product.map (p => <img key={p.id}>{p.img}</img>)}
            </div>
        </>
    )

}

export default ItemList;