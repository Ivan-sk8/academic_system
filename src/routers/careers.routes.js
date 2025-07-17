import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.get("/careers", authRequired, (req, res) => res.send('careers'))
router.get("/careers/:id", authRequired, (req, res) => res.send('career by id'))
export default router;



// aqui iran las rutas de las funciones que crearemos en el controlador de carreras