import { check } from "express-validator";

export const validarAnalisis=[
    check('fecha_analisis','Ingrese una fecha válida en el formato año-mes-dia').matches(/^\d{4}-\d{2}-\d{2}$/).notEmpty(),
    check('calidad','Ingrese una calidad valida.Valores validos: bueno,muy bueno,excelente,extraordinario').matches(/^(bueno|muy bueno|excelente|extraordinario)$/).notEmpty(),
    check('estado','Ingrese un valor entre 0 y 1').matches(/^(0|1)$/).notEmpty(),
    check('tipo_analisis_id','Ingrese un ID valido,el valor recomendado es 1').isNumeric().custom(value=>value>0).notEmpty(),
    check('muestras_id','Ingrese un ID valido,mayor a 0').isNumeric().custom(value=>value>0).notEmpty(),
    check('usuarios_id','Ingrese un ID valido,mayor a 0').isNumeric().custom(value=>value>0).notEmpty()


]