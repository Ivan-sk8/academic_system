import { Router } from "express";
import { register, login, logout, profile } from "../controllers/authController.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/profile", authRequired, profile);



export default router;