import { IUser } from "../models/user.model";

interface TestInvalidType {
	invalid: number;
}

declare module "express-serve-static-core" {
	interface Request {
		user?: IUser;
	}
}
