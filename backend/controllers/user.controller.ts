import { Request, Response } from "express";
import User from "../models/user.model";

export const getUsers = async (
	req: Request,
	res: Response
): Promise<Response> => {
	try {
		const currentUser = req.user?._id;
		const fiteredUsers = await User.find({
			_id: { $ne: currentUser },
		}).select("-password");

		return res.status(200).json(fiteredUsers);
	} catch (error) {
		console.log("GetUsers: Internal server error", error);
		return res.status(500).json({ error: "Internal server error" });
	}
};
