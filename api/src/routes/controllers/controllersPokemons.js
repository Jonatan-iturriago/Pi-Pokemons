const axios = require("axios");
const { Pokemon, Type, Op } = require("../../db");

const apiInfo = async () => {
    const dataBase = await Pokemon.findAll();
    const api = (await axios.get("https://pokeapi.co/api/v2/pokemon?limit=200"))
        .data.results;
    const urls = [];
    api.forEach((element) => {
        urls.push(axios.get(element.url).then((response) => response.data));
    });
    const data = Promise.all(urls).then((response) =>
        response.map((p) => {
            return {
                id: p.id,
                nombre: p.name,
                imagen: p.sprites.other.dream_world.front_default,
                tipo: p.types.map((el) => el.type.name),
                vida: p.stats[0].base_stat,
                ataque: p.stats[1].base_stat,
                defensa: p.stats[2].base_stat,
                velocidad: p.stats[5].base_stat,
                altura: p.height,
                peso: p.weight,
                create: false,
            };
        })
    );
    let infapi = await data;

    return [...dataBase, ...infapi];
};

// const apiByName = async (name) => {
//     let responseAPI = await Pokemon.findOne({ where: { name: name } });
//     const api = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
//     const pokeApi = {
//         id: api.data.id,
//         nombre: api.data.name,
//         imagen: api.data.sprites.other.dream_world.front_default,
//         tipo: api.data.types.map((el) => el.type.name),
//         vida: api.data.stats[0].base_stat,
//         ataque: api.data.stats[1].base_stat,
//         defensa: api.data.stats[2].base_stat,
//         velocidad: api.data.stats[5].base_stat,
//         altura: api.data.height,
//         peso: api.data.weight,
//         create: false,
//     };
//     // if (!pokeApi)
//     //     throw new Error(`No Pokemons found with name ${name} in API`);
//     return [...pokeApi, responseAPI]
// };
// const bDByName = async (name) => {  
    
//     if (!responseAPI)
//         throw new Error(`No Pokemons found with name ${name} in DB`);
//     return responseAPI;
// };

const searchUserById = async (id) => {
    const api = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return {
        id: api.data.id,
        nombre: api.data.name,
        imagen: api.data.sprites.other.dream_world.front_default,
        tipo: api.data.types.map((el) => el.type.name ),
        vida: api.data.stats[0].base_stat,
        ataque: api.data.stats[1].base_stat,
        defensa: api.data.stats[2].base_stat,
        velocidad: api.data.stats[5].base_stat,
        altura: api.data.height,
        peso: api.data.weight,
        create: false,
    };
};

const getByIdDB = async (id) => {
    return await Pokemon.findOne({
        id: id,
        include: {
            model: Type,
            attributes: ["name"],
        },
    });
};

module.exports = {
    apiInfo,
    searchUserById,
    getByIdDB,
    
    
};
