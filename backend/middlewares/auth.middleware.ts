import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import User from "../models/user.model";
import { ObjectId } from "mongoose";

interface JwtPayload {
	userId: ObjectId;
}

export const authMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const token = req.cookies.jwt;
		if (!token) {
			return res
				.status(401)
				.json({ error: "unauthorized - No Token Provided" });
		}

		if (!process.env.JWT_SECRET) {
			throw Error("Invalid JWT_SECRET");
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;

		if (!decoded) {
			return res
				.status(401)
				.json({ error: "unauthorized - Invalid Token" });
		}

		const user = await User.findById(decoded.userId).select("-password");

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		req.user = user;

		next();
	} catch (error) {
		console.log("AuthMiddlware: Internal server error", error);
		return res.status(500).json({ error: "Internal server error" });
	}
};
