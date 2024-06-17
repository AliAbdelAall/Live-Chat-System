import { Schema, model, Document, ObjectId } from "mongoose";

export interface IMessage extends Document {
	_id: ObjectId;
	senderId: ObjectId;
	receiverId: ObjectId;
	message: string;
}

const messageShema = new Schema<IMessage>(
	{
		senderId: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		receiverId: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		message: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const Message = model("Message", messageShema);
export default Message;
