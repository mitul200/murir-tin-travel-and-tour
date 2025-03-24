import { NextFunction, Request, Response } from "express";
import { UserServices } from "../services/user.service";
import sendSuccessResponse from "../utiles/sendResponse";



const creatUser = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const userData = req.body;
    const result = await UserServices.creatUser(userData);
    sendSuccessResponse(res,{
      statusCode: 201,
      status: "success",
      message: "User created successfully",
      data: result
    })
  } catch (error: any) {
    next()
  }
};

const getAllusers = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const result = await UserServices.getAllusers();
    sendSuccessResponse(res,{
      statusCode: 200,
      status: "success",
      message: "get all users sucessfully",
      data: result
    })
  } catch (error: any) {
    next()
  }
};
const getSingleuser = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const id = req.params.id;
    const result = await UserServices.getSingleData(id);
    sendSuccessResponse(res,{
      statusCode: 200,
      status: "success",
      message: "Get single data successfully",
      data: result
    })
  } catch (error: any) {
     next()
  }
};
const updateUser = async (req: Request, res: Response , next:NextFunction) => {
  try {
    const userData = req.body;
    const id = req.params.id;
    const result = await UserServices.userUpdateService(id, userData);
   sendSuccessResponse(res,{
     statusCode: 200,
     status: "success",
     message: "User update successfully",
     data: result
   })
  } catch (error: any) {
    next()
  }
};
const deleteUser = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const id = req.params.id;
    await UserServices.deleteUserService(id);
   sendSuccessResponse(res,{
     statusCode: 200,
     status: "success",
     message: "User update successfully",
     data: undefined
   })
  } catch (error: any) {
    next()
  }
};

export const UserController = {
  creatUser,
  getAllusers,
  deleteUser,
  updateUser,
  getSingleuser,
};
