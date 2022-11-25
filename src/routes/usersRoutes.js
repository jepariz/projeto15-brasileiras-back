import { Router } from "express";
import { signUp } from "../controllers/usersControllers.js"
import { signUpValidation } from "../middlewares/usersMiddleware.js";

const router = Router();

router.post("/sign-up", signUpValidation, signUp);

export default router;
