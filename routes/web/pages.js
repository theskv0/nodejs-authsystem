import { Router } from "express";
import { Authenticate } from '../../middlewares';
import { PageController } from "../../controllers";

const router = Router();

router.get('/', PageController.authenticateUserView);
router.get('/register', PageController.registerUserView);

router.get('/dashboard', Authenticate, PageController.homeView);

export default router;