import { Response } from "express"

type TSuccessResponse <T>= {
  statusCode:number
  status:"success" 
  message:string
  data:T|T[]|null
}
const sendSuccessResponse= <T>(res:Response,data:TSuccessResponse<T>)=>{
  res.status(data.statusCode).json({
    success: "success",
    message: data.message,
     data : data.data
  });
}

export default sendSuccessResponse