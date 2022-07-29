import mongoose from "db/mongo";
import { Schema } from "mongoose";

const cartSchema = new mongoose.Schema({
  quantity: { type: Number },
  product: { type: Schema.Types.ObjectId, ref: "products" },
});

const userSchema = new mongoose.Schema(
  {
    username: {
      required: true,
      trim: true,
      type: String,
      unique: true,
    },
    email: {
      required: true,
      trim: true,
      type: String,
      unique: true,
    },
    password: {
      required: true,
      trim: true,
      type: String,
    },
    cart: [{ type: cartSchema }],
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("users", userSchema);
