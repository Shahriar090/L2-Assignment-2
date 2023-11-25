import { UserDetails } from "./user.interface";
import { UserModel } from "./user.model";

const createUserIntoDb = async (user: UserDetails) => {
  const result = await UserModel.create(user);
  return result;
};

// Retrieve a list of all users

const getUserWithFields = async () => {
  try {
    const users = await UserModel.find({});
    const userWithSpecificField = users.map((user) => ({
      userName: user.username,
      fullName: user.fullName,
      age: user.age,
      email: user.email,
      address: user.address,
    }));
    return userWithSpecificField;
  } catch (error) {
    throw new Error("Error fetching users from database");
  }
};

const getUserById = async (userId: number) => {
  try {
    const user = await UserModel.findOne({ userId });
    return user;
  } catch (error) {
    throw new Error("Error fetching user from the database");
  }
};

// update user

const updateUser = async (userId: number, updateUser: UserDetails) => {
  try {
    const user = await UserModel.findOneAndUpdate({ userId }, updateUser, {
      new: true,
    });
    if (!user) {
      throw new Error("User not found");
    }
    const updateUserWithoutPass = {
      ...user.toObject(),
      password: undefined,
    };
    return updateUserWithoutPass;
  } catch (error) {
    throw new Error("User update failed");
  }
};
export const userFromService = {
  createUserIntoDb,
  getUserWithFields,
  getUserById,
  updateUser,
};
