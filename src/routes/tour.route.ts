import express from "express";
import { TourController } from "../controllers/tour.controller";
const router = express.Router();

router.post("/create-tour", TourController.creatTour);
router.get("/", TourController.getAlltours);
router.get("/:id", TourController.getSingletour);
router.patch("/:id", TourController.updateTour);
router.delete("/:id", TourController.deleteTour);
router.get("/:id/next-schedule", TourController.getNextSchedule);

export const tourRouter = router;
