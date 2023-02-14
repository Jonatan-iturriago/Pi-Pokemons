const axios = require('axios');
const { Type } = require('../../db.js')

const getTypes = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/type`);
    const types = response.data.results;
    const typeNames = [];
    for (let type of types) {
        let existingType = await Type.findOne({ where: { name: type.name } }); // lo que hago aca es buscar si ya tengo un type con tal nombre lo guardo en vez de crear otro para evitar pisar el id
        if (existingType) {
            typeNames.push(existingType);
        } else {
            const newType = await Type.create({
                name: type.name,
            });
            typeNames.push(newType);
        }
    }
    return typeNames;
};

module.exports = {
    getTypes
}
