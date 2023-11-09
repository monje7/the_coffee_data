import{Router} from 'express';
import { check } from 'express-validator';

import{buscarCafe,guardarCafe,actualizarCafe,estadoCafe} from '../controllers/cafe.controller.js';

const cafeRoute= Router();


cafeRoute.get('/buscar/:id',buscarCafe);
cafeRoute.post('/registrar/',guardarCafe);
cafeRoute.put('/actualizar/:id',actualizarCafe);
cafeRoute.patch('/estado/:id',estadoCafe);



export default cafeRoute;
