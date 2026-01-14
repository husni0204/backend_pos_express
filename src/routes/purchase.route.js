import { Router } from "express";
import { autenticate } from "../controllers/error.controller.js";
import { createPurchase, generateExcel, generatePdf, getAllPurchase, getPurchaseById, purchaseYearly } from "../controllers/purchase.controller.js";

const purchaseRoute = Router();

purchaseRoute.post("/purchases", autenticate, createPurchase);
purchaseRoute.get("/purchases", autenticate, getAllPurchase);
purchaseRoute.get("/purchases/:id", autenticate, getPurchaseById);
purchaseRoute.post("/purchases-pdf", autenticate, generatePdf);
purchaseRoute.post("/purchases-excel", autenticate, generateExcel);
purchaseRoute.get("/purchase-year", autenticate, purchaseYearly);

export default purchaseRoute;
