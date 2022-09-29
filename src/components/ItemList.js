import { useEffect, useState } from "react";


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
            {product.map(p =>
                <div className="w-full carousel" key={p.id}>
                    <div id="slide1" className="relative w-full carousel-item">
                        <img src={p.img} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="relative w-full carousel-item">
                        <img src={p.img2} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="relative w-full carousel-item">
                        <img src={p.img3} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            )}
        </>
    )

}

export default ItemList;