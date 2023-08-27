/* 
    // Pasos a seguir para la creacion de la aplicacion:
    |==============================================|
    |  1. Instalacion del servidor y paquetes (Listo)                        
    |  2. Configuracion de servidor (Listo)
    |  3. Creacion de rutas (Listo)
    |  4. Conexion a base de datos (Listo)
    |  5. Creacion de tabla y modelo (Listo)
    |  6. Controladores de datos (Listo)
    |  7. Manejo de datos (listo)
    |==============================================|
    || ==> Sigueme en instagram: @andrescamacho.22
    || ==> Sigueme en tiktok: @andrescamacho.22
    || ==> Pronto mas guias de programacion -> comenta

*/

/* 2. Configuracion del servidor */
import express from "express";
const server = express();
import morgan from "morgan";
import dotenv from 'dotenv'
dotenv.config()

import routes from "./Routes/userRoute.js";
import Conexion from "./Database/conexion/conexion.js";
//Puerto donde se correra el servidor
const port = process.env.PORT || 5000; // configurar tu variable de enterno

/* Middlewares */
// Ver peticiones que se hacen al servidor
server.use(morgan("dev"));
// Usar Json y saber leer ese formato al servidor
server.use(express.json());
// Conexion a la base de datos
const db = Conexion();

/* Routes */
server.use("/api", routes);

/* Configuracion del servidor */
server.listen(port, () => {
  console.log(`servidor en marcha en el puerto ${port}`);
});
