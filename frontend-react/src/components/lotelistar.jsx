import React, { useEffect, useState } from "react"
import Api from "../services/api";
import { Link } from "react-router-dom";
import '../style/lotes.css'


const Listarlote = () => {
    const [lotes, setlotes] = useState([]);

    useEffect(() => {
        const buscarlotes = async () => {
            try {
                const response = await Api.get('lote/listar');
                setlotes(response.data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        }
        buscarlotes();
    }, []);
    return (<>
        <img src="../../public/img/fondo.png" alt="" className="fondo2" />
        <div className="m-3 p-3 mx-auto">
         
            <h1 className="text-center font-bold underline text-3xl">lotes</h1>
            <br />
            <table className="table1">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">id</th>
                        <th className="border p-2">Fecha Creación</th>
                        <th className="border p-2">Nombre</th>
                        <th className="border p-2">Longitud</th>
                        <th className="border p-2">Latitud</th>
                        <th className="border p-2">Estado</th>
                        <th className="border p-2">opciones</th>


                    </tr>
                </thead>
                <tbody>
                    {lotes.map((task) => (
                        
                        
                        
                        <tr key={task.id} className="border-t">
                            <td className="border p-2 text-center"><Link to={`/lote/editar/${task.id}`}>{task.id}</Link></td>
                            <td className="border p-2 text-center">{task.fecha_creacion}</td>
                            <td className="border p-2 text-center">{task.nombre}</td>
                            <td className="border p-2 text-center">{task.longitud}</td>
                            <td className="border p-2 text-center">{task.latitud}</td>
                            <td className="border p-2 text-center">{task.estado}</td>
                            <td className="border p-2 text-center">
                                <button className="bg-green-500 text-white px-4 py-2 rounded mr-2" onClick={() => handleUpdate(task.id)}>
                                    Actualizar
                                </button>
                                <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => handleDelete(task.id)}>
                                    Eliminar
                                </button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        </>
    )
}

export default Listarlote