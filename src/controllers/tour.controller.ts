import { NextFunction, Request, Response } from "express";
import { TourServices } from "../services/tour.service";

const creatTour = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const tourData = req.body;
    const result = await TourServices.creatTour(tourData);
    res.status(201).json({
      success: true,
      message: "tour created successfully",
      data: result,
    });
  } catch (error: any) {
    next(error)
  }
};

const getAlltours = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const result = await TourServices.getAlltours();
    // throw new Error("something is very very wrong ")
    res.status(200).json({
      success: true,
      message: "tours get successfully",
      data: result,
    });
  } catch (error: any) {
     next(error)
  }
};
const getSingletour = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const id = req.params.id;
    const result = await TourServices.getSingleData(id);
    res.status(200).json({
      success: true,
      message: "Single tours get successfully!",
      data: result,
    });
  } catch (error: any) {
    next(error)
  }
};
const updateTour = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const tourData = req.body;
    const id = req.params.id;
    const result = await TourServices.tourUpdateService(id, tourData);
    res.status(200).json({
      success: true,
      message: "tour update successfully!",
      data: result,
    });
  } catch (error: any) {
    next(error)
  }
};
const getNextSchedule = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const id = req.params.id;
    const result = await TourServices.getNextScheduleService(id);
    res.status(200).json({
      success: true,
      message: "Nearest tour get secussfully",
      data: result,
    });
  } catch (error: any) {
     next(error)
  }
};

const deleteTour = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const id = req.params.id;
    await TourServices.deleteTourService(id);
    res.status(200).json({
      success: true,
      message: "Tour deleted successfully !!",
    });
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
