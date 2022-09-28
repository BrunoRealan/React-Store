const ItemCard = ({ item }) => {

    const styles = {
        name: "font-medium text-xs text-gray-700 tracking-wider leading-loose uppercase",
        price: "font-normal text-xs text-gray-600 tracking-widest leading-loose uppercase"
    }

    return (
        <div className="grid max-w-full grid-cols-1 gap-3 m-auto md:grid-cols-2 lg:grid-cols-4 lg:max-w-7xl">
            <img></img>
        </div>
    )
}

export default ItemCard