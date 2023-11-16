import { check } from "express-validator";

export const validarLote=[

    check('fecha_creacion','Ingrese una fecha válida en el formato año-mes-dia').matches(/^\d{4}-\d{2}-\d{2}$/).notEmpty(),
    check('nombre','Este campo no peude estar vacio').notEmpty(),
    check('longitud', 'Esta casilla no puede estar vacia').notEmpty(),
    check('latitud', 'Esta casilla no puede estar vacia').notEmpty(),
    check('fincas_id','Ingrese un ID valido,mayor a 0').isNumeric().custom(value=>value>0).notEmpty(),
    
]