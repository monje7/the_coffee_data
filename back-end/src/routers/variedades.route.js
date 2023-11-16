    import{Router} from 'express';
    import { check } from 'express-validator';

    import{guardarVariedad,actualizarVariedad,listarVariedad} from '../controllers/variedades.controller.js';
    import { validatorVariedades } from '../validation/variedades.validator.js';
    const variedadesRoute= Router();

   

    variedadesRoute.post('/registrar',validatorVariedades,guardarVariedad);
    variedadesRoute.put('/actualizar/:id',validatorVariedades,actualizarVariedad);
    variedadesRoute.get('/listar',listarVariedad);



    export default variedadesRoute;
