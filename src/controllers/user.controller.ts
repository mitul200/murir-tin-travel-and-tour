import { Request, Response } from "express";
import { UserServices } from "../services/user.service";

const creatUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const result = await UserServices.creatUser(userData);
    res.status(201).json({
      success: true,
      message: "user created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something wants wrong !!",
    });
  }
};

const getAllusers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllusers();
    res.status(200).json({
      success: true,
      message: "users get successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something wants wrong !!",
    });
  }
};
const getSingleuser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await UserServices.getSingleData(id);
    res.status(200).json({
      success: true,
      message: "Single users get successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something wants wrong !!",
    });
  }
};
const updateUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const id = req.params.id;
    const result = await UserServices.userUpdateService(id, userData);
    res.status(200).json({
      success: true,
      message: "user update successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something wants wrong !!",
    });
  }
};
const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await UserServices.deleteUserService(id);
    res.status(200).json({
      success: true,
      message: "User deleted successfully !!",
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something wants wrong !!",
    });
  }
};

export const UserController = {
  creatUser,
  getAllusers,
  deleteUser,
  updateUser,
  getSingleuser,
};
