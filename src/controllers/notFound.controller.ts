import { Request, Response } from "express"

const notFound = (req:Request,res:Response)=>{
    res.status(404).json({
      status:"falll",
        message: `Route not found ${req.originalUrl} for controller`,
  
    })
  }
  export default notFound