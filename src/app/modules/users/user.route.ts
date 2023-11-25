import express from "express";
import { userFromController } from "./user.controller";
const router = express.Router();

router.post("/api/users", userFromController.createUser);
router.get("/api/users", userFromController.getUsersWithFields);
router.get("/api/users/:userId", userFromController.getUserById);
router.put("/api/users/:userId", userFromController.updateUserById);
router.delete("/api/users/:userId", userFromController.deleteUserById);
export const routerFromUserRoute = router;
