const userModel = require("../models/userModel");

const userController = {
    createUser: async (req, res) => {
        try {
            const { Name, Sector, AgreeToTerms } = req.body;

            const newUser = new userModel({ Name, Sector, AgreeToTerms });

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
    }

};

module.exports = userController;
