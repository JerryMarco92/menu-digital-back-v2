import "dotenv/config";
import express from "express";
import cors from "cors";
import platosRoutes from "./routes/platos.routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { rutaNoEncontrada } from "./middlewares/rutaNoEncontrada.js";


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: process.env.FRONTEND_URL,
}));
app.use(express.json());

app.use(platosRoutes);

app.use(rutaNoEncontrada);

app.use(errorHandler);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend disponible en puerto: ${PORT}`);
});