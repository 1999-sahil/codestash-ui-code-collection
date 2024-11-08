import express from "express";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";

const app = express();
const port = process.env.PORT || 5000;
configDotenv();


// mongodb
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