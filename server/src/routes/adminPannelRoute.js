import Router from 'express';
let router = Router();
import { adminRegister, 
        adminLogin,
        adminLogOut,
        getCurrentAdmin,
        block_unBlock_user,
        addProducts,
        addcategory,
        categoryList,
        ListProducts,
        searchProducts,
        deleteProducts} from '../controller/adminAuthController.js';
import { upload } from '../middleware/addProductsMiddleware.js';
import { verifyToken } from '../middleware/tokenVerify.js';

router.post('/register/Admin', adminRegister);
router.post('/login/admin', adminLogin);
router.post('/logout/admin',adminLogOut);
router.get('/getCurrent/admin',verifyToken, getCurrentAdmin);
router.put('/block_unBlock/user/:user_id',block_unBlock_user);
router.post('/add/category',addcategory);
router.get('/category/list',categoryList);
router.post('/add/product/:category_id',upload.single("image"), addProducts);
router.get('/products/list',ListProducts);
router.get('/search/product',searchProducts); 
router.delete('/delete/product/:id',deleteProducts);

export default router;