import { Router } from "express";
import userRouter from "./user.route.js";
const router = Router();

// router.get("/api", (req, res) => res.send("Hello this is API!"));
router.use("/api", userRouter);

export default router;
