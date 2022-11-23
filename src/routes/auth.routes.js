import { Router } from "express";
import signIn from "../controllers/auth.controllers";
import { signInValidation } from "../middlewares/auth.middleware";

const router = Router()

router.post("/sign-in", signInValidation, signIn)

export default router