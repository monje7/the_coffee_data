
import { Router } from 'express';
import {validarusuario} from '../validation/usuario.js';
import {validartoken} from '../controllers/autenticacion.controller.js';

const autRoute= Router();

autRoute.post('/validar',validartoken,validarusuario);

export default autRoute;
