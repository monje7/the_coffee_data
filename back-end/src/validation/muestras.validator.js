import {check} from  'express-validator';


export const validarMuestra =[

        check('fecha_creacion','Ingrese una fecha válida en el formato año-mes-dia').matches(/^\d{4}-\d{2}-\d{2}$/).notEmpty(),
        check('codigo_externo','Este campo no puede estar vacio').notEmpty(),
        check('consecutivo_informe','Este campo no puede estar vacio').notEmpty(),
        check('muestreo','Ingrese un tipo de muestreo valido').notEmpty(),
        check('preparacion_muestra','Ingrese un tipo de prepracion valida').notEmpty(),
        check('cantidad','Verifique que la muestra sea mayor a 50').isInt().custom(value => value >50).notEmpty(),
        check('tipo_molienda','Este campo no peude estar vacio').notEmpty(),
        check('tipo_fermentacion','Este campo no peude estar vacio').notEmpty(),
        check('densidad_cafe_verde','Este campo no peude estar vacio').notEmpty(),
        check('fecha_procesamiento','Ingrese una fecha válida en el formato año-mes-dia').matches(/^\d{4}-\d{2}-\d{2}$/).notEmpty(),
        check('tipo_tostion','Este campo no peude estar vacio').notEmpty(),
        check('tiempo_fermentacion','Este campo no puede estar vacio').notEmpty(),
        check('codigo_muestra','Este campo no puede estar vacio').notEmpty(),
        check('actividad_agua','Este campo no puede estar vacio').notEmpty(),
        check('tiempo_secado','Este campo no puede estar vacio').notEmpty(),
        check('presentacion','Este campo no puede ir vacio').notEmpty(),
        check('estado','Ingrese un estado valido.Valores validos: 1 y 0').isNumeric().matches(/^(1|0)$/).notEmpty(),
        check('cafes_id','Ingrese un ID valido,mayor a 0').isNumeric().custom(value=>value>0).notEmpty()

]