import jwt from "jsonwebtoken";
import { ObjectId } from "mongoose";
import { Response } from "express";

export const generateTokenAndSetCookie = (userId: ObjectId, res: Response) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET!, {
		expiresIn: "15d",
	});
	res.cookie("jwt", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000,
		httpOnly: true,
		sameSite: "strict",
		secure: process.env.NODE_ENV !== "development",
	});
};
