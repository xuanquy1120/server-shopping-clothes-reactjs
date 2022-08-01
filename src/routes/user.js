import { userController } from "controller";
import { Router } from "express";
import { authMiddleware } from "middleware/auth.middleware";

const router = Router();

router.post("/updateCartUser", authMiddleware.isAuthenticated, userController.updateCartToUser);
router.post("/addCartUser", authMiddleware.isAuthenticated, userController.addCartUser);
router.delete("/:id", authMiddleware.isAuthenticated, userController.deleteCartUser);

export default router;
