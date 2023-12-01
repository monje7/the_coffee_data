import React,{useEffect,useState} from "react";
import '../style/dashboard.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser,faHelmetSafety,faClockRotateLeft,faMugSaucer,faToolbox,faMagnifyingGlassChart,faChartColumn,faPhone,faSliders}  from'@fortawesome/free-solid-svg-icons'
// import {faUser} from '@fortawesome/free-brands-svg-icons'
import api from "../services/api";



function Dashboard() {
    return(
        <div className="main-container">
            <nav className="nav">
                <div className="container-title">
                    <h1 className="title">THE COFFEE DATA</h1>
                </div>


                <div className="container-username">
                    <div className="container-icon">
                        <FontAwesomeIcon icon={faUser} className="FaUser" />
                    </div>
                    <div className="username">
                        <h2>Daniel Cordoba</h2>
                    </div>
                </div>

                <div className="lista-items">
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faHelmetSafety} className="icon" />
                            Administrador
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faClockRotateLeft} className="icon"/>
                            Historia
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faMugSaucer} className="icon"/>
                            Mi producto
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faToolbox} className="icon"/>
                            Servicio
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faMagnifyingGlassChart} className="icon"/>
                            Analisis
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faChartColumn} className="icon"/>
                            Comparacion
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPhone}className="icon" />
                            Contacto
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faSliders} className="icon"/>
                            Configuracion
                        </li>


                    </ul>
                </div>
            </nav>
        </div>
    );    
}

export default Dashboard;