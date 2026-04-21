import express from "express";
import { login, signup } from "../controller/user.controller.js";

const router = express();

router.post("/signup", signup);
router.post("/login",login);

export default router;