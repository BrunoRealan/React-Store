import { Link } from "react-router-dom"

//Modelo de tarjeta del Item
const ItemCard = ({id, name, imgA, price}) => {

    //Estilos de la card
    const styles = {
        div: "shadow-xl w-80 card card-compact bg-base-100",
        price: "mt-2 mb-2 text-xl font-medium text-success font-bebas"
    };

    //Función Render
    return (
        <div className={styles.div} key={id}>
            <Link to={`/item/${id}`}>
                <figure><img src={imgA} alt={name}  /></figure>
            </Link>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className={styles.price}>USD ${price}</p>
            </div>
        </div>
    );
};


export default ItemCard;