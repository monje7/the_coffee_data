
import {pool} from '../database/conexion.js';
import {validationResult} from 'express-validator';


export const listarmunicipio= async (req,res)=>{
    try{

        const[result]= await pool.query("select * from municipios");
        res.status(200).json(result);


    }catch(err){
        res.status(500).json({ message:'erro en listarMunicipio: '+err});
    }
};

export const buscarmunicipio= async (req,res)=>{
    try{
        let id=req.params.id;

        const[result]= await pool.query("select * from municipios where id= "+ id);
        res.status(200).json(result[0]);


    }catch(err){
        res.status(500).json({ message:'erro en listarMunicipio: '+err});
    }
};

export const guardarmunicipio = async(req, res) => {
    try{
    let error= validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json(error);
        }

    let {nombre} = req.body;

    let sql= `insert into municipios (nombre)
                values('${nombre}')`;

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
          res.status(500).json({message: "Error en guargarMunicipio: "+e})
}
};

export const eliminarmunicipio = async(req,res) => {
    try{
        let id= req.params.id;

        let sql=`delete from municipios where id=${id}`;

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

export const actualizarmunicipio = async(req,res) => {
    try {
        let id= req.params.id;
        let {nombre} = req.body;
        let sql= `update municipios set nombre='${nombre}' where id='${id}'`;
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

