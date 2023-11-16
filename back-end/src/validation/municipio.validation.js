import { check } from "express-validator";


export const validarMunicipios = [
    check('nombre','Este campo no debe de estar vacio').notEmpty(),
    check('fecha_creacion','Ingrese una fecha válida en el formato año-mes-dia').matches(/^\d{4}-\d{2}-\d{2}$/).notEmpty(),
    check('departamentos_id','Ingrese un ID valido,mayor a 0').isNumeric().custom(value=>value>0).notEmpty()
]