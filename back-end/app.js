import express from "express";
import body_parser from "body-parser";
import usuarioRoute from "./src/routers/usuario.router.js";
import muestraRoute from "./src/routers/muestra.router.js";

const app = express();

app.use(express.json());


app.use("/usuario", usuarioRoute);
app.use("/muestra",muestraRoute);


app.listen(4000, () => {
    console.log("Servidor se esta ejecutando en el puerto 4000");
});
