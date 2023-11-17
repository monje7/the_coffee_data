    import{Router} from 'express';
    import { check } from 'express-validator';

    import{buscarFinca,guardarFinca,actualizarFinca,desactivarFinca,listarFinca,ActivarFinca} from '../controllers/finca.controller.js';
    import { validartoken } from '../controllers/autenticacion.controller.js';
    import { validarFinca } from '../validation/fincas.validator.js';
    const fincaRoute= Router();

    fincaRoute.get('/listar',listarFinca);
    fincaRoute.get('/buscar/:id',buscarFinca);
    fincaRoute.post('/registrar/',validartoken,validarFinca,guardarFinca);
    fincaRoute.put('/actualizar/:id',validartoken,validarFinca,actualizarFinca);
    fincaRoute.patch('/desactivar/:id',validartoken,desactivarFinca);
    fincaRoute.patch('/activar/:id',validartoken,ActivarFinca);



    export default fincaRoute;
