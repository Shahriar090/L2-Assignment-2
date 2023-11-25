"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userFromController = void 0;
const user_service_1 = require("./user.service");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body.userData;
        const result = yield user_service_1.userFromService.createUserIntoDb(user);
        res.status(200).json({
            success: true,
            message: "User created in DB successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(200).json({
            success: true,
            message: "User creating failed",
        });
    }
});
// get users with specified fields
const getUsersWithFields = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_service_1.userFromService.getUserWithFields();
        res.status(200).json({
            success: true,
            message: "Retrieved user successfully",
            data: users,
        });
    }
    catch (error) {
        res.status(500).json({
            success: true,
            message: "Retrieving user failed",
        });
    }
});
// getting user by id
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = parseInt(req.params.userId, 22);
        const user = yield user_service_1.userFromService.getUserById(userId);
        if (user) {
            res.status(200).json({
                success: true,
                message: "User fetched successfully!",
                data: user,
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: "User not found",
                data: null,
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
});
// update user
const updateUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = parseInt(req.params.userId, 30);
        const updatedUser = req.body.updatedUserData;
        const updatedUserData = yield user_service_1.userFromService.updateUser(userId, updatedUser);
        res.status(200).json({
            success: true,
            message: "User updated successfully!",
            data: updatedUserData,
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
        });
    }
});
const deleteUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = parseInt(req.params.userId, 10);
        yield user_service_1.userFromService.deleteUserById(userId);
        res.status(200).json({
            success: true,
            message: "User deleted successfully!",
            data: null,
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: "Delete failed",
            data: null,
        });
    }
});
exports.userFromController = {
    createUser,
    getUsersWithFields,
    getUserById,
    updateUserById,
    deleteUserById,
};
