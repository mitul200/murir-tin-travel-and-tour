import express from "express"
import { userRouter } from "./user.route";
import { tourRouter } from "./tour.route";
import { reviewRouter } from "./review.route";
import randomRoutesArray from "../constants/router.constants";

const globalRoutes = express.Router()

globalRoutes.use("/users", userRouter);
globalRoutes.use("/tours", tourRouter);
globalRoutes.use("/reviews", reviewRouter);

randomRoutesArray.forEach((routeObject)=>{
globalRoutes.use(routeObject.path, routeObject.routs);
})



export default globalRoutes