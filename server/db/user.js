import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });  // ✅ Correct way to enable timestamps

const User = mongoose.model("User", userSchema);

export default User;