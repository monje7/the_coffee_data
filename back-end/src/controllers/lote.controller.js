import {pool} from '../database/conexion.js';
import {validationResult} from 'express-validator';


export const listarlote= async (req,res)=>{
    try{

        const[result]= await pool.query("select * from lotes");
        res.status(200).json(result);


    }catch(err){
        res.status(500).json({ message:'erro en listarlote: '+err});
    }
};

export const buscarlote= async (req,res)=>{
    try{
        let id=req.params.id;

        const[result]= await pool.query("select * from lotes where id= "+ id);
        res.status(200).json(result[0]);


    }catch(err){
        res.status(500).json({ message:'erro en Buscarlote: '+err});
    }
};

export const guardarlote = async(req, res) => {
    try{
    // let error= validationResult(req);
    //     if (!error.isEmpty()) {
    //         return res.status(400).json(error);
    //     }

    let {fecha_creacion,nombre,latitud,longitud,fincas_id ,variedades_id} = req.body;

    let sql= `insert into lotes (fecha_creacion,nombre,latitud,longitud,fincas_id,variedades_id)
                values('${fecha_creacion}','${nombre}','${latitud}','${longitud}','${fincas_id}','${variedades_id}')`;

    const [rows] = await pool.query(sql);

    if (rows.affectedRows >0){
        res.status(200).json({
            "status":200,
            "message":"se registro con exito"
        })
    }else{
        res.status(401).json({
            "status":401,
            "message":"no se registro con exito"
        })
    }
    }catch(e){
          res.status(500).json({message: "Error en guargarlote: "+e})
}
};

export const eliminarlote = async(req,res) => {
    try{
        let id= req.params.id;

        let sql=`delete from lotes where id=${id}`;

        const[rows]= await pool.query(sql);
        if(rows.affectedRows>0){
            res.status(200).json({"status":200, "message": "se elimino con exito"});
        }else{
            res.status(401).json({"status":401, "message": "No se elimino con exito"}); 
        }
    }catch(e){
        res.status(500).json({"status":500, "message": "ERROR en el servidor"});
    }

};

export const actualizarlote = async(req,res) => {
    try {
        let id= req.params.id;
        let {fecha_creacion,nombre,latitud,longitud,fincas_id ,variedades_id} = req.body;
        let sql= `update lotes set fecha_creacion='${fecha_creacion}',nombre='${nombre}',latitud='${latitud}',longitud='${longitud}',fincas_id='${fincas_id}',variedades_id='${variedades_id}' where id='${id}'`;
        const[rows] = await pool.query(sql);
        if(rows.affectedRows>0){
            res.status(200).json({"status":200, "message": "se actualizo con exito"});
        }else{
            res.status(401).json({"status":401, "message": "No se actualizo con exito"}); 
        }
    } catch (e) {
        res.status(500).json({"status":500, "message": "ERROR en el servidor" + e});
    }
}

export const desactivarlote = async (req, res) => {
    try {
      let id=req.params.id;
      let sql= `UPDATE lotes SET status = Desactivado WHERE id = ${id}`;
      const [rows] = await pool.query(sql);
      if(rows.affectedRows > 0) {
        return   res.status(200).json({
                              "status":200,
                              "message":"se registro con exito el lote"
                                 }
                                );
      }else{
        return    res.status(401).json({
                                "status":401,
                                "message":"no se registro con exito el lote"
                                }
                                );
        }
    } catch (err) {
      console.error('Error en desactivarlote:', err);
      res.status(500).json({ mensaje: 'Error en desactivarlote: ' + err });
    }
  };