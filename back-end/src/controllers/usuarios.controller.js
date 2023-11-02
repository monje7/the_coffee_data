 import { pool } from "../database/conexion.js";
    export const guardarUsuario = async (req, res) => {
        try {
            let data = req.body;
            console.log("user",data);

            let sql= 'INSERT INTO usuarios( nombre, apellido, numero_documentos,telefono, correo_electronico, user_password, tipo_documento, rol, cargo) VALUES (?,?,?,?,?,?,?,?,?)';

            const [rows] = await pool.query(sql, [ data.nombre, data.apellido, data.documento, data.telefono,data.correo,data.contraseña,data.tipo_identificacion,data.rol,data.cargo]); 
            
            if (rows.affectedRows > 0) {
                res.status(200).json({
                    "status": 200,
                    "message": "El usuario se registro con exito"   
                }
                );

            } else {
                res.status(400).json({
                    "status": 400,
                    "message": "No se registro"
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
    };

export const listarUsuario = async (req, res) => {

    try {
        const [result] = await pool.query("select * from usuarios");
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({
            massage: "Error en listar usuario :" + err
        });
    }
};
export const buscarUsuarios = async (req, res) => {
    try {
        let id = req.params.id;
        const [result] = await pool.query("select * from usuarios where id =" + id);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({
            massage: "Error en listar usuario :" + err
        });
    }

};

export const eliminarUsuario = async (req, res) => {
    try {
        let id = req.params.id;
        let sql = `delete from usuarios where id=${id}`;

        const [rows] = await pool.query(sql);

        if (rows.affectedRows > 0) {
            res.status(200).json({
                "status": 200,
                "message": "El usuario se elimino con exito"
            }
            );
        } else {
            res.status(400).json({
                "status": 401,
                "message": "El usuario no fue eliminado"
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
};
export const actualizarUsuario = async (req, res) => {
    try {
        let id = req.params.id;
        let { nombre, apellido, documento, telefono,correo,contraseña,tipo_identificacion,rol,cargo} = req.body;


        let sql = `UPDATE usuarios SET nombre='${nombre}',apellido='${apellido}',numero_documentos='${documento}',telefono='${telefono}',correo_electronico ='${correo}',user_password='${contraseña}',tipo_documento='${tipo_identificacion}',rol='${rol}',cargo='${cargo}' WHERE  id =${id}`
    
        // let sql = `update usuarios SET nombres ='${nombres}',direccion='${direccion}',telefono='${telefono}',correo ='${correo}' where  idusuario=${id}`;

        console.log("user",sql);

        const [rows] = await pool.query(sql);

        if (rows.affectedRows > 0) {
            res.status(200).json({
                "status": 200,
                "message": "El usuario se actuaizo con exito"
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
};