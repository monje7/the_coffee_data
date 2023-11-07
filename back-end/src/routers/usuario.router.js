
import {Router} from "express";

import {guardarUsuario,listarUsuario,buscarUsuarios,eliminarUsuario,actualizarUsuario} from "../controllers/usuarios.controller.js";



const usuarioRoute = Router();

usuarioRoute.post("/registrar",guardarUsuario);
usuarioRoute.get("/listarusuario",listarUsuario);
usuarioRoute.get("/buscarusuario/:id",buscarUsuarios);
usuarioRoute.delete("/eliminar/:id",eliminarUsuario);
usuarioRoute.put("/actualizar/:id",actualizarUsuario);






export default usuarioRoute;