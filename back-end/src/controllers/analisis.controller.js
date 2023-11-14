import {pool} from '../database/conexion.js';

export const guardarAnalisis = async (req,res)=>{

    try{
        let data = req.body;
        console.log('user',data);
        
        let sql = 'INSERT INTO analisis( fecha_analisis, calidad, estado, tipo_analisis_id, muestras_id, usuarios_id) VALUES (?,?,?,?,?,?)';
        const [rows] = await pool.query(sql,[data.fecha_analisis,data.calidad,data.estado,data.tipo_analisis_id,data.muestras_id,data.usuarios_id]);

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
        let data = req.body;

        let sql = `UPDATE analisis SET fecha_analisis='${data.fecha_analisis}',calidad='${data.calidad}',estado='${data.estado}',tipo_analisis_id='${data.tipo_analisis_id}',muestras_id='${data.muestras_id}',usuarios_id='${data.usuarios_id}' WHERE id= ${id}`
    
        // let sql = `update usuarios SET nombres ='${nombres}',direccion='${direccion}',telefono='${telefono}',correo ='${correo}' where  idusuario=${id}`;

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

 

