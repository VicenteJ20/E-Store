import React from "react"
import { useNavigate } from "react-router-dom"

import '../../Styles/reset.scss'
import './Account.scss'

const Account = () => {

    const navigate = useNavigate()

    const btn__logout = () => {
        navigate("/")
    }


    return(

        <div className="container">

            <h1>Aquí va el login del usuario</h1>
            <hr></hr>
            <button onClick={btn__logout}>Logout</button>
            

        </div>
        
    )
}

export default Account