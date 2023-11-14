import {Router} from "express";

import { guardarMuestra,actualizarMuestra,buscarMuestra,listarMuestras,desactivarMuestra,activarMuestra } from "../controllers/muestras.controller.js";

const muestraRoute = Router()

muestraRoute.post("/registrar",guardarMuestra);
muestraRoute.put("/actualizar/:id",actualizarMuestra);
muestraRoute.get("/buscar/:id",buscarMuestra);
muestraRoute.get("/listar",listarMuestras);
muestraRoute.patch("/desactivar/:id",desactivarMuestra);
muestraRoute.patch("/activar/:id",activarMuestra);


export default muestraRoute;