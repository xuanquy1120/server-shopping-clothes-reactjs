import { authController } from "controller";
import { Router } from "express";
import { authMiddleware } from "middleware/auth.middleware";

const router = Router();

router.post("/login", authController.login);
router.post("/register", authController.register);
router.get("/checktoken", authController.checkToken);

export default router;
