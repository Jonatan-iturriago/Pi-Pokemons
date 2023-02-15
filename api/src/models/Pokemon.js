const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
sequelize.define(
    "pokemon",
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imagen: {
            type: DataTypes.STRING,
            defaultValue: "https://tinyurl.com/2e5gdnl6",
        },
        vida: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ataque: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        defensa: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        velocidad: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        altura: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        peso: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        create: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
    },
    { timestamps: false }
);
};
