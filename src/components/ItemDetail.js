import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/Context";
import { getDoc, getFirestore, doc } from "firebase/firestore";
import ItemCounter from "./ItemCounter";
import Spinner from "./Spinner";

// Detalle del Item
const ItemDetail = () => {

    //Estilos del item detallado
    const styles = {
        itemContainer: "flex flex-col items-center max-w-full mx-auto my-5 lg:my-16 lg:max-w-7xl",
        itemCard: "shadow-xl card lg:card-side bg-base-100",
        divButton: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2",
        slide: "relative w-full carousel-item",
        slideButton: "btn btn-circle",
        text: "font-light text-md tracking-wide leading-normal",
        price: "my-2 text-xl font-medium text-success font-bebas"
    };

    // UseStates, UseParams y UseContext del Carrito (useCart)
    const [item, setItem] = useState([]);
    const [spinner, setSpinner] = useState(false);
    const { id: itemId } = useParams();
    const { addItem } = useCart();

    //UseEffect
    useEffect(() => {
        getProducts();
        // eslint-disable-next-line
    }, [itemId]);

    //Consigue la DB desde Firebase utilizando el id del producto (useParams)
    const getProducts = () => {
        setSpinner(true);
        const db = getFirestore();
        const itemDoc = doc(db, "products", itemId);

        getDoc(itemDoc)
            .then(snapshot => {
                setItem({ id: snapshot.id, ...snapshot.data() });
                setSpinner(false);
            });
    };

    //Handler para addItem
    const addToCart = (quantity) => {
        addItem(item, quantity)
    };

    //Render del Spinner mientras carga y luego del item detallado
    return (
        <>
            {spinner ? <Spinner /> :
                <div className={styles.itemContainer}>
                    <div className={styles.itemCard}>
                        <div className="carousel">
                            <div id="slide1" className={styles.slide} >
                                <img src={item.imgA} className="w-full px-8" alt={item.name} />
                                <div className={styles.divButton}>
                                    <a href="#slide3" className={styles.slideButton}>❮</a>
                                    <a href="#slide2" className={styles.slideButton}>❯</a>
                                </div>
                            </div>
                            <div id="slide2" className={styles.slide}>
                                <img src={item.imgB} className="w-full px-10" alt={item.name} />
                                <div className={styles.divButton}>
                                    <a href="#slide1" className={styles.slideButton}>❮</a>
                                    <a href="#slide3" className={styles.slideButton}>❯</a>
                                </div>
                            </div>
                            <div id="slide3" className={styles.slide}>
                                <img src={item.imgC} className="w-full px-10" alt={item.name} />
                                <div className={styles.divButton}>
                                    <a href="#slide2" className={styles.slideButton}>❮</a>
                                    <a href="#slide1" className={styles.slideButton}>❯</a>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">Gafas: {item.name}</h2>
                            <p className={styles.text}>{item.detail}</p>
                            <p className={styles.text}>Quedan: {item.stock} en stock!</p>
                            <p className={styles.price}>USD ${item.price}</p>
                            <ItemCounter stock={item.stock} addToCart={addToCart} />
                        </div>
                    </div>
                </div>}
        </>
    );
};

export default ItemDetail;