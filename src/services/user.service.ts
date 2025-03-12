import { IUser } from "../interfaces/user.interface";
import User from "../models/user.model";

const creatUser = async (userData: IUser): Promise<IUser> => {
  const result = await User.create(userData);
  return result;
};

const getAllusers = async (): Promise<IUser[]> => {
  const result = await User.find();
  return result;
};

const getSingleData = async (id: string): Promise<IUser | null> => {
  const result = await User.findById(id);
  return result;
};

const userUpdateService = async (
  id: string,
  userData: IUser
): Promise<IUser | null> => {
  const result = await User.findByIdAndUpdate(id, userData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteUserService = async (id: string): Promise<IUser | null> => {
  const result = await User.findByIdAndDelete(id);
  return result;
};

export const UserServices = {
  creatUser,
  userUpdateService,
  getSingleData,
  getAllusers,
  deleteUserService,
};
