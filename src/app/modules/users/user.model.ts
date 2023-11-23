import { model, connect, Schema } from "mongoose";
import { Address, FUllName, Order, User } from "./user.interface";

// sub schemas

// schema for full name
const fullNameSchema = new Schema<FUllName>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

// schema for address

const addressSchema = new Schema<Address>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

//   schema for orders

const ordersSchema = new Schema<Order>({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const userSchema = new Schema<User>({
  userId: { type: Number, required: true, unique: true },
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  fullName: fullNameSchema,
  age: { type: Number },
  email: { type: String, required: true },
  isActive: { type: Boolean },
  hobbies: [{ type: String }],
  address: addressSchema,
  orders: ordersSchema,
});
