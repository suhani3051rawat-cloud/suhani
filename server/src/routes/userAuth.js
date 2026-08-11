import { Router } from "express";
let router = Router();
import { userRegister } from "../controller/userAuthController.js";
import { result } from "../middleware/userAuthMiddleware.js";

router.post('/register/user', result, userRegister);

export default router;