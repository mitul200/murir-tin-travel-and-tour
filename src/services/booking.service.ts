import mongoose from "mongoose";
import { IBooking } from "../interfaces/booing.interface";
import { Booking } from "../models/booking.model";
import Tour from "../models/tour.model";

const creatBooking = async (bookingData: IBooking): Promise<IBooking> => {

const session = await mongoose.startSession()

session.startTransaction()

try {
  const booking  = await Booking.create([bookingData],{session})

  if(!booking){
    throw new Error("booking create is field")
  }

 const tour =  await Tour.findByIdAndUpdate(booking[0].tour,{
    $inc:{avaiableSeat:-booking[0].bookedSlot
    }
  },{
    session
  })

  if(!tour){
    throw new Error("Something wants wrong in tour")
  }

  await session.commitTransaction()
  await session.endSession()
  return booking[0]
} catch (error:any) {
  await session.abortTransaction()
  await session.endSession()
  throw new Error(error)
}














  // const result = await Booking.create(bookingData);

  // if(!result){
  //   throw new Error("Booking could not be created")
  // }

  // Tour.findByIdAndUpdate(result.tour,{
  //   $inc: {avaiableSeat: -result.bookedSlot}
  // })
  // return result;
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
