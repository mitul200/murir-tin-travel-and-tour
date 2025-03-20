import { NextFunction, Request, Response } from "express";

const globalErrorHandler = (err:any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Something went wrong!";
    const status  = err.status || "error"
  
     res.status(statusCode).json({
      status,
      message
    });
  }

  export default globalErrorHandler