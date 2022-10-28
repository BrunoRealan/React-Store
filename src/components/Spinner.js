//Spinner utilizado desde DaisyUI
const Spinner = () => {

    return (
        <div className="flex flex-col min-h-screen -mb-24">
            <div className="m-auto mt-64">
                <button className="btn loading">cargando</button>
            </div>
        </div>
    );
};

export default Spinner;