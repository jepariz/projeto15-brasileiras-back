import { Router } from "express";
import signIn from "../controllers/authControllers.js";
import { signInValidation } from "../middlewares/authMiddleware.js";

const router = Router()

router.post("/sign-in", signInValidation, signIn)

export default router