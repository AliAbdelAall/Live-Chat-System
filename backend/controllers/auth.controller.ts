import { Request, Response } from "express";
import { hash, genSalt, compare } from "bcryptjs";
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

export const login = async (req: Request, res: Response): Promise<Response> => {
	try {
		const { username, password } = req.body;

		const user = await User.findOne({ username });

		if (!user) {
			console.log("Login: user does not exist");
			return res.status(400).json({ error: "User does not exist" });
		}

		const isPasswordCorrect = await compare(password, user.password);

		if (!isPasswordCorrect) {
			console.log("Login: Incorrect username/password");
			return res
				.status(400)
				.json({ error: "Incorrect username/password" });
		}
		generateTokenAndSetCookie(user._id, res);

		return res.status(200).json({ message: "User logged-in successfully" });
	} catch (error) {
		console.log("Login: Internal server error", error);
		return res.status(500).json({ error: "Internal server error" });
	}
};

export const logout = (req: Request, res: Response): Response => {
	try {
		res.cookie("jwt", "", { maxAge: 0 });
		return res
			.status(200)
			.json({ message: "User logged-out successfully" });
	} catch (error) {
		console.log("Logout: Internal server error", error);
		return res.status(500).json({ error: "Internal server error" });
	}
};
