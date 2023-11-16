import { Router } from "express";

import { guardarAnalisis,actualizarAnalisis,listarAnalisis,buscaranalisis,desactivarAnalisis,activarAnalisis} from "../controllers/analisis.controller.js";
import { validartoken } from "../controllers/autenticacion.controller.js";
import { validarAnalisis } from "../validation/analisis.validator.js";
const analisisRoute = Router();


analisisRoute.post("/registrar",validarAnalisis,guardarAnalisis);
analisisRoute.get("/listar",listarAnalisis);
analisisRoute.get("/buscar/:id",buscaranalisis);
analisisRoute.put("/update/:id",validarAnalisis,actualizarAnalisis);
analisisRoute.patch("/desactivar/:id",desactivarAnalisis);
analisisRoute.patch("/activar/:id",activarAnalisis);


export default analisisRoute;   