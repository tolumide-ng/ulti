import { Router } from "express";
import { Authentication } from "../../../controller/authentication";

const router = Router();

router.post("/register", Authentication.signup);
router.post("/login", Authentication.login);

export default router;
