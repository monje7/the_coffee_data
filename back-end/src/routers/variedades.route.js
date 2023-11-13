    import{Router} from 'express';
    import { check } from 'express-validator';

    import{guardarVariedad,actualizarVariedad,listarVariedad} from '../controllers/variedades.controller.js';

    const variedadesRoute= Router();

   

    variedadesRoute.post('/registrar',guardarVariedad);
    variedadesRoute.put('/actualizar/:id',actualizarVariedad);
    variedadesRoute.get('/listar',listarVariedad);



    export default variedadesRoute;
