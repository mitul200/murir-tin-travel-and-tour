import mongoose, { model, Schema } from "mongoose";
import { IReview, IReviewModel } from "../interfaces/review.interface";
import Tour from "./tour.model";

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

reviewSchema.index({ tour: 1, user: 1 }, { unique: true });

reviewSchema.statics.calcAVGRating = async function (
  tourId: mongoose.Types.ObjectId
) {
  const stats = await this.aggregate([
    {
      $match: tourId,
    },
    {
      $group: {
        _id: "$tour",
        numberOfRatings: { $sum: 1 },
        avgRatings: { $avg: "$rating" },
      },
    },
  ]);

  if (stats.length > 0) {
    await Tour.findByIdAndUpdate(tourId, {
      ratingAvg: stats[0].numberOfRatings,
      ratingQuantity: stats[0].avgRating,
    })
  }else{
    await Tour.findByIdAndUpdate
  }
};

// Create the Mongoose model
const Review = model<IReview, IReviewModel>("Review", reviewSchema);

export default Review;
