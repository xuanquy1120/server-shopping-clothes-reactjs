import { authController } from "controller";
import { Router } from "express";


const router = Router();

router.post("/login", authController.login);
router.post("/register", authController.register);
// router.post("/checkToken", authController.checkToken);


export default router;
