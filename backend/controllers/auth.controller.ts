import { Request, Response } from "express";
import { hash, genSalt } from "bcryptjs";
import User, { IUser } from "../models/user.model";
import { generateTokenAndSetCookie } from "../utils/generateToken";

export const signup = async (
	req: Request,
	res: Response
): Promise<Response> => {
	try {
		const { firstName, lastName, username, password, confirmPassword } =
			req.body;

		if (password !== confirmPassword) {
			console.log("Signup: passwords don't match");
			return res.status(400).json({ error: "Passwords don't match" });
		}

		const user = await User.findOne({ username });

		if (user) {
			console.log("Signup: user already exists");
			return res.status(400).json({ error: "User already exists" });
		}

		const salt = await genSalt(10);
		const hashedPassword = await hash(password, salt);

		const newUser: IUser = new User({
			firstName,
			lastName,
			username,
			password: hashedPassword,
		});
		if (newUser) {
			generateTokenAndSetCookie(newUser._id, res);
			await newUser.save();
		}

		return res.status(201).json({ message: "User created successfully" });
	} catch (error) {
		console.log("Signup: Internal server error", error);
		return res.status(500).json({ error: "Internal server error" });
	}
};
