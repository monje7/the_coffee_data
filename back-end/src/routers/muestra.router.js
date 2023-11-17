import {Router} from "express";
import { check } from "express-validator";
import { guardarMuestra,actualizarMuestra,buscarMuestra,listarMuestras,desactivarMuestra,activarMuestra } from "../controllers/muestras.controller.js";
import {validarMuestra} from "../validation/muestras.validator.js";
import { validartoken } from "../controllers/autenticacion.controller.js";

const muestraRoute = Router()

muestraRoute.post("/registrar",validartoken,validarMuestra,guardarMuestra);
muestraRoute.put("/actualizar/:id",validartoken,validarMuestra,actualizarMuestra);
muestraRoute.get("/buscar/:id",buscarMuestra);
muestraRoute.get("/listar",listarMuestras);
muestraRoute.patch("/desactivar/:id",validartoken,desactivarMuestra);
muestraRoute.patch("/activar/:id",validartoken,activarMuestra);


export default muestraRoute;