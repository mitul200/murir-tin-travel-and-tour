import { NextFunction, Request, Response } from "express";
import { TourServices } from "../services/tour.service";
import sendSuccessResponse from "../utiles/sendResponse";

const creatTour = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const tourData = req.body;
    const result = await TourServices.creatTour(tourData);
    sendSuccessResponse(res,{
      statusCode: 201,
      status: "success",
      message: "Tour created successfully",
      data: result
    })
  } catch (error: any) {
    next(error)
  }
};

const getAlltours = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const result = await TourServices.getAlltours();
    // throw new Error("something is very very wrong ")
   sendSuccessResponse(res,{
    statusCode: 201,
    status: "success",
    message: "get all Tour successfully",
    data: result
   })
  } catch (error: any) {
     next(error)
  }
};
const getSingletour = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const id = req.params.id;
    const result = await TourServices.getSingleData(id);
    sendSuccessResponse(res,{
      statusCode: 201,
      status: "success",
      message: "get single Tour successfully",
      data: result
    })
  } catch (error: any) {
    next(error)
  }
};
const updateTour = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const tourData = req.body;
    const id = req.params.id;
    const result = await TourServices.tourUpdateService(id, tourData);
    sendSuccessResponse(res,{
      statusCode: 201,
      status: "success",
      message: "update Tour successfully",
      data: result
    })
  } catch (error: any) {
    next(error)
  }
};
const getNextSchedule = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const id = req.params.id;
    const result = await TourServices.getNextScheduleService(id);
     sendSuccessResponse(res,{
      statusCode: 201,
      status: "success",
      message: "get next schedule successfully",
      data: result
     })
  } catch (error: any) {
     next(error)
  }
};

const deleteTour = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const id = req.params.id;
    await TourServices.deleteTourService(id);
    sendSuccessResponse(res,{
      statusCode: 201,
      status: "success",
      message: "Tour deleted successfully",
       
    })
  } catch (error: any) {
     next(error)
  }
};

export const TourController = {
  creatTour,
  getAlltours,
  deleteTour,
  updateTour,
  getSingletour,
  getNextSchedule,
};
