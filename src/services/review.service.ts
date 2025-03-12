import { IReview } from "../interfaces/review.interface";
import Review from "../models/review.model";

const creatReview = async (reviewData: IReview): Promise<IReview> => {
  const result = await Review.create(reviewData);
  return result;
};

const getAllreviews = async (): Promise<IReview[]> => {
  const result = await Review.find();
  return result;
};

const getSingleData = async (id: string): Promise<IReview | null> => {
  const result = await Review.findById(id);
  return result;
};

const reviewUpdateService = async (
  id: string,
  reviewData: IReview
): Promise<IReview | null> => {
  const result = await Review.findByIdAndUpdate(id, reviewData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteReviewService = async (id: string): Promise<IReview | null> => {
  const result = await Review.findByIdAndDelete(id);
  return result;
};

export const ReviewServices = {
  creatReview,
  reviewUpdateService,
  getSingleData,
  getAllreviews,
  deleteReviewService,
};
