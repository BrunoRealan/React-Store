import { Link } from "react-router-dom"

//Modelo de tarjeta del Item
const ItemCard = ({id, name, imgA, price}) => {

    //Función Render
    return (
        <div className="shadow-xl w-80 card card-compact bg-base-100" key={id}>
            <Link to={`/item/${id}`}>
                <figure><img src={imgA} alt={name} /></figure>
            </Link>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="mt-2 mb-2 text-xl font-medium text-success font-bebas">USD ${price}</p>
                <div className="justify-end card-actions">
                    <button className="text-lg font-bebas btn btn-sm btn-wide">Comprar</button>
                </div>
            </div>
        </div>
    );
};


export default ItemCard;