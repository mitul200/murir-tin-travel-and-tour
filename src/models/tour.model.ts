import { model, Schema } from "mongoose";
import { ITour, ITourMethods, TTourModel } from "../interfaces/tour.interface";
import slugify from "slugify";

const tourSchema = new Schema<ITour, TTourModel, ITourMethods>(
  {
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
      unique: true,
      lowercase: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

tourSchema.virtual("durationDay").get(function () {
  return this.durationHours / 24;
});

tourSchema.pre("save", function (next) {
  this.slag = slugify(this.name, { lower: true });
  next();
});

tourSchema.methods.getNextNearestStartDateAndEndDate = function (): {
  nearestStartDate: Date | null;
  estimatedEndDate: Date | null;
} {
  const today = new Date();
  const futureDates = this.startDate.filter((startDate: Date) => {
    return startDate > today;
  });
  futureDates.sort((a: Date, b: Date) => a.getTime() - b.getTime());
  const nearestStartDate = futureDates[0];
  const estimatedEndDate = new Date(
    nearestStartDate.getTime() + this.durationHours * 60 * 60 * 1000
  );
  return {
    nearestStartDate,
    estimatedEndDate,
  };
};
// Create the Mongoose model
const Tour = model<ITour, TTourModel>("Tour", tourSchema);

export default Tour;
function startDate(value: Date, index: number, array: Date[]): value is Date {
  throw new Error("Function not implemented.");
}
