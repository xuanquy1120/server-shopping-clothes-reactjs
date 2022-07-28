import { Router } from "express";
import auth from "./auth";
import product from "./product";
import user from "./user";

const router = Router();

router.use("/auth", auth);
router.use("/product", product);
router.use("/user", user);


export default router;
