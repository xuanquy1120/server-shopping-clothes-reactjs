import { productController } from "controller";
import { Router } from "express";
import { authMiddleware } from "middleware/auth.middleware";

const router = Router();

router.get("/", productController.getProduct);
router.post("/add", authMiddleware.isAuthenticated,productController.addProduct);
router.get("/findProduct",productController.findProduct);

export default router;