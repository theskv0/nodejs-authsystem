import passport from "passport";
import { Router } from "express";
import { PageController } from "../../controllers";

const router = Router();

router.get('/', PageController.authenticateUserView);
router.get('/register', PageController.registerUserView);
router.get('/dashboard', passport.authenticate('jwt', {session: false}), PageController.homeView);

export default router;