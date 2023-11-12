    import{Router} from 'express';
    import { check } from 'express-validator';

    import{guardarVariedad,actualizarVariedad,desactivarVariedad,listarVariedad,ActivarVariedad} from '../controllers/variedades.controller.js';

    const variedadesRoute= Router();

   

    variedadesRoute.post('/registrar',guardarVariedad);
    variedadesRoute.put('/actualizar/:id',actualizarVariedad);
    variedadesRoute.patch('/desactivar/:id',desactivarVariedad);
    variedadesRoute.patch('/activar/:id',ActivarVariedad);
    variedadesRoute.get('/listar',listarVariedad);



    export default variedadesRoute;
