
import React from "react"
import { useNavigate } from "react-router-dom"

import '../../Styles/reset.scss'
import './About.scss'

const About = () => {

    const navigate = useNavigate()

    const btn__back = () => {
        navigate("/")
    }


    return(

        <div className="container">

            <h1>Aquí va info a cerca de la Empresa</h1>
            <hr></hr>
            <button onClick={btn__back}>Volver</button>
            

        </div>
        
    )
}

export default About