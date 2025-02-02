import express from "express";
import { createFAQ, getFAQs } from "../controllers/faqController.js";
import cacheMiddleware from "../middleware/cacheMiddleware.js";

const router = express.Router();

router.post("/", createFAQ);
router.get("/", cacheMiddleware, getFAQs);

export default router;
