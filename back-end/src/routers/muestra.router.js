import {Router} from "express";

import { guardarMuestra,actualizarMuestra,buscarMuestra,listarMuestras } from "../controllers/muestras.controller.js";

const muestraRoute = Router()

muestraRoute.post("/registrarMuestra",guardarMuestra);
muestraRoute.put("/actualizarMuestra/:id",actualizarMuestra);
muestraRoute.get("/buscarMuestra/:id",buscarMuestra);
muestraRoute.get("/listarMuestra",listarMuestras);



export default muestraRoute;