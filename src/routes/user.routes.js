import { Router } from "express";
import { getUserById, getUsers, login, register } from "../controllers/user.controller.js";

const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/:userId", getUserById);
authRouter.get("/", getUsers);

export default authRouter;
