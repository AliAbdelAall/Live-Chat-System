import { Router } from "express";
import { sendMessage } from "../controllers/message.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const messageRoutes = Router();

messageRoutes.post("/send/:id", authMiddleware, sendMessage);

export default messageRoutes;
