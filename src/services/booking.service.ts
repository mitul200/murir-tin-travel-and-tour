import { IBooking } from "../interfaces/booing.interface";
import { Booking } from "../models/booking.model";

const creatBooking = async (bookingData: IBooking): Promise<IBooking> => {
  const result = await Booking.create(bookingData);
  return result;
};

const getAllbookings = async (): Promise<IBooking[]> => {
  const result = await Booking.find();
  return result;
};

const getSingleData = async (id: string): Promise<IBooking | null> => {
  const result = await Booking.findById(id);
  return result;
};

const getAllBookingOfUser = async (id: string): Promise<IBooking | null> => {
  const result = await Booking.findById({
    user:id
  });
  return result;
};

const bookingUpdateService = async (
  id: string,
  bookingData: IBooking
): Promise<IBooking | null> => {
  const result = await Booking.findByIdAndUpdate(id, bookingData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteBookingService = async (id: string): Promise<IBooking | null> => {
  const result = await Booking.findByIdAndDelete(id);
  return result;
};

export const BookingServices = {
  creatBooking,
  bookingUpdateService,
  getSingleData,
  getAllbookings,
  deleteBookingService,
  getAllBookingOfUser
};
