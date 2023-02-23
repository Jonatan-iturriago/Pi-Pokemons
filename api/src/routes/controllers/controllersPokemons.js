const axios = require("axios");
const { Pokemon, Type } = require("../../db");

const apiInfo = async () => {
    const dataBase = await Pokemon.findAll({
        include: {
            model: Type,
            attributes: ["name"],
        },
    });
    const data1 = dataBase.map((e) => {
        return {
            id: e.id,
            nombre: e.nombre,
            imagen: e.imagen,
            tipo: e.types.map((el) => el.name),
            vida: e.vida,
            ataque: e.ataque,
            defensa: e.defensa,
            velocidad: e.velocida,
            altura: e.altura,
            peso: e.peso,
            create: e.create,
        };
    });
    const urlApi =
        "https://pokeapi.co/api/v2/pokemon";
    const api = await axios.get(urlApi);
    const api2 = await axios.get(api.data.next);
    const sumaApi = await api.data.results.concat(api2.data.results)
    const urls = [];
    sumaApi.forEach((element) => {
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

    return [...data1, ...infapi];
};

const getPokemonNameByApi = async (name) => {
    if (name) {
        const database = await Pokemon.findOne({
            where: { nombre: name.toLowerCase().trim() },
            include: {
                model: Type,
                attributes: ["name"],
                through: {
                    attributes: [],
                },
            },
        });
        if (database) return [{
            id: database.id,
            nombre: database.nombre,
            imagen: database.imagen,
            tipo: database.types.map((el) => el.name),
            vida: database.vida,
            ataque: database.ataque,
            defensa: database.defensa,
            velocidad: database.velocida,
            altura: database.altura,
            peso: database.peso,
            create: database.create,
        }];

        const pokemon = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase().trim()}`
        );
        const pokeApi = [
            {
                id: pokemon.data.id,
                imagen: pokemon.data.sprites.other["official-artwork"]
                    .front_default,
                nombre: pokemon.data.name,
                tipo: pokemon.data.types.map((t) => t.type.name),
                vida: pokemon.data.stats[0].base_stat,
                ataque: pokemon.data.stats[1].base_stat,
                defensa: pokemon.data.stats[2].base_stat,
                velocidad: pokemon.data.stats[5].base_stat,
                altura: pokemon.data.height,
                peso: pokemon.data.weight,
                create:false
            },
        ];
        return pokeApi;
    }
};
const searchUserById = async (id) => {
    const api = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return {
        id: api.data.id,
        nombre: api.data.name,
        imagen: api.data.sprites.other.dream_world.front_default,
        tipo: api.data.types.map((el) => el.type.name),
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
    const database = await Pokemon.findOne({
        id: id,
        include: {
            model: Type,
            attributes: ["name"],
        },
    });
    const data1 = {
        id: database.id,
        nombre: database.nombre,
        imagen: database.imagen,
        tipo: database.types.map((el) => el.name),
        vida: database.vida,
        ataque: database.ataque,
        defensa: database.defensa,
        velocidad: database.velocidad,
        altura: database.altura,
        peso: database.peso,
        create: database.create,
    };
    return data1
};

module.exports = {
    apiInfo,
    searchUserById,
    getByIdDB,
    getPokemonNameByApi,
};
