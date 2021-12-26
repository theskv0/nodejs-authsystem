import { Router } from "express";
import { authenticateUserView } from './../controllers/AuthController';

const router = Router();

router.get('/login', authenticateUserView);

export default router;