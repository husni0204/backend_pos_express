import prisma from "../utils/client";
import { logger } from "../utils/winston";

export const getAllCategory = async (req, res) => {
    try {
        const result = await prisma.category.findMany({
            orderBy: {
                id: "asc",
            }
        });
        return res.status(200).json({
            message: "success",
            result,
        });
    } catch (error) {
        logger.error("controllers/category.controller.js:getAllCategory - " + error.message);
        return res.status(500).json({
            message: error.message,
            result: null,
        });
    }
};

export const getCategoryById = async (req, res) => {
    try {
        const result = await prisma.category.findUnique({
            where: {
                id: Number(req.params.id),
            },
        });
        return res.status(200).json({
            message: "success",
            result,
        });
    } catch (error) {
        logger.error("controllers/category.controller.js:getCategoryById - " + error.message);
        return res.status(500).json({
            message: error.message,
            result: null,
        });
    }
}