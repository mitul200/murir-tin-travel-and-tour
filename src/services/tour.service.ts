import { ITour } from "../interfaces/tour.interface";
import Tour from "../models/tour.model";

const creatTour = async (tourData: ITour): Promise<ITour> => {
  const result = await Tour.create(tourData);
  return result;
};

const getAlltours = async (): Promise<ITour[]> => {
  const result = await Tour.find();
  return result;
};

const getSingleData = async (id: string): Promise<ITour | null> => {
  const result = await Tour.findById(id).populate("reviews");
  return result;
};

const tourUpdateService = async (
  id: string,
  tourData: ITour
): Promise<ITour | null> => {
  const result = await Tour.findByIdAndUpdate(id, tourData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteTourService = async (id: string): Promise<ITour | null> => {
  const result = await Tour.findByIdAndDelete(id);
  return result;
};

const getNextScheduleService = async (id: string): Promise<any> => {
  const tour = await Tour.findById(id);
  const nextSchedule = tour?.getNextNearestStartDateAndEndDate();
  return {
    tour,
    nextSchedule,
  };
};

export const TourServices = {
  creatTour,
  tourUpdateService,
  getSingleData,
  getAlltours,
  deleteTourService,
  getNextScheduleService,
};
