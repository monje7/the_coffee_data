import { Router } from "express";

import { guardarAnalisis,actualizarAnalisis,listarAnalisis,buscaranalisis,eliminaranalisis} from "../controllers/analisis.controller.js";


const analisisRoute = Router();


analisisRoute.post("/registrar",guardarAnalisis);
analisisRoute.get("/listar",listarAnalisis);
analisisRoute.get("/buscar/:id",buscaranalisis);
analisisRoute.put("/update/:id",actualizarAnalisis);
analisisRoute.delete("/delete/:id",eliminaranalisis);





export default analisisRoute;   