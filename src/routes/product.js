import { productController } from "controller";
import { Router } from "express";

const router = Router();

router.get("/", productController.getProduct);
router.post("/add", productController.addProduct);

export default router;