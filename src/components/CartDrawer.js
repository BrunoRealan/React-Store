import ItemUnitys from "./ItemUnitys";

//Carrito Drawer
const CartDrawer = ({ children }) => {

    //Función Render
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
                        <li>Cart Item 1</li>
                        <ItemUnitys/>
                        <li>Cart Item 2</li>
                        <ItemUnitys/>
                    </ul>
                </div>
            </div>
        </>
    )
};

export default CartDrawer;