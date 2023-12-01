import React, { useEffect, useRef } from "react";
import Api from "../services/api";
import { useNavigate } from "react-router-dom";
import '../style/fincas.css'

const Registrar=() =>{
    const fecha_creacion = useRef();
    const nombre = useRef();
    const longitud = useRef();
    const latitud = useRef();
    const usuarios_id  = useRef();
    const municipios_id  = useRef();
    const noombre_vereda  = useRef();

    const navigate = useNavigate()

    useEffect(() => {
        nombre.current.focus();
    },[])

    const handleSubmit = (e)=> {
        
        e.preventDefault();

        const data = {
            fecha_creacion: fecha_creacion.current.value,
            nombre: nombre.current.value,
            longitud: longitud.current.value,
            latitud: latitud.current.value,
            usuarios_id: usuarios_id.current.value,
            municipios_id: municipios_id.current.value,
            noombre_vereda: noombre_vereda.current.value,
        };
        const headers = {
           headers : {
            token : "xd"
           }
        }
        let fetch = Api.post("finca/registrar", data, headers )
        window.location  = "/finca/listar"
    }
    return (
        <form className="tabla2" onSubmit={handleSubmit} method="post">
            <h1 className="text-center font-bold underline text-3xl p-3 m-2">Crear finca</h1>
            <div className="max-w-xs">
                <input  type="date" id="fecha_creacion" name="fecha_creacion" ref={fecha_creacion} placeholder='fecha_creacion' />
            </div>
            <div className="max-w-xs">
                <input  type="text" id="nombre" name="nombre" ref={nombre} placeholder='nombre' />
            </div>
            <div className="max-w-xs">
                <input  type="text" id="longitud" name="longitud" ref={longitud} placeholder='longitud' />
            </div>
            <div className="max-w-xs">
                <input  type="number" id="latitud" name="latitud" ref={latitud} placeholder='latitud' />
            </div>
            <div className="max-w-xs">
                <input  type="number" id="usuarios_id" name="usuarios_id" ref={usuarios_id} placeholder='usuarios_id' />
            </div>
            <div className="max-w-xs">
                <input  type="number" id="municipios_id" name="municipios_id" ref={municipios_id} placeholder='municipios_id' />
            </div>
            <div className="max-w-xs">
                <input type="text" id="noombre_vereda" name="noombre_vereda" ref={noombre_vereda} placeholder='noombre_vereda' />
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 m-2 rounded focus:outline-none focus:shadow-outline" 
            type="submit">Registrar finca</button>
        </form>
    )
}


export default Registrar