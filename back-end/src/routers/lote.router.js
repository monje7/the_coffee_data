import { Router } from "express";
import { buscarlote, listarlote, guardarlote, eliminarlote, actualizarlote, desactivarlote, Activarlote } from "../controllers/lote.controller.js";
// import { validartoken } from "../controllers/autenticacion.controller.js";
// import {validatorUser} from '../validator/usuario.js';
import { validarLote } from "../validation/lote.validator.js";

const loteRoute= Router();

loteRoute.get('/listar',listarlote);

loteRoute.get('/buscar/:id',buscarlote);

loteRoute.post('/registrar',validarLote,guardarlote);

loteRoute.delete('/Eliminar/:id',eliminarlote);

loteRoute.put('/Actualizar/:id',validarLote,actualizarlote);

loteRoute.patch('/Desactivar/:id',desactivarlote);

loteRoute.patch('/activar/:id',Activarlote);

export default  loteRoute;