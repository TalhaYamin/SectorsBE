const userModel = require("../models/userModel");

const userController = {
    createUser: async (req, res) => {
        try {
            const { text } = req.body; // Change 'Name' to 'text'
            const newUser = new userModel({ text });
            const savedUser = await newUser.save();
            res.status(200).json(savedUser);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create user data' });
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await userModel.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve users' });
        }
    },

    updateUser: async (req, res) => {
        try {
            const { userId } = req.params;
            const { text } = req.body; // Change 'Name' to 'text'
            const updatedUser = await userModel.findByIdAndUpdate(
                userId,
                { text },
                { new: true }
            );
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json({ error: 'Failed to update user data' });
        }
    }
};

module.exports = userController;
