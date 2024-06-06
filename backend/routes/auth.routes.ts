import { Router } from "express";
import { login, logout, signup } from "../controllers/auth.controller";

const authRoutes = Router();

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.post("/logout", logout);

export default authRoutes;
