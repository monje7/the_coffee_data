import {Router} from "express";

import { guardarMuestra,actualizarMuestra,buscarMuestra,listarMuestras } from "../controllers/muestras.controller.js";

const muestraRoute = Router()

muestraRoute.post("/registrar",guardarMuestra);
muestraRoute.put("/actualizar/:id",actualizarMuestra);
muestraRoute.get("/buscar/:id",buscarMuestra);
muestraRoute.get("/listar",listarMuestras);



export default muestraRoute;