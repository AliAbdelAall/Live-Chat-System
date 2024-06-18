import { Router } from "express";
import { getMessages, sendMessage } from "../controllers/message.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const messageRoutes = Router();

messageRoutes.get("/:id", authMiddleware, getMessages);
messageRoutes.post("/send/:id", authMiddleware, sendMessage);

export default messageRoutes;
