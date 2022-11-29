import React from 'react'
import '../../Styles/reset.scss'
import './Footer.scss'
import {BsCashCoin} from 'react-icons/bs'

const Footer = () => {
    return(
        <section className='section1'>
            <div className="boxes">
                <div className='description box'>
                    <div className="description_M-Store">
                        <h1 className='description_M-Store_h1 title'>M-Store</h1>
                        <p className='description_M-Store_p'>M-Store, disfruta de los mejores productos a solo un clic de distancia.</p>
                    </div>

                    <h1 className='description_payments title'>Formas de pago disponibles</h1>
                    <BsCashCoin />
                </div>

                <div className='about box'>
                    <h1 className='about_title title'>Acerca de</h1>
                    <nav className='about_nav nav'>
                        <a href='#' className='about_nav_a a'>Acerca de M-Store</a>
                        <a href='#' className='about_nav_a a'>Noticias</a>
                        <a href='#' className='about_nav_a a'>Ayuda</a>
                        <a href='#' className='about_nav_a a'>Socios</a>
                        <a href='#' className='about_nav_a a'>Guías y tutoriales</a>
                    </nav>
                </div>

                <div className='service box'>
                    <h1 className='service_title title'>Servicios</h1>
                    <nav className='service_nav nav'>
                        <a href='#' className='service_nav_a a'>Codigos de descuento</a>
                        <a href='#' className='service_nav_a a'>Envio y Delivery</a>
                        <a href='#' className='service_nav_a a'>Recoger compra</a>
                        <a href='#' className='service_nav_a a'>Resgistrar cuenta</a>
                    </nav>
                </div>

                <div className='aid box'>
                    <h1 className='aid_title title'>Ayuda</h1>
                    <nav className='service_nav nav'>
                        <a href='#' className='a'>Ayuda de M-Store</a>
                        <a href='#' className='a'>Devoluciones</a>
                        <a href='#' className='a'>Rastrear pedidos</a>
                        <a href='#' className='a'>Contactarnos</a>
                        <a href='#' className='a'>Fraudes</a>
                        <a href='#' className='a'>Seguridad</a>
                    </nav>
                </div>
            </div>

            <div className='author'>
                <span className='author_span'>Diseñado por Vicente Jorquera. Desarrollado por Vicente Jorquera, Catalina Zapata, Gaston, Diego, David.</span>
            </div>
        </section>

        
    )
}

export default Footer