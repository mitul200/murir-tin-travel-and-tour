import { NextFunction, Request, RequestHandler, Response } from "express";
import { ReviewServices } from "../services/review.service";

const catchAsync =(fn:RequestHandler)=>{
  return (req:Request,res:Response,next:NextFunction)=>{
    Promise.resolve(fn(req,res,next)).catch((err)=>next())
  }
}

const creatReview = catchAsync(async (req: Request, res: Response,next:NextFunction) => {
  
    const reviewData = req.body;
    const result = await ReviewServices.creatReview(reviewData);
    res.status(201).json({
      success: true,
      message: "review created successfully",
      data: result,
    });
  })

const getAllreviews = catchAsync(async (req: Request, res: Response,next:NextFunction) => {
  try {
    const result = await ReviewServices.getAllreviews();
    res.status(200).json({
      success: true,
      message: "reviews get successfully",
      data: result,
    });
  } catch (error) { 
     next(error)
  }
})

const getSinglereview = catchAsync(async (req: Request, res: Response,next:NextFunction) => {
  try {
    const id = req.params.id;
    const result = await ReviewServices.getSingleData(id);
    res.status(200).json({
      success: true,
      message: "Single reviews get successfully!",
      data: result,
    });
  } catch (error ) {
    next(error)
  }
})

const updateReview = catchAsync(async (req: Request, res: Response,next:NextFunction) => {
   
    const reviewData = req.body;
    const id = req.params.id;
    const result = await ReviewServices.reviewUpdateService(id, reviewData);
    res.status(200).json({
      success: true,
      message: "review update successfully!",
      data: result,
    });
   
})

const deleteReview = catchAsync(async (req: Request, res: Response,next:NextFunction) => {
  
    const id = req.params.id;
    await ReviewServices.deleteReviewService(id);
    res.status(200).json({
      success: true,
      message: "Review deleted successfully !!",
    });
   
})

export const ReviewController = {
  creatReview,
  getAllreviews,
  deleteReview,
  updateReview,
  getSinglereview,
};
