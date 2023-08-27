/* 3. Creacion de rutas del servidor. */

import Router from "express";
const routes = Router();

/* Rutas {GET,POST, GET_ID, DELETE } */

/* Importamos las funciones de Datos */
import { getUserID, getUsers, createUser, deleteUserID } from '../controllers/userController.js'


/* Obtener todos los usuarios */
routes.get("/users", getUsers);
/* Obtener un usuario por ID */
routes.get("/users/:id", getUserID);
/* Borrar un usuario por ID */
routes.delete("/users/:id", deleteUserID);
/* Crear un usuario */
routes.post("/users", createUser);

export default routes;
