const { Pokemon, Type } = require("../../db.js");

const {
    apiInfo,
    searchUserById,
    getByIdDB,
    getPokemonNameByApi,
} = require("../controllers/controllersPokemons");

// const getAll = async (req, res) => {
//     try {
//         return res.send(await apiInfo());
//     } catch (e) {
//         return res.status(404).json({
//             error: "The pokemon you are trying to find does not exist",
//         });
//     }
// };

const getAll = async (req, res) => {
    const name = req.query.name;
    try {
        if (name) {
            res.status(200).send(await getPokemonNameByApi(name));
        } else {
            return res.status(200).send(await apiInfo());
        }
    } catch (error) {
        res.status(404).send(
            "Sorry, that Pokemon does not exist. Try typing the name again!"
        );
    }
};

// const getName = async (req, res) => {
//     const { name } = req.query;
//     const infBD = await getPokemonByName(name);
//     const infoApi = await apibyName(name);
//     if (name) {
//         res.status(200).json(infBD)
//     } else {
//         if (name) {
//             res.status(200).json(infoApi);
//         } else {
//             res.status(404).json("no se encontro el nombre")
//         }
//     }
// }

const getById = async (req, res) => {
    const { id } = req.params;
    if (id.length >= 12) {
        try {
            let dataInDb = await getByIdDB(id);
            return res.status(200).json(dataInDb);
        } catch (error) {
            res.status(400).json(error.message);
        }
    }
    if (id) {
        try {
            let dataInApi = await searchUserById(id);
            return res.status(200).json(dataInApi);
        } catch (error) {
            res.status(400).json(error.message);
        }
    }
};

const postPokemon = async (req, res) => {
    const {
        nombre,
        vida,
        imagen,
        ataque,
        defensa,
        velocidad,
        altura,
        peso,
        tipo,
        create,
    } = req.body;
    try {
        if (
            !nombre ||
            !vida ||
            !imagen ||
            !ataque ||
            !defensa ||
            !velocidad ||
            !altura ||
            !peso ||
            !create ||
            !tipo
        ) {
            res.status(404).json({
                message: "falta informacion para crear el pokemon",
            });
        } else {
            let newPokemon = await Pokemon.create({
                nombre,
                vida,
                imagen,
                ataque,
                defensa,
                velocidad,
                altura,
                peso,
                create,
            });
            let tiposBD = await Type.findAll({
                where: {
                    name: tipo,
                },
            });
            newPokemon.addType(tiposBD);
            res.status(201).json(newPokemon);
        }
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

module.exports = {
    getAll,
    getById,
    postPokemon,
};
