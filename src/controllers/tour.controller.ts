import { NextFunction, Request, RequestHandler, Response } from "express";
import { TourServices } from "../services/tour.service";
import sendSuccessResponse from "../utiles/sendResponse";
import catchAsyncFunction from "../utiles/catchAsync";

const creatTour = catchAsyncFunction(async (req: Request, res: Response) => {
   
    const tourData = req.body;
    const result = await TourServices.creatTour(tourData);
    sendSuccessResponse(res,{
      statusCode: 201,
      status: "success",
      message: "Tour created successfully",
      data: result
    })}
)

const getAlltours = catchAsyncFunction(async (req: Request, res: Response) => {
    const result = await TourServices.getAlltours();
   sendSuccessResponse(res,{
    statusCode: 201,
    status: "success",
    message: "get all Tour successfully",
    data: result
   })
  }  
 )
const getSingletour = catchAsyncFunction(async (req: Request, res: Response ) => {
    const id = req.params.id;
    const result = await TourServices.getSingleData(id);
    sendSuccessResponse(res,{
      statusCode: 201,
      status: "success",
      message: "get single Tour successfully",
      data: result
    })
  })
const updateTour = catchAsyncFunction(async (req: Request, res: Response) => {
    const tourData = req.body;
    const id = req.params.id;
    const result = await TourServices.tourUpdateService(id, tourData);
    sendSuccessResponse(res,{
      statusCode: 201,
      status: "success",
      message: "update Tour successfully",
      data: result
    })
  })
const getNextSchedule = catchAsyncFunction(async (req: Request, res: Response ) => {
    const id = req.params.id;
    const result = await TourServices.getNextScheduleService(id);
     sendSuccessResponse(res,{
      statusCode: 201,
      status: "success",
      message: "get next schedule successfully",
      data: result
     })
  } )

const deleteTour = catchAsyncFunction(async (req: Request, res: Response ) => {
  
  const id = req.params.id;
  await TourServices.deleteTourService(id);
  sendSuccessResponse(res,{
    statusCode: 201,
    status: "success",
    message: "Tour deleted successfully",
    data: undefined
  })
})

export const TourController = {
  creatTour,
  getAlltours,
  deleteTour,
  updateTour,
  getSingletour,
  getNextSchedule,
};
