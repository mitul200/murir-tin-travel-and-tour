import { Model } from "mongoose";

interface ITour {
  name: string;
  durationHours: number;
  ratingAvg: number;
  ratingQuantity: number;
  price: number;
  imgCover: string;
  image: string[];
  createdAt: Date;
  startDates: Date[];
  startLoaction: string;
  locations: string[];
  slag: string;
}

interface ITourMethods {
  getNextNearestStartDateAndEndDate(): {
    nearestStartDate: Date | null;
    estimatedEndDate: Date | null;
  };
}

type TTourModel = Model<ITour, {}, ITourMethods>;

export { ITour, ITourMethods, TTourModel };
