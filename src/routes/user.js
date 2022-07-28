import { userController } from "controller";
import { Router } from "express";
import { authMiddleware } from "middleware/auth.middleware";

const router = Router();

router.post("/addCartToUser", authMiddleware.isAuthenticated, userController.addCartToUser);

export default router;
