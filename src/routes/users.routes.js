import { Router } from "express";
import { signUp } from "../controllers/users.controllers";
import { signUpValidation } from "../middlewares/users.middleware";

const router = Router();

router.post("/sign-up", signUpValidation, signUp);

export default router;
