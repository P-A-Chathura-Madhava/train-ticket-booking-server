import express from "express";
import { createPayment } from "../controllers/paymentController.js";

const router = express.Router();

// Create
router.post("/", createPayment);

export default router;