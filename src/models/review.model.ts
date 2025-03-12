import { model, Schema } from "mongoose";
import { IReview } from "../interfaces/review.interface";

// Create the Mongoose schema
const reviewSchema = new Schema<IReview>({
  review: {
    type: String,
    required: [true, "A review must have a description"],
    trim: true,
  },
  rating: {
    type: Number,
    required: [true, "A review must have a rating"],
    min: [1, "Rating must be above 1.0"],
    max: [5, "Rating must be below 5.0"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  tour: {
    type: Schema.Types.ObjectId,
    ref: "Tour", // Reference to the Tour model
    required: [true, "A review must belong to a tour"],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: [true, "A review must belong to a user"],
  },
});

// Create the Mongoose model
const Review = model<IReview>("Review", reviewSchema);

export default Review;
