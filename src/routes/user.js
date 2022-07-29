import { userController } from "controller";
import { Router } from "express";
import { authMiddleware } from "middleware/auth.middleware";

const router = Router();

router.post("/addCartToUser", authMiddleware.isAuthenticated, userController.addCartToUser);
router.delete("/:id", authMiddleware.isAuthenticated, userController.deleteCartUser);

export default router;
