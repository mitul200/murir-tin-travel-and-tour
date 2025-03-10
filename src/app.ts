import express, { Application, Request, Response } from "express";

const app: Application = express();

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to our murir tin tour&travel ",
  });
});

app.get("/api/v1/users", (req: Request, res: Response) => {
  const users = [
    {
      id: 1,
      name: "Khaled",
      email: "nai@gmail.com",
    },
    {
      id: 2,
      name: "mitul",
      email: "asse@gmail.com",
    },
  ];

  res.status(200).json({
    success: true,
    message: "data creat successfully",
    data: users,
  });
});
export default app;
