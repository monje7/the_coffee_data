import { check } from "express-validator";

export const validarFinca = [
    
    check('fecha_creacion','Ingrese una fecha válida en el formato año-mes-dia').matches(/^\d{4}-\d{2}-\d{2}$/).notEmpty(),
    check('nombre','Esta casilla no puede estar vacia').notEmpty(),
    check('longitud', 'Esta casilla no puede estar vacia').notEmpty(),
    check('latitud', 'Esta casilla no puede estar vacia').notEmpty(),
    check('usuarios_id','Ingrese un ID valido,mayor a 0').isNumeric().custom(value=>value>0).notEmpty(),
    check('municipios_id','Ingrese un ID valido,mayor a 0').isNumeric().custom(value=>value>0).notEmpty(),
    check('noombre_vereda','Esta casilla no puede estar vacia').notEmpty(),

    
]