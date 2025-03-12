import { model, Schema } from "mongoose";
import { ITour } from "../interfaces/tour.interface";

const tourSchema = new Schema<ITour>({
  name: {
    type: String,
    required: [true, "A tour must have a name"],
    trim: true,
    unique: true,
  },
  durationHours: {
    type: Number,
    required: [true, "A tour must have a duration"],
  },
  ratingAvg: {
    type: Number,
    default: 4.5,
    min: [1, "Rating must be above 1.0"],
    max: [5, "Rating must be below 5.0"],
  },
  ratingQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, "A tour must have a price"],
  },
  imgCover: {
    type: String,
    required: [true, "A tour must have a cover image"],
  },
  image: {
    type: [String],
    required: [true, "A tour must have images"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false, // Hide this field from query results
  },
  startDate: {
    type: [Date],
    required: [true, "A tour must have start dates"],
  },
  startLoaction: {
    type: String,
    required: [true, "A tour must have a start location"],
  },
  locations: {
    type: [String],
    required: [true, "A tour must have locations"],
  },
  slag: {
    type: String,
    required: [true, "A tour must have a slug"],
    unique: true,
    lowercase: true,
  },
});

// Create the Mongoose model
const Tour = model<ITour>("Tour", tourSchema);

export default Tour;
