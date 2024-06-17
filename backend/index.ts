import express, { Express } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import rootRoutes from "./routes/root.routes";
import { connect } from "./config/db.config";

dotenv.config();
const port = process.env.PORT || 3000;
const app: Express = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api", rootRoutes);

app.listen(port, () => {
	console.log(`app is running on port: ${port}`);
	connect();
});
