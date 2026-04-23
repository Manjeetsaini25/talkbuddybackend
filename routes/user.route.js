import express from "express";
import { login, signup, logout } from "../controller/user.controller.js";

const router = express();

router.post("/signup", signup);
router.post("/login",login);
router.post("/logout",logout);

export default router;