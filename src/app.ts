import express, { Application, Request, Response } from "express";
import cors from "cors";
import { userRouter } from "./routes/user.route";
import { tourRouter } from "./routes/tour.route";
import { reviewRouter } from "./routes/review.route";

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json()); // Add this to parse JSON request bodies

// Define the userRoute
// const userRoute = express.Router();

// Mount the userRoute at /api/v1/users
app.use("/api/v1/users", userRouter);
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/reviews", reviewRouter);

// Root route
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Welcome to our Murir Tin Tour & Travel",
  });
});

// Export the app (optional, if this is part of a larger application)
export default app;
