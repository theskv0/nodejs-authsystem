import passport from "passport";
import { Router } from "express";
import Validator from "./../../middlewares/validator-middleware";
import { AuthController } from '../../controllers';


import {
    ResetPassword,
    RegisterValidations,
    AuthenticateValidations,
} from "../../validators";

const router = Router();

router.post('/login', AuthenticateValidations, Validator, AuthController.authenticateUser);
router.post('/register', RegisterValidations, Validator, AuthController.registerUser);


export default router;