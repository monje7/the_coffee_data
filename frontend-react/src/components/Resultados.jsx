import React,{useEffect,useRef} from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";


function Muestra() {
    return (

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