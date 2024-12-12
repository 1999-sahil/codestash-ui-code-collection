import mongoose from "mongoose";
import express from "express";
import Button from "../models/button.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        // . total number of buttons
        const total_buttons = await Button.countDocuments();

        res.status(200).json({
            total_buttons
        });

    } catch (error) {
        console.error("Error fetching admin stats:", error);
        res.status(500).json({ message: "Failed to fetch admin stats" });
    }
})

export default router;