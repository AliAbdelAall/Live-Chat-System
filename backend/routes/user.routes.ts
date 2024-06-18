import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { getUsers } from "../controllers/user.controller";

const userRoutes = Router();

userRoutes.get("/", authMiddleware, getUsers);

export default userRoutes;
