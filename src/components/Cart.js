import { Link } from "react-router-dom";
import { useCart } from "../context/Context";

// Carrito de compras
const Cart = () => {

    // Estilos del carrito
    const styles = {
        title: "font-medium font-bebas text-xl tracking-wider leading-normal uppercase mb-10",
        text: "font-light text-sm tracking-wide leading-normal lowercase",
        accentuate: "font-medium font-bebas text-md tracking-wider leading-loose uppercase",
        button: "font-medium tracking-wider uppercase text-white bg-neutral-focus text-center py-3 mt-4 btn",
        symbol: "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer text-gray-400 border border-gray-400 w-7 h-7 flex items-center justify-center p-0.5",
        counter: "border border-x-1 border-x-white h-full text-center w-5 p-0.5"
    };

    // Contexto del carrito
    const { cartItems, removeItem, clearCart, cartLenght, getSubtotal, getTotal } = useCart();

    // Render del carrito
    return (
        <>
            {/* Si el carrito esta vacío, se muestra un mensaje de advertencia, si no, se muestra su contenido */}
            {cartLenght() === 0 ? (

                // Mensaje de advertencia
                <div className="flex flex-col min-h-screen mb-16">
                    <div className="m-auto mt-64 text-center">
                        <p className={styles.accentuate} >¡Tu carrito está vacío!</p>
                        <p className={styles.accentuate}>Por favor, agrega uno o mas productos para poder comprar.</p>
                    </div>
                </div>

            ) : (

                // Contenido del carrito
                <div className="mx-6 md:my-20 ">
                    <div className="flex flex-col justify-between w-full lg:max-w-7xl xl:m-auto">

                        {/* Título */}
                        <h1 className={(styles.title) + " self-center mb-6"}>Carrito</h1>

                        {/* Tabla de contenido */}
                        <table className="inline-block overflow-x-auto whitespace-nowrap">

                            {/* Nombre de columnas */}
                            <thead className="h-10 text-center">
                                <tr className="border-b border-base-300">
                                    <th className={(styles.accentuate) + " pl-4"}>Producto</th>
                                    <th className={(styles.accentuate) + " px-6 lg:px-16 xl:px-32"}>Precio</th>
                                    <th className={(styles.accentuate) + " px-6 md:px-2 lg:px-8 xl:px-12"}>Cantidad</th>
                                    <th className={(styles.accentuate) + " px-6 md:px-2 lg:px-16 xl:px-28"}>Subtotal</th>
                                    <th />
                                </tr>
                            </thead>

                            {/* Items en el carrito */}
                            <tbody className="w-full text-center">
                                {cartItems.map((item) => (
                                    <tr key={item.id} className="border-b border-base-300">
                                        <th className="flex flex-row items-center pr-40 justify-left md:pr-0">
                                            <img className="p-4 w-80" src={item.imgA} alt={item.name} />
                                            <div className="flex flex-col text-left">
                                                <p className={styles.accentuate} >{item.name}</p>
                                                <p className={styles.text} > {item.type} — {item.stock}</p>
                                            </div>
                                        </th>
                                        <th className={styles.text} >{item.price}</th>
                                        <th className={styles.text} >{item.quantity}</th>
                                        <th className={styles.text} >{getSubtotal(item.price, item.quantity)}</th>
                                        <th className="px-4 lg:pl-2 xl:pl-24">
                                            <button onClick={() => removeItem(item.id)} className="btn btn-square btn-outline">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                            </button>
                                        </th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Detalles del carrito */}
                        <div className="flex flex-col justify-between mx-4 mt-6 mb-3 md:flex-row">

                            {/* Vaciar carrito */}
                            <button onClick={() => clearCart()} className={(styles.accentuate) + 'flex flex-row items-center self-start my-4 lg:my-10'}>
                                x vaciar carrito
                            </button>

                            {/* Resúmen de compra */}
                            <div className="flex flex-col self-start w-full lg:mt-10 md:w-2/5">
                                <div className={(styles.text) + " flex flex-row justify-between"}>
                                    <p>Cantidad de items:</p>
                                    <p className="font-semibold">{cartLenght()}</p>
                                </div>
                                <div className={(styles.text) + " flex flex-row justify-between"}>
                                    <p>Gastos de envío:</p>
                                    <p>¡Envío gratis!</p>
                                </div>
                                <div className={(styles.accentuate) + " flex flex-row justify-between font-semibold"}>
                                    <p>Total:</p>
                                    <p>USD ${getTotal()}</p>
                                </div>
                                <Link to='/cart/checkout' className={(styles.button)}>Comprar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Cart;