    import{Router} from 'express';
    import { check } from 'express-validator';

    import{buscarFinca,guardarFinca,actualizarFinca,desactivarFinca,listarFinca} from '../controllers/finca.controller.js';

    const fincaRoute= Router();

   fincaRoute.get('/listar',listarFinca);
    fincaRoute.get('/buscar/:id',buscarFinca);
    fincaRoute.post('/registrar/',guardarFinca);
    fincaRoute.put('/actualizar/:id',actualizarFinca);
    fincaRoute.patch('/desactivar/:id',desactivarFinca);



    export default fincaRoute;
