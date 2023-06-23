const { mapCategories } = require('../helpers/mapCategories');
const Sector = require('../models/sectorsModel');

const getSectors = async (req, res) => {
    try {
        const sector = await Sector.find();
        res.json(sector);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const createSector = async (req, res) => {
    try {
        const { sectorName, value, categories } = req.body;

        const sector = new Sector({
            sectorName,
            value,
            categories: categories && mapCategories(categories),
        });

        const createdSector = await sector.save();

        res.status(201).json(createdSector);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



module.exports = {
    getSectors,
    createSector
};
