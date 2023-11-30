import React,{useEffect,useState} from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { Table} from "react-bootstrap";

function Muestra() {
    const [tasks,setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await api.get('resultado/listar');
                setTasks(response.data);
                console.log(response.data)
            }catch (error) {
                console.error('Error fetching tasks',error) 
            }
        };
        fetchTasks();
    },[]);
    

    return(
        <Table striped bordered hover>
        <thead>
        <tr>
            <th>Analisis</th>
            <th>fecha</th>
            <th>Valor</th>
            <th>Variable</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            {/* Aqui va el TASK */}
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>

        
        </tbody>
    </Table>
    );


}

export default Muestra;

    // <Table striped bordered hover>
    //     <thead>
    //     <tr>
    //         <th>#</th>
    //         <th>First Name</th>
    //         <th>Last Name</th>
    //         <th>Username</th>
    //     </tr>
    //     </thead>
    //     <tbody>
    //     <tr>
    //         <td>1</td>
    //         <td>Mark</td>
    //         <td>Otto</td>
    //         <td>@mdo</td>
    //     </tr>

    //     <tr>
    //         <td>2</td>
    //         <td>Jacob</td>
    //         <td>Thornton</td>
    //         <td>@fat</td>
    //     </tr>
    //     <tr>
    //         <td>3</td>
    //         <td colSpan={2}>Larry the Bird</td>
    //         <td>@twitter</td>
    //     </tr>
    //     </tbody>
    // </Table>