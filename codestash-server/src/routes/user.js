import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

import User from "../models/user.js";

dotenv.config();
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET_KEY;

router.post("/admin", async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await User.findOne({ username });

    if (!admin) {
      return res.status(404).send({ message: "Admin not found!" });
    }

    if (password !== admin.password) {
        return res.status(401).send({ message: "Invalid Credentials!" });
    }

    {/**
    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
        return res.status(401).send({ message: "Invalid Password!" });
    }    
    */}

    const token = jwt.sign(
      {
        id: admin._id,
        username: admin.username,
        role: admin.role,
      },
      JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    return res.status(200).json({
        message: "Authentication Successfull",
        token: token,
        user: {
            username: admin.username,
            role: admin.role
        }
    });
  } catch (error) {
    console.error("Invalid Admin Credentials!", error);
    return res.status(401).send({ message: "Invalid Admin Credentails!" });
  }
});

export default router;
