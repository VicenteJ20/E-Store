const Footer = () => {
    return(
        <div className="">
            <div className="box1">
                <h1 className="M-Store title">M-Store</h1>
                <p>M-Store, disfruta de los mejores productos a solo un clic de distancia.</p>

                <h1 className="payments title">Formas de pago disponibles</h1>
            </div>

            <div className="box2">
                <h1 className="about title">Acerca de</h1>
                <nav className="nav">
                    <a href="#" className="a">Acerca de M-Store</a><br />
                    <a href="#" className="a">Noticias</a><br />
                    <a href="#" className="a">Ayuda</a><br />
                    <a href="#" className="a">Socios</a><br />
                    <a href="#" className="a">Guías y tutoriales</a><br />
                </nav>
            </div>

            <div className="box3">
                <h1 className="service title">Servicios</h1>
                <nav className="nav">
                    <a href="#" className="a">Codigos de descuento</a><br />
                    <a href="#" className="a">Envio y Delivery</a><br />
                    <a href="#" className="a">Recoger compra</a><br />
                    <a href="#" className="a">Resgistrar cuenta</a><br />
                </nav>
            </div>

            <div className="box4">
                <h1 className="aid title">Ayuda</h1>
                <nav className="nav">
                    <a href="#" className="a">Ayuda de M-Store</a><br />
                    <a href="#" className="a">Devoluciones</a><br />
                    <a href="#" className="a">Rastrear pedidos</a><br />
                    <a href="#" className="a">Contactarnos</a><br />
                    <a href="#" className="a">Fraudes</a><br />
                    <a href="#" className="a">Seguridad</a><br />
                </nav>
            </div>

            <span className="author">Diseñado por Vicente Jorquera. Desarrollado por Vicente Jorquera, Catalina Zapata, Gaston, Diego, David.</span>
        </div>

        
    )
}

export default Footer