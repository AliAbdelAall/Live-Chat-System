import { Schema, model, Document, ObjectId } from "mongoose";

export interface IUser extends Document {
	_id: ObjectId;
	firstName: string;
	lastName: string;
	username: string;
	password: string;
	profilePic?: string;
}

const userSchema = new Schema<IUser>(
	{
		firstName: {
			type: String,
			required: true,
			trim: true,
		},
		lastName: {
			type: String,
			required: true,
			trim: true,
		},
		username: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			minlength: 6,
		},
		profilePic: {
			type: String,
			default: "default-profile.png",
		},
	},
	{ timestamps: true }
);

const User = model<IUser>("User", userSchema);

export default User;
