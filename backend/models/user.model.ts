import { Schema, model } from "mongoose";

const userSchema = new Schema({
	firstName: {
		type: String,
		require: true,
		trim: true,
	},
	username: {
		type: String,
		require: true,
		unique: true,
	},
	password: {
		type: String,
		require: true,
		minlength: 6,
	},
	profilePic: {
		type: String,
		default: "default-profile.png",
	},
});

const User = model("User", userSchema);

export default User;
