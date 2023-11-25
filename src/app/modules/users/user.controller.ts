import { Request, Response } from "express";
import { userFromService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body.userData;

    const result = await userFromService.createUserIntoDb(user);

    res.status(200).json({
      success: true,
      message: "User created in DB successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
// get users with specified fields
const getUsersWithFields = async (req: Request, res: Response) => {
  try {
    const users = await userFromService.getUserWithFields();
    res.status(200).json({
      success: true,
      message: "Retrieved user successfully",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "Retrieving user failed",
    });
  }
};
export const userFromController = {
  createUser,
  getUsersWithFields,
};
