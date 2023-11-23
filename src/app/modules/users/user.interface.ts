import { Schema, model, connect } from "mongoose";

// interface
// i am using type here

// type for orders
type Order = {
  productName: string;
  price: number;
  quantity: number;
};

export type User = {
  userId: number;
  userName: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
  orders: Order[];
};
