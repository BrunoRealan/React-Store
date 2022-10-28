import { NavLink } from "react-router-dom";
import { useCart } from "../context/Context";

const Navbar = ({ type }) => {

    //Estilos del NavBar
    const styles = {
        nav: "sticky top-0 z-50 h-24 p-4 border border-base-300 navbar bg-base-200 drop-shadow-lg",
        text: "text-lg font-medium font-bebas drop-shadow-sm",
        center: "justify-center flex-1 border-base-300",
        dropContent: "dropdown-content bg-base-200 border drop-shadow-md",
        buttonGost: "btn btn-ghost",
        dropDown: "dropdown dropdown-end"
    };

    //Contexto del Carrito
    const { cartLenght, getTotal } = useCart();

    //Render del NavBar
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.center}>
                    <NavLink to="/"><img className="w-20 drop-shadow-lg" src={require("../resources/Ray-Ban_logo.jpg")} alt="Ray-Ban Logo" /></NavLink>
                </div>
                <div className={styles.center}>
                    <div className={styles.dropDown}>
                        <label tabIndex={0} className={(styles.button) + " rounded-btn " + (styles.text)}>Tipos de Lentes</label>
                        <ul tabIndex={0} className={(styles.dropContent) + " items-center p-2 mt-4 menu rounded-box w-52"}>
                            <NavLink to={`/category/${type = "SUNGLASS"}`}> <li className={(styles.text) + " m-2"}>Lentes de Sol</li> </NavLink>
                            <NavLink to={`/category/${type = "EYEGLASS"}`}> <li className={(styles.text) + " m-2"}>Lentes de Vision</li> </NavLink>
                        </ul>
                    </div>
                </div>
                <div className={styles.center}>
                    <div className={styles.dropDown}>
                        <label tabIndex={0} className={(styles.button) + " btn-circle"}>
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-6 drop-shadow" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="font-thin badge badge-sm indicator-item drop-shadow">{cartLenght()}</span>
                            </div>
                        </label>
                        <div tabIndex={0} className={(styles.dropContent) + " w-48 mt-3 card card-compact"}>
                            <div className="items-center card-body">
                                <span className={(styles.text)}>{cartLenght()} Items</span>
                                <span className={(styles.text) + " text-success"}>USD ${getTotal()}</span>
                                <div className="card-actions">
                                    <NavLink to="/cart/"><label className={(styles.text) + " btn-sm btn btn-wide btn-primary"}>Ver Cart</label></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;