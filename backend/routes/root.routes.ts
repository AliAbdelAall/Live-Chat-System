import { Router } from "express";
import authRoutes from "./auth.routes";
import messageRoutes from "./message.routes";

const rootRoutes = Router();

rootRoutes.use("/auth", authRoutes);
rootRoutes.use("/message", messageRoutes);

export default rootRoutes;
