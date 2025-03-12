import express from "express";
import { ReviewController } from "../controllers/review.controller";
const router = express.Router();

router.post("/create-review", ReviewController.creatReview);
router.get("/", ReviewController.getAllreviews);
router.get("/:id", ReviewController.getSinglereview);
router.patch("/:id", ReviewController.updateReview);
router.delete("/:id", ReviewController.deleteReview);

export const reviewRouter = router;