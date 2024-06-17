import { Schema, model, Document, ObjectId } from "mongoose";

export interface IConversation extends Document {
	_id: ObjectId;
	participants: ObjectId[];
	messages: ObjectId[];
}

const conversationSchema = new Schema<IConversation>(
	{
		participants: [
			{
				type: Schema.Types.ObjectId,
				ref: "User",
			},
		],
		messages: [
			{
				type: Schema.Types.ObjectId,
				ref: "Message",
				default: [],
			},
		],
	},
	{ timestamps: true }
);

const Conversation = model("Conversation", conversationSchema);
export default Conversation;
