import { pool } from "../database/conexion.js";



export const guardarMuestra = async (req, res) => {
    try {
        let data = req.body;

        let sql =  `INSERT INTO muestras( fecha_creacion, nombre, cantidad, lotes_id, muestrascol, estado, variedades_id) VALUES (?,?,?,?,?,?,?)`

        const [rows] = await pool.query(sql, [ data.fecha, data.nombre, data.cantidad,data.lotes_id,data.muestrascol,data.estado,data.variedades_id ]); 
        
        if (rows.affectedRows > 0) {
            res.status(200).json({
                "status": 200,
                "message": "La muestras se registro con exito"   
            }
            );

        } else {
            res.status(401).json({
                "status": 401,
                "message": "La muestra no se registro"
            }
            );
        }  



    } catch (error) {
        res.status(500).json({
            "status": 500,
            "message": "error en en el servidor" + error
        }
        );
        
    }
}
export const actualizarMuestra = async (req, res) => {
    try {
        let id = req.params.id;
        // let { fecha_creacion, cantidad,lotes_id} = req.body;
        let data = req.body;

        let sql = `UPDATE muestras SET fecha_creacion='${data.fecha_creacion}',nombre='${data.nombre}',cantidad='${data.cantidad}',lotes_id='${data.lotes_id}',muestrascol='${data.muestrascol}',estado='${data.estado}',variedades_id='${data.variedades_id}' where id='${id}'`


 


        console.log("user",sql);

        const [rows] = await pool.query(sql);

        if (rows.affectedRows > 0) {
            res.status(200).json({
                "status": 200,
                "message": "La muestra se actuaizo con exito"
            }
            );
        } else {
            res.status(400).json({
                "status": 400,
                "message": "El usuario no fue actualizado"

            }
            );
        }
    } catch (e) {
        res.status(500).json({
            "status": 500,
            "message": "Error en el servidor " + e
        }
        );

    }
}
export const buscarMuestra = async (req, res) => {
    try {
        let id = req.params.id;

        const [result] = await pool.query("SELECT m.id, m.fecha_creacion, m.nombre, m.cantidad, l.nombre as lote,f.nombre as finca, concat(u.nombre,' ',u.apellido)  as propietario from muestras m JOIN lotes l ON m.lotes_id = l.id JOIN fincas f ON l.fincas_id = f.id JOIN usuarios u ON f.usuarios_id = u.id WHERE m.id = "+id);


        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({
            massage: "Error en listar la muestra :" + err
        });
    }

};
export const listarMuestras = async (req, res) => {

    try {
        const [result] = await pool.query("SELECT m.id, m.fecha_creacion, m.cantidad, m.nombre as nombre, l.nombre as lote,f.nombre as finca, concat(u.nombre,' ',u.apellido)  as propietario from muestras m JOIN lotes l ON m.lotes_id = l.id JOIN fincas f ON l.fincas_id = f.id JOIN usuarios u ON f.usuarios_id = u.id");
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({
            massage: "Error en listar usuario :" + err
        });
    }
}