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
exports.userFromService = void 0;
const user_model_1 = require("./user.model");
// create user
const createUserIntoDb = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.UserModel.create(user);
    return result;
});
// Retrieve a list of all users
const getUserWithFields = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_model_1.UserModel.find({});
        const userWithSpecificField = users.map((user) => ({
            userName: user.username,
            fullName: user.fullName,
            age: user.age,
            email: user.email,
            address: user.address,
        }));
        return userWithSpecificField;
    }
    catch (error) {
        throw new Error("Error fetching users from database");
    }
});
// get user by id
const getUserById = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.UserModel.findOne({ userId });
        return user;
    }
    catch (error) {
        throw new Error("Error fetching user from the database");
    }
});
// update user
const updateUser = (userId, updateUser) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.UserModel.findOneAndUpdate({ userId }, updateUser, {
            new: true,
        });
        if (!user) {
            throw new Error("User not found");
        }
        const updateUserWithoutPass = Object.assign(Object.assign({}, user.toObject()), { password: undefined });
        return updateUserWithoutPass;
    }
    catch (error) {
        throw new Error("User update failed");
    }
});
// delete user
const deleteUserById = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteUser = yield user_model_1.UserModel.findOneAndDelete({ userId });
        if (!deleteUser) {
            throw new Error("User not found");
        }
        return null;
    }
    catch (error) {
        throw new Error("Deleting user failed");
    }
});
exports.userFromService = {
    createUserIntoDb,
    getUserWithFields,
    getUserById,
    updateUser,
    deleteUserById,
};
