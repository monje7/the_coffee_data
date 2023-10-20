

import {pool} from '../database/conexion.js';
import {validationResult} from 'express-validator';


export const buscarFinca= async (req,res)=>{ 
    try{
        let id=req.params.id;
         const [result] = await pool.query('select * from fincas where id= '+id);
        res.status(200).json(result);
}catch(err){
    res.status(500).json({message:'Error en buscarFinca :'+err});
}};



export const guardarFinca= async (req, res) => {

    try{
    let {fecha_creacion	,nombre,longitud,latitud,usuarios_id,municipios_id} =req.body;

    let sql=`insert into fincas (fecha_creacion	,nombre,longitud,latitud,usuarios_id,municipios_id)
            values ('${fecha_creacion	}','${nombre}','${longitud}','${latitud}','${usuarios_id}','${municipios_id}')`;

    const [rows] = await pool.query(sql);
    
    if(rows.affectedRows > 0) {
    return   res.status(200).json({
                          "status":200,
                          "message":"se registro con exito la finca"
                             }
                            );
                              }
    else{
    return    res.status(401).json({
                            "status":401,
                            "message":"no se registro con exito la finca"
                            }
                            );
    }
    

}catch (e) {
return    res.status(500).json({
                             "status":500,
                             "message":"error en el servidor :" +e
                             }
                        );
           }
}




export const actualizarFinca=async (req, res) =>{


    try{
    let id = req.params.id;
    let {fecha_creacion	,nombre,longitud,latitud,usuarios_id,municipios_id} = req.body;

    let sql=`update fincas SET fecha_creacion='${fecha_creacion}',nombre='${nombre}',longitud='${longitud}',latitud='${latitud}',usuarios_id='${usuarios_id}',municipios_id='${municipios_id}'
            where id=${id}`;

    const [rows] = await pool.query(sql);
    if(rows.affectedRows>0){
        res.status(200).json({"status":200,"message":"se actualizo con exito la finca"});
    }else{
        res.status(401).json({"status":401,"message":"No se actualizo con exito la finca"});
    }
    }catch(e){
        res.status(500).json({"status":500,"message":"error en el servidor:" +e});
            }
}

export const desactivarFinca = async (req, res) => {
    try {
      let id=req.params.id;
      let sql= `UPDATE fincas SET Estado = "Desactivado" WHERE id = ${id}`;
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