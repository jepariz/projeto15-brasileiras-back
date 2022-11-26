import { Router } from "express";
import { postProduct } from "../controllers/productsControllers.js";

const router = Router();

router.post("/insert-product", postProduct);

export default router;