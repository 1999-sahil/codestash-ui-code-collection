import express from "express";
import { createButton, deleteButtonById, getAllButtons, getButtonById, updateButtonById } from "../controllers/button.js";
import verifyAdminToken from "../middleware/adminToken.js";

const router = express.Router();

{/*
----- API TYPES -----
* POST = When Submit something (frontend to db)
* GET = When get something back from DB
* PUT/PATCH = When edit or update something
* DELETE = When delete something 
    
*/}

// CREATE/POST a button
router.post("/create-button", verifyAdminToken, createButton);

// GET all buttons
router.get("/all-buttons", getAllButtons);

// GET button by id
router.get("/button/:id", getButtonById);

// UPDATE button by id
router.put("/button/edit/:id", verifyAdminToken, updateButtonById);

// DELETE button by id
router.delete("/button/:id", verifyAdminToken, deleteButtonById);

export default router;
