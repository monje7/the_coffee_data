import { Router } from "express";
import { buscarlote, listarlote, guardarlote, actualizarlote, desactivarlote, Activarlote } from "../controllers/lote.controller.js";
import { validartoken } from "../controllers/autenticacion.controller.js";
// import {validatorUser} from '../validator/usuario.js';
import { validarLote } from "../validation/lote.validator.js";

const loteRoute= Router();

loteRoute.get('/listar',listarlote);

loteRoute.get('/buscar/:id',buscarlote);

loteRoute.post('/registrar',validartoken,validarLote,guardarlote);

loteRoute.put('/Actualizar/:id',validartoken,actualizarlote);

loteRoute.patch('/Desactivar/:id',validartoken,desactivarlote);

loteRoute.patch('/activar/:id',validartoken,Activarlote);

export default  loteRoute;