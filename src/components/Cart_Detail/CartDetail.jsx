
import React from 'react'
import '../../Styles/reset.scss'
import './CartDetail.scss'

import { useNavigate } from "react-router-dom"


const Cart_Detail = () => {

    const navigate = useNavigate()

    const btn__productos = () => {
        navigate("/")
    }


    return(

        <div className="container">

            <h1>Carrito de compras</h1>
            <hr></hr>

            <table className = "table">

                <thead>
                    <tr>
                    <th scope="col">Cód</th>
                    <th scope="col">Item</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Acción</th>
                    <th scope="col">SubTotal</th>
                    </tr>
                </thead>

                
                <th scope="row">156</th>
                    <td>Sillón Vintage</td>
                    <td>1</td>
                    <td>
                        <button className="btn btn-info btn-sm"> + </button>
                        <button className="btn btn-danger btn-sm"> - </button>
                    </td>
                    <td>$ <span>125.000</span></td>
                <tr></tr>

                <th scope="row">171</th>
                    <td>Sillón Heder</td>
                    <td>2</td>
                    <td>
                        <button className="btn btn-info btn-sm"> + </button>
                        <button className="btn btn-danger btn-sm"> - </button>
                    </td>
                    <td>$ <span>85.000</span></td>
                <tr></tr>


                
                <th scope="row" colspan="2" className='textTotalProductos'>Total productos</th>
                <td className="cantidad__total">3</td>
                <td>
                    <button className="btn btn-danger btn-sm" id="vaciar-carrito">
                        vaciar todo
                    </button>
                </td>
                <td className="font-weight-bold">$ <span>210.000</span></td>


                {/*
                <tfoot>
                    <tr id="footer">
                    <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
                    </tr>
                </tfoot>
                
                */}
                <br></br><br></br><br></br>
                <hr></hr>
                <button onClick={btn__productos}>Agregar más productos</button>

            </table>

        </div>
        
    )
}

export default Cart_Detail