import { check } from "express-validator";

export const validarCafe = [

    check('lotes_id','Ingrese un ID valido,mayor a 0').isNumeric().custom(value=>value>0).notEmpty(),
    check('variedades_id','Ingrese un ID valido,mayor a 0').isNumeric().custom(value=>value>0).notEmpty()

]