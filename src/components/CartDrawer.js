import ItemUnitys from "./ItemUnitys";

const CartDrawer = ({ children }) => {
    return (
        <>
            <div className="drawer drawer-end">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/*  Content here */}
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="p-4 overflow-y-auto menu w-80 bg-base-100 text-base-content">
                        {/* Cart content here  */}
                        <li><a>Cart Item 1</a></li>
                        <li><a>Cart Item 2</a></li>
                        <ItemUnitys/>
                    </ul>
                </div>
            </div>
        </>
    )
};

export default CartDrawer;