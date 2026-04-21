import express from "express";
import { signup } from "../controller/user.controller.js";

const router = express();

router.post("/signup", signup);

export default router;