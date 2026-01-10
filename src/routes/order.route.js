import { Router } from "express";
import { autenticate } from "../controllers/error.controller.js";
import { generateExcel, generatePdf, getAllOrder, getOrderById, insertOrder, orderYearly } from "../controllers/order.controller.js";

const orderRoute = Router();

orderRoute.post("/orders/:userId", autenticate, insertOrder);
orderRoute.get("/orders/:id", autenticate, getOrderById);
orderRoute.get("/orders", autenticate, getAllOrder);
orderRoute.get("/orders-pdf", autenticate, generatePdf);
orderRoute.post("/orders-excel", autenticate, generateExcel);
orderRoute.get("/orders-year", autenticate, orderYearly);

export default orderRoute;
