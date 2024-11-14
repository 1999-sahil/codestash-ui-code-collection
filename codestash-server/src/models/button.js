import mongoose from "mongoose";

const buttonSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    effect: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
}, {
    timestamps: true,
});

const Button = mongoose.model("Button", buttonSchema);

export default Button;