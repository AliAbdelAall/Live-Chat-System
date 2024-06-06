import { Router, Request, Response } from "express";
import { login, signup } from "../controllers/auth.controller";

const authRoutes = Router();

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);

export default authRoutes;
