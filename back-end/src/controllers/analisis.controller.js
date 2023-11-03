import {pool} from '../database/conexion.js';

export const guardarAnalisis = async (req,res)=>{

    try{
        let data = req.body;
        console.log('user',data);
        
        let sql = 'insert into analisis(calidad,factor_de_rendimiento,proceso,muestras_id,usuarios_id,tipo_analisis_id,estado,tipo_molienda,tipo_fermentacion,densidad_cafe_verde,fecha_de_procesamiento,tipo_tostion,tiempo_fermentacion,actividad_de_agua,tiempo_de_secado) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
        const [rows] = await pool.query(sql,[data.calidad,data.factor_de_rendimiento,data.proceso,data.muestras_id,data.usuarios_id,data.tipo_analisis_id,data.estado,
            data.tipo_molienda,data.tipo_fermentacion,data.densidad_cafe_verde,data.fecha_de_procesamiento,data.tipo_tostion,data.tiempo_fermentacion,data.actividad_de_agua,data.tiempo_de_secado]);

        if(rows.affectedRows>0){
            res.status(200).json({
                "status": 200,
                "menssage":"Registro de analisis exitoso..!"
            });


        }else{
            res.status(400).json({
                "status":401,
                "menssage":"No se registro"
            });
        } 
    }catch(error){
        res.status(500).json({
            "status":500,
            "menssage":"error en el sevidor"+error
        });

    }
};


export const buscaranalisis = async (req, res) => {
    try {
        let id = req.params.id;
        const [result] = await pool.query("select * from analisis where id =" + id);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({
            massage: "Error en listar analisis:" + err
        });
    }

};



export const listarAnalisis = async(req,res)=>{
    try{
            const[result]=await pool.query(`select * from analisis`);
            res.status(200).json(result);
    
        }catch(err){
        res.status(500).json({
            menssage:'error en listar analisis de la base de datos:'+err
        })
    }
};


export const eliminaranalisis = async (req,res)=>{

    try{
        let id = req.params.id;
        let sql = `delete from analisis where id=${id}`;


        const [rows] = await pool.query(sql);

        if(rows.affectedRows>0)
        {
            res.status(200).json({
                "status":200,
                "message":"El analisis se elimino con exito"
            });
        }else{
            res.status(400).json({
                "status":401,
                "message":" El analisis no fue eliminado"
            });
        }
    }catch(e){
        res.status(500).json({
            "status":500,
            "message":"Error en el servidor"+e
        });
    }
};

export const actualizarAnalisis = async (req, res) => {
    try {
        let id = req.params.id;
        let { calidad,factor_de_rendimiento,proceso,muestras_id,usuarios_id,tipo_analisis_id,estado,tipo_molienda,tipo_fermentacion,densidad_cafe_verde,fecha_de_procesamiento,tipo_tostion,tiempo_fermentacion,actividad_de_agua,tiempo_de_secado} = req.body;


        let sql = `UPDATE analisis SET calidad='${calidad}', factor_de_rendimiento='${factor_de_rendimiento}', proceso='${proceso}', muestras_id='${muestras_id}', usuarios_id ='${usuarios_id}', tipo_analisis_id='${tipo_analisis_id}', estado='${estado}', tipo_molienda='${tipo_molienda}', tipo_fermentacion='${tiempo_fermentacion}', densidad_cafe_verde='${densidad_cafe_verde}', fecha_de_procesamiento='${fecha_de_procesamiento}', tipo_tostion='${tipo_tostion}', tiempo_fermentacion='${tiempo_fermentacion}', actividad_de_agua='${actividad_de_agua}', tiempo_de_secado='${tiempo_de_secado}' WHERE  id =${id}`
    


        const [rows] = await pool.query(sql);

        if (rows.affectedRows > 0) {
            res.status(200).json({
                "status": 200,
                "message": "¡Registro de Analisis actualizado..!"
            }
            );
            }else{
                res.status(400).json({
                "status": 400,
                "message": "¡El analisis no fue actualizado"});
            }
            } catch (e) {
                res.status(500).json({
                "status": 500,
                "message": "Error en el servidor..! " +e});

            }
};

 

