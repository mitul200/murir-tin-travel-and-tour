import { Request, Response } from "express";
import { TourServices } from "../services/tour.service";

const creatTour = async (req: Request, res: Response) => {
  try {
    const tourData = req.body;
    const result = await TourServices.creatTour(tourData);
    res.status(201).json({
      success: true,
      message: "tour created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something wants wrong !!",
    });
  }
};

const getAlltours = async (req: Request, res: Response) => {
  try {
    const result = await TourServices.getAlltours();
    res.status(200).json({
      success: true,
      message: "tours get successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something wants wrong !!",
    });
  }
};
const getSingletour = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await TourServices.getSingleData(id);
    res.status(200).json({
      success: true,
      message: "Single tours get successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something wants wrong !!",
    });
  }
};
const updateTour = async (req: Request, res: Response) => {
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
    res.status(500).json({
      success: false,
      message: error.message || "Something wants wrong !!",
    });
  }
};
const deleteTour = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await TourServices.deleteTourService(id);
    res.status(200).json({
      success: true,
      message: "Tour deleted successfully !!",
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something wants wrong !!",
    });
  }
};

export const TourController = {
  creatTour,
  getAlltours,
  deleteTour,
  updateTour,
  getSingletour,
};
