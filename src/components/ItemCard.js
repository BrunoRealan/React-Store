import { Link } from "react-router-dom"

const ItemCard = ({id, name, imgA, price}) => {

    const styles = {
        name: "font-medium text-xs text-gray-700 tracking-wider leading-loose uppercase",
        price: "font-normal text-xs text-gray-600 tracking-widest leading-loose uppercase"
    }

    return (
        <div className="shadow-xl w-80 card card-compact bg-base-100" key={id}>
            <Link to={`/item/${id}`}>
                <figure><img src={imgA} alt={name} /></figure>
            </Link>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="mt-2 mb-2 text-xl font-medium text-success font-bebas">USD ${price}</p>
                <div className="justify-end card-actions">
                    <button className="text-base btn btn-primary font-bebas">Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCard