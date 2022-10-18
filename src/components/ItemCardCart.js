import ItemUnitys from "./ItemUnitys";

const ItemCardCart = ({ id, img, name, price }) => {


    return (
        <>
            <div className="shadow-xl card card-side bg-base-100" key={id}>
                <img src={img} alt={name} className="w-4" />
                <div className="p-1 card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{price}</p>
                    <div className="flex-col justify-end card-actions ">
                        <ItemUnitys />
                    </div>
                </div>
            </div>
        </>
    );
};


export default ItemCardCart;