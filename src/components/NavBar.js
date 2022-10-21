import { NavLink } from "react-router-dom";
import { useCart } from "../context/Context";

const Navbar = ({ type, name }) => {

    const {cartLenght, getTotal} = useCart();

    //Función Render
    return (
        <>
            <nav className="sticky top-0 z-50 h-24 p-4 border border-base-300 navbar bg-base-200 drop-shadow-lg">
                <div className="justify-center flex-1">
                    <a href="/"><img className="w-20 drop-shadow-lg" src={require("../resources/Ray-Ban_logo.jpg")} alt={name} /></a>
                </div>
                <div className="justify-center flex-1">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="text-lg btn btn-ghost rounded-btn font-bebas drop-shadow-sm">Tipos de Lentes</label>
                        <ul tabIndex={0} className="items-center p-2 mt-4 border drop-shadow-md border-base-300 menu dropdown-content bg-base-200 rounded-box w-52">
                            <NavLink to={`/category/${type = "SUNGLASS"}`}> <li className="m-2 text-lg font-bebas drop-shadow-sm">Lentes de Sol</li></NavLink>
                            <NavLink to={`/category/${type = "EYEGLASS"}`}> <li className="m-2 text-lg font-bebas drop-shadow-sm">Lentes de Vision</li></NavLink>
                        </ul>
                    </div>
                </div>
                <div className="justify-center flex-1">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-6 drop-shadow" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="font-thin badge badge-sm indicator-item drop-shadow">{cartLenght()}</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="w-48 mt-3 border shadow card card-compact dropdown-content bg-base-200 border-base-300">
                            <div className="items-center card-body">
                                <span className="text-lg font-medium font-bebas drop-shadow-md">{cartLenght()} Items</span>
                                <span className="text-base font-medium text-success font-bebas drop-shadow-sm">USD ${getTotal()}</span>
                                <div className="card-actions">
                                    <NavLink to={`/cart/`}><label className="text-base btn-sm btn btn-wide btn-primary font-bebas drop-shadow">Ver Cart</label></NavLink>
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