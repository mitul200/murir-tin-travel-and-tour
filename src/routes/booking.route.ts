import express from "express";
import { BookingController } from "../controllers/booking.controller";
const router = express.Router();

router.post("/create-booking", BookingController.creatBooking);
router.get("/", BookingController.getAllbookings);
router.get("/:id", BookingController.getSinglebooking);
router.patch("/:id", BookingController.updateBooking);
router.get("/:userId/get-all-booking", BookingController.getAllBookingsOfUser);
router.delete("/:id", BookingController.deleteBooking);
 

export const bookingRouter = router;
