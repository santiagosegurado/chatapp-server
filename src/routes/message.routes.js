import { Router } from "express";
import { addMessage, getMessages } from "../controllers/message.controller.js";

const messageRouter = Router();

messageRouter.post("/", addMessage);
messageRouter.get("/:conversationId", getMessages);

export default messageRouter;
