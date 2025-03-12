import { model, Query, Schema } from "mongoose";
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

// if i  don't want to get data "inActive data then i would define a middleware before the modela"


// **** pre find hook for query middleware
userSchema.pre(/^find/, function (this: Query<IUser, Document>, next) {
  this.find({ userStatus: { $eq: "active" } });
  next();
});

// userSchema.pre(/^find/, function (this: Query<IUser, Document>, next) {
//   this.find({ userStatus: { $eq: "active" } });
//   next();
// });

// userSchema.pre("findOne", function (next) {
//   this.findOne({ userStatus: { $eq: "active" } });
//   next();
// });

const User = model<IUser>("User", userSchema);

export default User;
