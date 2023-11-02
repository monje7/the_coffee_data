    import{Router} from 'express';
    import { check } from 'express-validator';

    import{guardarVariedad,actualizarVariedad,desactivarVariedad,listarVariedad} from '../controllers/variedades.controller.js';

    const variedadesRoute= Router();

   

    variedadesRoute.post('/registrar',guardarVariedad);
    variedadesRoute.put('/actualizar/:id',actualizarVariedad);
    variedadesRoute.patch('/desactivar/:id',desactivarVariedad);
    variedadesRoute.get('/listar',listarVariedad);



    export default variedadesRoute;
