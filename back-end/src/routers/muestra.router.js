import {Router} from "express";
import { check } from "express-validator";
import { guardarMuestra,actualizarMuestra,buscarMuestra,listarMuestras,desactivarMuestra,activarMuestra } from "../controllers/muestras.controller.js";
import {validarMuestra} from "../validation/muestras.validator.js";

const muestraRoute = Router()

muestraRoute.post("/registrar",validarMuestra,guardarMuestra);
muestraRoute.put("/actualizar/:id",validarMuestra,actualizarMuestra);
muestraRoute.get("/buscar/:id",buscarMuestra);
muestraRoute.get("/listar",listarMuestras);
muestraRoute.patch("/desactivar/:id",desactivarMuestra);
muestraRoute.patch("/activar/:id",activarMuestra);


export default muestraRoute;