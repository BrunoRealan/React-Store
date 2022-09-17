const Navbar = () => {
    return (
        <>
            <nav className="p-4 border border-base-300 navbar bg-base-200 drop-shadow-md">
                <div className="justify-center flex-1">
                    <img className="w-20" src={require("../resources/Ray-Ban_logo.jpg")}/>
                </div>
                <div className="justify-center flex-1">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="text-lg btn btn-ghost rounded-btn">Tipos de Lentes</label>
                        <ul tabIndex={0} className="p-2 mt-4 border shadow border-base-300 menu dropdown-content bg-base-200 rounded-box w-52">
                            <li><a>Lentes de Sol</a></li>
                            <li><a>Lentes de vision</a></li>
                        </ul>
                    </div>
                </div>
                <div className="justify-center flex-1">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-xl indicator-item">8</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 border shadow card card-compact dropdown-content w-52 bg-base-200 border-base-300">
                            <div className="card-body">
                                <span className="text-lg font-bold">8 Items</span>
                                <span className="text-success">Subtotal: $999.99</span>
                                <div className="card-actions">
                                    <label htmlFor="my-drawer" className="text-base drawer-button btn btn-primary">Ver Cart</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default Navbar;