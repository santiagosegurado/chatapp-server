import { Router } from "express";
import { getConversationByUserId, newConversation } from "../controllers/conversation.controller.js";


const conversationRouter = Router();

// New Conversation
conversationRouter.post("/", newConversation);
conversationRouter.get("/:userId", getConversationByUserId);

export default conversationRouter;
