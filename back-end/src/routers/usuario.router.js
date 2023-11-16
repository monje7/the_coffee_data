
import {Router} from "express";

import {guardarUsuario,listarUsuario,buscarUsuarios,eliminarUsuario,actualizarUsuario} from "../controllers/usuarios.controller.js";
import { validatorUsuario } from "../validation/usuario.validator.js";


const usuarioRoute = Router();

usuarioRoute.post("/registrar",validatorUsuario,guardarUsuario);
usuarioRoute.get("/listarusuario",listarUsuario);
usuarioRoute.get("/buscarusuario/:id",buscarUsuarios);
usuarioRoute.delete("/eliminar/:id",eliminarUsuario);
usuarioRoute.put("/actualizar/:id",validatorUsuario,actualizarUsuario);






export default usuarioRoute;