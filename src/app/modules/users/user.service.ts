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

export const userFromService = {
  createUserIntoDb,
  getUserWithFields,
};
