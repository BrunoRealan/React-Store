const ItemListContainer = ( {greeting}) => {
    return (
        <>
            <div className="min-h-screen hero bg-base-100">
                <div className="text-center hero-content">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Saludos {greeting}! Estamos trabajando para ud!</h1>
                        <p className="py-6">Éste sitio web está actualmente en desarrollo, gracias por su paciencia.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemListContainer;