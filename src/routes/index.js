import { Router } from "express";
import userRouter from "./user.route.js";
import categoryRouter from "./category.route.js";
import supplierRouter from "./supplier.route.js";
import productRoute from "./product.route.js";
import cartRoute from "./cart.route.js";
import orderRoute from "./order.route.js";
import orderReturnRoute from "./orderReturn.route.js";
import purchaseRoute from "./purchase.route.js";

const router = Router();

// router.get("/api", (req, res) => res.send("Hello this is API!"));
router.use("/api", userRouter);
router.use("/api", categoryRouter);
router.use("/api", supplierRouter);
router.use("/api", productRoute);
router.use("/api", cartRoute);
router.use("/api", orderRoute);
router.use("/api", orderReturnRoute);
router.use("/api", purchaseRoute);
router.use("*", (req, res) => {
    res.status(404).json({
        message: "Not Found",
    });
});

export default router;
