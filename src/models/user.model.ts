import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, "please tell us a name"],
  },
  email: {
    type: String,
    required: [true, "please tell us your email"],
  },
  age: {
    type: Number,
    required: [true, "please tell us your age"],
    lowercase: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
    required: [true, "Please specify a role"],
  },
  userStatus: {
    type: String,
    enum: ["active", "inActive"],
    default: "active",
  },
});

const User = model<IUser>("User", userSchema);

export default User;
