import { model, Schema } from "mongoose";
import { IBooking } from "../interfaces/booing.interface";

const bookingSchema = new Schema<IBooking>(
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User", 
      },
      tour: {
        type: Schema.Types.ObjectId,
        ref: "Tour",
      },
      bookedSlot: {
        type: Number,
        required: [true, "Booking must have a slot number"],
        min: [1, "Slot number must be at least 1"],
      },
      price: {
        type: Number,
        required: [true, "Booking must have a price"],
      },
      bookingstatus: {
        type: String,
        enum: ["pending", "paid", "cancelled"],
        default: "pending",
      },
    },
    {
      timestamps: true, // This adds createdAt and updatedAt fields automatically
      toJSON: { virtuals: true },
      toObject: { virtuals: true },
    }
  );


 export const Booking = model<IBooking>("Booking", bookingSchema);