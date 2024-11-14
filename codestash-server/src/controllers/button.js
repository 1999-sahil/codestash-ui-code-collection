import Button from "../models/button.js";


// CREATE/POST a new button
export const createButton = async(req, res) => {
    try {
        const newButton = await Button({...req.body});
        await newButton.save();

        res.status(200).send({ message: "Button posted successfully...", button: newButton });
    } catch (error) {
        console.error("Error creating button", error);
        res.status(500).send({ message: "Failed to posted button", error });
    }
};


// GET all buttons
export const getAllButtons = async(req, res) => {
    try {
        const buttons = await Button.find().sort({ createdAt: -1 });

        res.status(200).send({ message: "Fetched all buttons successfully...", buttons });
    } catch (error) {
        console.error("Error fetching buttons", error);
        res.status(500).send({ message: "Failed to fetch buttons", error });
    }
};

// GET button by ID
export const getButtonById = async(req, res) => {
    try {
        const { id } = req.params;
        const button = await Button.findById(id);

        if (!button) {
            res.status(404).send({ message: "Button not found" });
        }

        res.status(200).send(button);
    } catch (error) {
        console.error("Error fetching button", error);
        res.status(500).send({ message: "Failed to fetch button", error });
    }
};

// UPDATE button by id
export const updateButton = async(req, res) => {
    try {
        const { id } = req.params;
        const updatedButton = await Button.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedButton) {
            res.status(404).send({ message: "Button not found" });
        }

        res.status(200).send({ message: "Button updated successfully...", button: updatedButton });
    } catch (error) {
        console.error("Error updating button", error);
        res.status(500).send({ message: "Failed to update button", error });
    }
};

// DELETE button by id
export const deleteButtonById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedButton = await Button.findByIdAndDelete(id);

        if (!deletedButton) {
            res.status(404).send({ message: "Button not found" });
        }

        res.status(200).send({ message: "Button deleted successfully...", button: deletedButton });
    } catch (error) {
        console.log("Error deleting a button", error);
        res.status(404).send({ message: "Failed to delete a button" });
    }
};