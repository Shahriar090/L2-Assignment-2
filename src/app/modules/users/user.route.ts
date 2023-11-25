import express from "express";
import { userFromController } from "./user.controller";
const router = express.Router();

router.post("/api/users", userFromController.createUser);
router.get("/api/users", userFromController.getUsersWithFields);

export const routerFromUserRoute = router;
