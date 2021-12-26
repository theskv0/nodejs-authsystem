import { Router } from "express";
import { homeView } from "../controllers/HomeController";

const router = Router();

router.get('/', homeView);

export default router;