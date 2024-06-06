import express, { Express } from "express";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 3000;
const app: Express = express();

app.listen(port, () => {
	console.log(`app is running on port: ${port}`);
});
