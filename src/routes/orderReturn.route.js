import { Router } from "express";
import { autenticate } from "../controllers/error.controller.js";
import { insertOrderReturn } from "../controllers/orderReturn.controller.js";

const orderReturnRoute = Router();

orderReturnRoute.post("/orders-return", autenticate, insertOrderReturn);

export default orderReturnRoute;
