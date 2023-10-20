import express from "express";
import body_parser from "body-parser";
import usuarioRoute from "./src/routers/usuario.router.js";
import muestraRoute from "./src/routers/muestra.router.js";
import fincaRoute from "./src/routers/finca.route.js";
import municipioRoute from "./src/routers/municipio.route.js";
import variedadesRoute from "./src/routers/variedades.route.js";
import loteRoute from "./src/routers/lote.router.js";
import autRoute from "./src/routers/autenticacion.router.js"

const app = express();

app.use(express.json());


app.use("/usuario", usuarioRoute);
app.use("/muestra",muestraRoute);
app.use("/finca",fincaRoute);
app.use('/municipio',municipioRoute);
app.use('/variedad',variedadesRoute);
app.use('/lote',loteRoute);
app.use('/aut',autRoute)

app.listen(2000, () => {
    console.log("Servidor se esta ejecutando en el puerto 2000");
});
