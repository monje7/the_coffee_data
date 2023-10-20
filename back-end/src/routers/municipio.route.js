import { Router } from "express";
import { buscarmunicipio, listarmunicipio, guardarmunicipio, eliminarmunicipio, actualizarmunicipio } from "../controllers/municipio.controller.js";

const municipioRoute= Router();

municipioRoute.get('/listar',listarmunicipio);

municipioRoute.get('/buscar/:id',buscarmunicipio);

municipioRoute.post('/registrar',guardarmunicipio);

municipioRoute.delete('/Eliminar/:id',eliminarmunicipio);

municipioRoute.put('/Actualizar/:id',actualizarmunicipio);

export default  municipioRoute;