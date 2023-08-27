/* Importamos el modelo */
import User from "../Database/Models/UserModels.js";

/* Creamos las funciones */

/* Obtendremos todos los usuarios  */
export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

/* Obtendremos un usuario por ID */
export const getUserID = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

/* Crearemos un usuario */
export const createUser = async (req, res) => {
  try {
    // Debemos almacenar lo que recibiremos
    // Basicamente es el cuerpo de la peticion que nos mandan.
    const { name, lastname, email, password } = req.body;
    // Luego debemos crear un objeto nuevo con esos datos y almacenarlo
    // en base a nuestro modelo.
    const newUser = new User({ name, lastname, email, password });
    // Luego guardarlo
    await newUser.save();

    res.send("Usuario creado");
  } catch (error) {
    // Validamos si el correo esta duplicado con el error (11000)
    if (error.code === 11000) {
      res
        .status(400)
        .send("Error correo duplicado, porfavor coloca otro correo");
    } else {
      res.status(500).send("Error del servidor");
    }
  }
};

/* Eliminaremos un usuario por id */
export const deleteUserID = async (req, res) => {
    let SearchUser = await User.findById(req.params.id);
    if (SearchUser){
      await User.findByIdAndRemove(req.params.id)
      res.status(200).send("Usuario Eliminado");
    }else{
      res.status(404).send('Usuario no encontrado')
    }
 
};

// Exportaremos y luego importaremos en las rutas para que funcione
