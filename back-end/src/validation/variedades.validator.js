import { check } from "express-validator";

export const validatorVariedades = [

    check('fecha_creacion','Ingrese una fecha válida en el formato año-mes-dia').matches(/^\d{4}-\d{2}-\d{2}$/).notEmpty(),
    check('nombre','Este campo no pueder ir vacio').notEmpty()

]