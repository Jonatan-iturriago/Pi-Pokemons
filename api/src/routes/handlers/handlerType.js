const { getTypes } = require('../controllers/controlersTypes');

const getTypeHandler = async (req, res) => {
    try {
        let type = await getTypes();
        res.status(201).json(type);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

module.exports = {
    getTypeHandler
}