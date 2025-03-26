import mongoose from "mongoose";

export interface IBooking {
user: mongoose.Schema.Types.ObjectId,
tour: mongoose.Schema.Types.ObjectId,
bookedSlot: number,
price: number,
bookingstatus:"pending"|"paid"|"cancelled"
}