import mongoose from "mongoose";
async function Conexion() {
  try {
    // Configurar tu variable de entorno
    await mongoose.connect(process.env.DB);
    console.log("db conectada");
  } catch (error) {
    console.log(error);
  }
}
export default Conexion;
