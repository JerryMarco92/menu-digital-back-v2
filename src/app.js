import "dotenv/config";
import express from "express";
import cors from "cors";
import platosRoutes from "./routes/platos.routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { rutaNoEncontrada } from "./middlewares/rutaNoEncontrada.js";


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(platosRoutes);

app.use(rutaNoEncontrada);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Backend disponible en puerto: ${PORT}`);
});