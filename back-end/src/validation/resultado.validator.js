import { check } from "express-validator";


export const validarResultado = [
    check('valor','Verifique que la muestra sea mayor a 0').isInt().custom(value => value >0).notEmpty(),
    check('analisis_id','Ingrese un ID valido,mayor a 0').isNumeric().custom(value=>value>0).notEmpty(),
    check('variables_id','Ingrese un ID valido,mayor a 0').isNumeric().custom(value=>value>0).notEmpty(),
    check('fecha','Ingrese una fecha válida en el formato año-mes-dia').matches(/^\d{4}-\d{2}-\d{2}$/).notEmpty(),

]