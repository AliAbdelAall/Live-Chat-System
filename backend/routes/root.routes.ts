import { Router } from "express";
import authRoutes from "./auth.routes";
import messageRoutes from "./message.routes";
import userRoutes from "./user.routes";

const rootRoutes = Router();

rootRoutes.use("/auth", authRoutes);
rootRoutes.use("/message", messageRoutes);
rootRoutes.use("/users", userRoutes);

export default rootRoutes;
