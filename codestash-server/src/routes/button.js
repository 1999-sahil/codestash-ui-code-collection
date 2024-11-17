import express from "express";
import { createButton, deleteButtonById, getAllButtons, getButtonById, updateButton } from "../controllers/button.js";

const router = express.Router();

{/*
----- API TYPES -----
* POST = When Submit something (frontend to db)
* GET = When get something back from DB
* PUT/PATCH = When edit or update something
* DELETE = When delete something 
    
*/}

// CREATE/POST a button
router.post("/create-button", createButton);

// GET all buttons
router.get("/all-buttons", getAllButtons);

// GET button by id
router.get("/button/:id", getButtonById);

// UPDATE button by id
router.put("/button/edit/:id", updateButton);

// DELETE button by id
router.delete("/button/:id", deleteButtonById);

export default router;