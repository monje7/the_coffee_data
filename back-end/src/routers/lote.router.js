import { Router } from "express";
import { buscarlote, listarlote, guardarlote, eliminarlote, actualizarlote, desactivarlote } from "../controllers/lote.controller.js";
// import { validartoken } from "../controllers/autenticacion.controller.js";
// import {validatorUser} from '../validator/usuario.js';

const loteRoute= Router();

loteRoute.get('/listar',listarlote);

loteRoute.get('/buscar/:id',buscarlote);

loteRoute.post('/registrar',guardarlote);

loteRoute.delete('/Eliminar/:id',eliminarlote);

loteRoute.put('/Actualizar/:id',actualizarlote);

loteRoute.patch('/Desactivar/:id',desactivarlote);

export default  loteRoute;