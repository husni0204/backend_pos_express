import { Router } from "express";
import { createCategory, deleteCategory, getAllCategory, getCategoryById, updateCategory } from "../controllers/category.controller.js";
import { autenticate } from "../controllers/error.controller.js";


const categoryRouter = Router();

categoryRouter.get("/categories", autenticate, getAllCategory);
categoryRouter.get("/categories/:id", autenticate, getCategoryById);
categoryRouter.post("/categories", autenticate, createCategory);
categoryRouter.put("/categories/:id", autenticate, updateCategory);
categoryRouter.delete("/categories/:id", autenticate, deleteCategory);

export default categoryRouter;