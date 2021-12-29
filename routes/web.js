import { Router } from "express";
import { homeView } from "../controllers/HomeController";
import * as Auth from './../controllers/AuthController';
import Validator from "./../middlewares/validator-middleware";

import {
    ResetPassword,
    RegisterValidations,
    AuthenticateValidations,
} from "../validators";

const router = Router();

router.get('/', Auth.authenticateUserView);
router.post('/login', Auth.authenticateUser);

router.get('/register', Auth.registerUserView);
router.post('/register', RegisterValidations, Validator, Auth.registerUser);

router.get('/dashboard', homeView);

export default router;