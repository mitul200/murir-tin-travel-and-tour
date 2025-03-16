import { Model, Schema } from "mongoose";

interface IReview {
  review: string;
  rating: number;
  createdAt: Date;
  tour: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
}

interface IReviewModel extends Model<IReview> {
  calcAVGRating(): Promise<void>;
}

export { IReview, IReviewModel };
