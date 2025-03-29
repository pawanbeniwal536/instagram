import User from "../db/user.js";

export const signup = async (req, res) => {
    try {
        const { username, password } = req.body;

        const newUser = await User.create({ username, password });

        res.status(201).json({ message: "User stored successfully", user: newUser });
    } catch (error) {
        console.error("Error storing user data:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

