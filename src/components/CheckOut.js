import { useState } from "react";
import { useCart } from "../context/Context";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";

//Checkout
const Checkout = () => {

    // Estilos del checkout
    const styles = {
        title: "font-medium font-bebas text-xl text-base-content tracking-wider leading-tight uppercase",
        text: "font-normal text-sm text-base-content tracking-wide leading-normal font-bebas",
        accentuate: "font-medium text-gray-700 tracking-wider font-bebas leading-loose uppercase",
        input: "px-2 border-b border-base-300 placeholder-base-content py-4 w-full ",
        p: "mt-6 text-center md:w-9/12 lg:w-7/12 ",
        button: "font-medium tracking-wider uppercase font-bebas bg-neutral-focus text-lg text-center py-3 mt-4 btn"
    };

    // Contexto del carrito
    const { cartItems, cartLenght, clearCart, getTotal } = useCart();

    // Use states que permiten obtener el id de la compra, mostrar un modal final y obtener los datos del cliente
    const [idCompra, setIdCompra] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [buyer, setBuyer] = useState({
        name: "",
        surname: "",
        telephone: "",
        email: "",
        emailConfirm: "",
    });

    // Expresiones regulares para los campos e-mail y teléfono
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const telephoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{1,6}$/im;

    // Obtener fecha en que se realizó la compra
    const orderDate = new Date().toLocaleDateString();

    // Obtener los datos del cliente
    const handleSubmitChange = (e) => {
        setBuyer({ ...buyer, [e.target.name]: e.target.value });
    };

    // Generación de la orden, con información del cliente, los items, el precio y la fecha en que se realizó la compra
    function orderHandler() {
        const order = {
            buyer,
            item: cartItems,
            price: getTotal(),
            date: orderDate,
        };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");

        addDoc(ordersCollection, order).then(({ id }) => {
            setIdCompra(id);
        });
    };

    // Render del checkout
    return (
        <>
            {/* Contenedor checkout */}
            <div className="flex items-center justify-center mx-6 my-5 xl:max-w-7xl xl:mx-auto lg:my-10">
                <div className="flex flex-col items-center justify-center w-full">
                    <h1 className={(styles.title) + " self-start mb-6"}>Checkout</h1>
                    <div className="flex flex-col items-start justify-start w-full lg:flex-row">

                        {/* Resúmen */}
                        <div className="flex flex-col self-start w-full my-6 mr-6 md:w-1/2">
                            <h2 className={styles.accentuate}>Resúmen</h2>
                            <div className="flex flex-col p-4 mt-6 border border-gray-200">
                                <div className={"flex flex-row justify-between " + (styles.text)}>
                                    <p>Cantidad de items:</p>
                                    <p>{cartLenght()}</p>
                                </div>
                                <div className={"flex flex-row justify-between " + (styles.text)}>
                                    <p>Gastos de envío:</p>
                                    <p>¡Envío gratis!</p>
                                </div>
                                <div className={"flex flex-row justify-between font-semibold mt-10 " + (styles.accentuate)}>
                                    <p>Total:</p>
                                    <p>{getTotal()}</p>
                                </div>
                            </div>
                            <Link to='/cart' className={(styles.text) + " flex flex-row items-center mt-3 lowercase"}>
                                Volver al carrito
                            </Link>
                        </div>

                        {/* Detalle de la factura */}
                        <div className="flex flex-col items-center w-full mt-6 mb-3 lg:mt-0">

                            {/* Formulario */}
                            <form className="space-y-6">
                                <h2 className={styles.accentuate}>Detalles de facturación</h2>
                                <input
                                    className={(styles.input) + (styles.text)}
                                    id="name"
                                    type="text"
                                    name="name"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="Nombre"
                                />
                                <input
                                    className={(styles.input) + (styles.text)}
                                    id="surname"
                                    type="text"
                                    name="surname"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="Apellido"
                                />
                                <input
                                    className={(styles.input) + (styles.text)}
                                    id="telephone"
                                    type="tel"
                                    name="telephone"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="Teléfono"
                                />
                                <input
                                    className={(styles.input) + (styles.text)}
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="E-mail"
                                />
                                <input
                                    className={(styles.input) + (styles.text)}
                                    id="emailConfirm"
                                    type="email"
                                    name="emailConfirm"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="Confirmar E-Mail"
                                />
                            </form>

                            {/* Con todos los inputs completados correctamente, se habilita el botón para proceder con el pago */}
                            {buyer.name && buyer.surname && buyer.telephone && (buyer.email === buyer.emailConfirm) && telephoneRegex.test(buyer.telephone) && emailRegex.test(buyer.email, buyer.emailConfirm)
                                ? ( <input
                                        onClick={() => { orderHandler(); setShowModal(true) }}
                                        className={(styles.button) + " bg-neutral-focus w-9/12 text-center py-3 mt-6"}
                                        type="submit"
                                        value="Proceder al pago"
                                    />
                                ) : (
                                    <input
                                        className={(styles.button) + " bg-base-200 w-9/12 text-center"}
                                        type="submit"
                                        value="Proceder al pago"
                                        disabled
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* Contenedor modal final */}
            <div className={`${showModal ? "flex" : "hidden"} inset-0 fixed w-full h-full bg-neutral`}>
                <div className="container items-center justify-center px-4 py-20 mx-auto md:px-10 place-self-center">
                    <div className="flex flex-col items-center justify-center px-3 py-12 bg-white md:px-4">
                        <h2 className={"text-center md:w-9/12 lg:w-7/12" + (styles.title)}>¡Muchas gracias por tu compra {(buyer.name).toUpperCase()}!</h2>
                        <p className={(styles.p) + (styles.text)}>Te enviamos un mail a {(buyer.email).toLowerCase()} con tu orden de compra:</p>
                        <p className={(styles.p) + (styles.text)}>ID: {idCompra}.</p>
                        <p className={(styles.p) + (styles.text)}>¡Hasta la próxima!</p>
                        <Link to="/" className="flex justify-center mt-6">
                            <button onClick={clearCart} className={(styles.button)}>
                                Seguir comprando
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;