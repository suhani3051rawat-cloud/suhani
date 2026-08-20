import { Router } from "express";
let router = Router();
import {userRegister, 
        userLogin, 
        userLogOut, 
        getCurrentUser,
        storeMultipleAddress,
        DeleteUserAccount,
        searchProducts} from "../controller/userAuthController.js";
import {result} from "../middleware/userAuthMiddleware.js";
import {verifyToken} from "../middleware/tokenVerify.js"; 

router.post('/register/user', result, userRegister);
router.post('/login/user', userLogin);
router.post('/logout/user', userLogOut);
router.get('/getCurrent/user',verifyToken, getCurrentUser);
router.post('/user/multiAddress/:user_id',storeMultipleAddress);
router.put('/Delete/user/:user_id',DeleteUserAccount);
router.get('/search/products', searchProducts);

export default router;