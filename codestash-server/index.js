import express from "express";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import cors from "cors";

import buttonRoute from "./src/routes/button.js";
import userRoute from "./src/routes/user.js";

const app = express();
const port = process.env.PORT || 5000;
configDotenv();

// Middleware
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true,
}));


// Routes
app.use("/api/ui-components/buttons", buttonRoute);
app.use("/api/auth", userRoute);


// Database Connection
async function main() {
    await mongoose.connect(process.env.DATABASE_URL);
    app.get("/", (req, res) => {
        res.send("Mongodb connected..");
    });
}

main().then(() => console.log("Mongodb is connected successfully....")).catch((err) => console.log(err));

// server is listening
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
}) 