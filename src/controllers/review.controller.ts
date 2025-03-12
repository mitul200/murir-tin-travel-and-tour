import { Request, Response } from "express";
import { ReviewServices } from "../services/review.service";

const creatReview = async (req: Request, res: Response) => {
  try {
    const reviewData = req.body;
    const result = await ReviewServices.creatReview(reviewData);
    res.status(201).json({
      success: true,
      message: "review created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something wants wrong !!",
    });
  }
};

const getAllreviews = async (req: Request, res: Response) => {
  try {
    const result = await ReviewServices.getAllreviews();
    res.status(200).json({
      success: true,
      message: "reviews get successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something wants wrong !!",
    });
  }
};
const getSinglereview = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await ReviewServices.getSingleData(id);
    res.status(200).json({
      success: true,
      message: "Single reviews get successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something wants wrong !!",
    });
  }
};
const updateReview = async (req: Request, res: Response) => {
  try {
    const reviewData = req.body;
    const id = req.params.id;
    const result = await ReviewServices.reviewUpdateService(id, reviewData);
    res.status(200).json({
      success: true,
      message: "review update successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something wants wrong !!",
    });
  }
};
const deleteReview = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await ReviewServices.deleteReviewService(id);
    res.status(200).json({
      success: true,
      message: "Review deleted successfully !!",
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something wants wrong !!",
    });
  }
};

export const ReviewController = {
  creatReview,
  getAllreviews,
  deleteReview,
  updateReview,
  getSinglereview,
};
