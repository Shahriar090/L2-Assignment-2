import { Schema, model, connect } from "mongoose";

// interface
// i am using type here

// type for full name
export type FUllName = {
  firstName: string;
  lastName: string;
};

// type for orders
export type Order = {
  productName: string;
  price: number;
  quantity: number;
};

// type for address
export type Address = {
  street: string;
  city: string;
  country: string;
};

export type User = {
  userId: number;
  userName: string;
  password: string;
  fullName: FUllName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: Address;
  orders: Order[];
};
