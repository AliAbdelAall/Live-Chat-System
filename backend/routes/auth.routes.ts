import { Router, Request, Response } from "express";
import { signup } from "../controllers/auth.controller";

const authRoutes = Router();

authRoutes.post("/signup", signup);

export default authRoutes;
