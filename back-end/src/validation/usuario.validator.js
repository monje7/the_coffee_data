import { check } from "express-validator";

export const validatorUsuario =[
    check('nombre','Ingrese un nombre con minimo 4 caracteres y maximo 10').isLength({min:4,max:20}).notEmpty(),
    check('apellido','Ingrese un nombre con minimo 4 caracteres y maximo 10').isLength({min:4,max:30}).notEmpty(),
    check('documento','Ingrese un dcouemnto con maximo 10 digitos').isNumeric().isLength({min:4,max:10}).notEmpty(),
    check('telefono','Ingrese un telefono con minimo 10 digitos y maximo 15').isNumeric().isLength({min:10,max:15}).notEmpty(),
    check('correo', 'Ingrese un correo electrónico válido').isEmail().notEmpty(),
    check('contraseña','Ingrese una contraseña con minimo 5 caracteres y maximo 15').isNumeric().isLength({min:5,max:15}).notEmpty(),
    check('tipo_identificacion','Ingrese un tipo de identificacion válido, solamente tarjeta de identidad o cedula de ciudadania').matches(/^(tarjeta de identidad|cedula de ciudadania)$/).notEmpty(),
    check('rol','Ingrese un tipo de rol válido, solamente rol de catador,cafetero,administrador').matches(/^(catador|cafetero|administrador)$/).notEmpty(),
    check('cargo','Ingrese un cargo válido, solamente cargo de instructor,aprendiz,cliente,administrador').matches(/^(instructor|aprendiz|cliente|administrador)$/).notEmpty(),
]   