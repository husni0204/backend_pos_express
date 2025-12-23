import { Router } from "express";
import userRouter from "./user.route.js";
import categoryRouter from "./category.route.js";


const router = Router();

// router.get("/api", (req, res) => res.send("Hello this is API!"));
router.use("/api", userRouter);
router.use("/api", categoryRouter);
router.use("*", (req, res) => res.status(404).json({ message: "Not Found" }));

export default router;
