import express from "express";
import cors from "cors";
import faqRoutes from "./routes/faqRoutes.js";
import connectDB from "./config/db.js";

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/faqs", faqRoutes);

export default app;
