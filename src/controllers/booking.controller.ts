import { NextFunction, Request, Response } from "express";
import { BookingServices } from "../services/booking.service";
import sendSuccessResponse from "../utiles/sendResponse";
import catchAsyncFunction from "../utiles/catchAsync";



const creatBooking = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const bookingData = req.body;
    const result = await BookingServices.creatBooking(bookingData);
    sendSuccessResponse(res,{
      statusCode: 201,
      status: "success",
      message: "Booking created successfully",
      data: result
    })
  } catch (error: any) {
    next(error)
  }
};

const getAllbookings = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const result = await BookingServices.getAllbookings();
    sendSuccessResponse(res,{
      statusCode: 200,
      status: "success",
      message: "get all bookings sucessfully",
      data: result
    })
  } catch (error: any) {
    next(error)
  }
};
const getSinglebooking = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const id = req.params.id;
    const result = await BookingServices.getSingleData(id);
    sendSuccessResponse(res,{
      statusCode: 200,
      status: "success",
      message: "Get single data successfully",
      data: result
    })
  } catch (error: any) {
     next(error)
  }
};


const getAllBookingsOfUser = catchAsyncFunction(async (req:Request,res:Response)=>{
    const userId = req.params.userId
    const result = await BookingServices.getAllBookingOfUser(userId)
    sendSuccessResponse(res,{
        statusCode: 200,
        status: "success",
        message: "get all booking of user",
        data: result
    })
})
const updateBooking = async (req: Request, res: Response , next:NextFunction) => {
  try {
    const bookingData = req.body;
    const id = req.params.id;
    const result = await BookingServices.bookingUpdateService(id, bookingData);
   sendSuccessResponse(res,{
     statusCode: 200,
     status: "success",
     message: "Booking update successfully",
     data: result
   })
  } catch (error: any) {
    next(error)
  }
};
const deleteBooking = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const id = req.params.id;
    await BookingServices.deleteBookingService(id);
   sendSuccessResponse(res,{
     statusCode: 200,
     status: "success",
     message: "Booking update successfully",
     data: undefined
   })
  } catch (error: any) {
    next(error)
  }
};

export const BookingController = {
  creatBooking,
  getAllbookings,
  deleteBooking,
  updateBooking,
  getSinglebooking,
  getAllBookingsOfUser
};
