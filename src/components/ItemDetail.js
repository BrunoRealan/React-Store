import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemUnitys from "./ItemUnitys"

const ItemDetail = () => {
    const { id: itemId } = useParams()
    const [item, setItem] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = () => {
        const URL = "https://raw.githubusercontent.com/BrunoRealan/React-Store/main/src/resources/Products.json"

        fetch(URL)
            .then(response => response.json())
            .then(data => data.find(i => i.id === itemId))
            .then(item => setItem(item))
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center max-w-full mx-auto lg:flex-row lg:max-w-7xl">
                <div className="shadow-xl card lg:card-side bg-base-200">
                    <img src={item.imgA} className="w-1/2" alt={item.name} />
                    <div className="card-body">
                        <h2 className="card-title">Gafas: {item.name}</h2>
                        <p>{item.detail}</p>
                        <p className="mt-2 mb-2 text-xl font-medium text-success font-bebas">USD ${item.price}</p>
                        <div className="justify-end">
                            <ItemUnitys />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail