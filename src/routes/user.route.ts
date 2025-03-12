import express from "express";
import { UserController } from "../controllers/user.controller";
const router = express.Router();

router.post("/create-user", UserController.creatUser);
router.get("/", UserController.getAllusers);
router.get("/:id", UserController.getSingleuser);
router.patch("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

export const userRouter = router;
