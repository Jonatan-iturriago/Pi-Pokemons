const { Pokemon, Type } = require("../../db.js");

const {
    apiInfo,
    searchUserById,
    getByIdDB,
} = require("../controllers/controllersPokemons");

const getAll = async (req, res) => {
    const info = await apiInfo();
    const { name } = req.query;
    if (name) {
        let nombre = info.filter((e) => e.name == name);
        return res.status(200).json(nombre);
    }
    res.status(200).json(info);

};

// const getByName = async (req, res) => {
//     const info = await apiInfo();
//     const { name } = req.query;
//     if (name) {
//         try {
            
//         } catch (error) {
//             res.status(400).json("error el pokemon que busca no existe");
//         }
//     }
// };

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
                    id: tipo,
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
