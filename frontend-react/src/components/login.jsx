import React, { useEffect } from "react";
import '../style/loginfrom.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUser,faLock,faXmark,faPlay, faHelmetSafety, faClockRotateLeft, faMugSaucer, faToolbox, faMagnifyingGlassChart, faChartColumn, faPhone, faSliders } from '@fortawesome/free-solid-svg-icons';
import api from "../services/api";


const LoginForm = () => {
    useEffect(() => {
        window.addEventListener("load", function () {
            let sourcers = document.getElementById("sourcers");
            let script = document.createElement("script");
            script.src = "../public/js/loginfrom.js";
            sourcers.appendChild(script)
        })
    }, [])

    return (
        <>

        <img src="../../public/img/fondo4.jpg" alt="" className="fondo" />
            <header>
                <h2 className="logo">
                    <img src="img/logotrans.png" alt="logo " width="200px" />
                </h2>
                <nav className="navigation">
                    
                    <button className="btnlogin-popup">login</button>
                </nav>
            </header>

            <div className="wrapper">
                <span className="icon-close">
                <FontAwesomeIcon icon={faXmark} />
                </span>

                <div className="form-box login">
                    <h2><img src="img/nombrelogo.png" alt="logo " width="250px" /></h2>
                    <form action="#">
                        <div className="input-box">
                            <span className="icon"><FontAwesomeIcon icon={faUser} /></span>
                            <input type="email" required />
                            <label>Correo</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><FontAwesomeIcon icon={faLock} /></span>
                            <input type="password" required />
                            <label>Contraseña</label>
                        </div>
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" />
                                Recordar
                            </label>
                            <a href="#">olvidaste tu contraseña</a>
                        </div>

                        <button type="buttom" className="btn">login...<FontAwesomeIcon icon={faPlay} /></button>

                       
                    </form>
                </div>
            </div>
            <div id="sourcers">

            </div>
            
        </>
        
    );
};

export default LoginForm;
