import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
 
 
import globalErrorHandler from "./middlewares/globalErrorHandler";
import notFound from "./middlewares/notFound";
import globalRoutes from "./routes";

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json()); // Add this to parse JSON request bodies

// Define the userRoute
// const userRoute = express.Router();

// Mount the userRoute at /api/v1/users

// all routes 
app.use("/api/v1/",globalRoutes);

// Root route
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Welcome to our Murir Tin Tour & Travel",
  });
});

// 404 not found route 
app.use(notFound)

// Global error handler 
app.use(globalErrorHandler);

// Export the app (optional, if this is part of a larger application)
export default app;
