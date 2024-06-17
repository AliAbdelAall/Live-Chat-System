import { Request, Response } from "express";
import Message, { IMessage } from "../models/message.model";
import Conversation from "../models/conversation.model";

export const sendMessage = async (
	req: Request,
	res: Response
): Promise<Response> => {
	try {
		const { message } = req.body;
		const { id: receiverId } = req.params;
		const senderId = req.user?._id;

		let conversation = await Conversation.findOne({
			participants: { $all: [senderId, receiverId] },
		});

		if (!conversation) {
			conversation = await Conversation.create({
				participants: [senderId, receiverId],
			});
		}

		const newMessage = new Message({
			senderId,
			receiverId,
			message,
		});

		if (newMessage) {
			conversation.messages.push(newMessage._id);
		}
		return res.status(201).json({ message: "Message sent successfully" });
	} catch (error) {
		console.log("SendMessage: Internal server error", error);
		return res.status(500).json({ error: "Internal server error" });
	}
};