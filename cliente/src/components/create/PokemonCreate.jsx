import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTipoPokemon, postPokemon } from "../../redux/action/index";
import { Link, useNavigate } from "react-router-dom";

import "./Form.css";

export default function CreatePokemon() {
    const history = useNavigate();

    let [input, setInput] = useState({
        nombre: "",
        vida: "",
        ataque: "",
        defensa: "",
        velocidad: "",
        altura: "",
        peso: "",
        imagen: "",
        tipo: [],
    });

    const dispatch = useDispatch();

    const type = useSelector((state) => state.tipos);

    let [error, setError] = useState({});

    let [disEna, setDisEna] = useState(false);

    useEffect(() => {
        dispatch(getTipoPokemon());
    }, [dispatch]);

    const handleOnChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
        setError(validaciones({ ...input, [e.target.name]: e.target.value }));

        handleDisable(
            validaciones({ ...input, [e.target.name]: e.target.value })
        );

        validaciones({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(postPokemon(input));

        setInput({
            nombre: "",
            vida: "",
            ataque: "",
            defensa: "",
            velocidad: "",
            altura: "",
            peso: "",
            imagen: "",
            tipo: [],
        });
        history.push("/home");
    };

    const handletipo = (e) => {
        if (!input.tipo.includes(e.target.value)) {
            setInput({ ...input, tipo: [...input.tipo, e.target.value] });
            setError(
                validaciones({ ...input, tipo: [input.tipo, e.target.value] })
            );

            handleDisable(
                validaciones({ ...input, tipo: [input.tipo, e.target.value] })
            );
            validaciones({ ...input, tipo: [...input.tipo, e.target.value] });
        } else {
            alert("El tipo ya fue seleccionado.");
        }
    };

    const validaciones = (pokeValidar) => {
        let validError = {};

        if (!pokeValidar.nombre) {
            validError.nombre = "Se requiere un nombre";
        } else {
            if (!/^[a-z]+$/.test(pokeValidar.nombre)) {
                validError.nombre ="No se aceptan mayusculas "
            }
            if (/\s/.test(pokeValidar.nombre)) {
                validError.nombre = "No se permiten espacios";
            }
            if (/[0-9]/.test(pokeValidar.nombre)) {
                validError.nombre = "No se permiten numeros";
            }
            if (/\W/.test(pokeValidar.nombre)) {
                validError.nombre = "No se permiten carácteres especiales";
            }
        }
        if (!pokeValidar.ataque) {
            validError.ataque = "Necesita tener ataque";
        } else {
            if (pokeValidar.ataque > 255) {
                validError.ataque = "El ataque no puede ser mayor a 255";
            } else if (pokeValidar.ataque < 1) {
                validError.ataque = "No puede ser un numero negativo";
            }
        }
        if (!pokeValidar.defensa) {
            validError.defensa = "Necesita tener un nivel de defensa";
        } else {
            if (pokeValidar.defensa > 255) {
                validError.defensa = "La defensa no puede ser mayora a 255";
            } else if (pokeValidar.defensa < 1) {
                validError.defensa =
                    "Tiene que ser mayor a 1 el nivel de defensa ";
            }
        }
        if (!pokeValidar.velocidad) {
            validError.velocidad = "Necesita tener un rango de velocidad";
        } else {
            if (pokeValidar.velocidad > 255) {
                validError.velocidad = "La velocidad no puede ser mayora a 255";
            } else if (pokeValidar.velocidad < 1) {
                validError.velocidad =
                    "Debe ser mayor a 1 el rango de velocidad";
            }
        }
        if (!pokeValidar.vida) {
            validError.vida = "Debe tener un rango de vida entre 1 y 255";
        } else {
            if (pokeValidar.vida > 255) {
                validError.vida = "La vida no puede ser mayora a 255";
            } else if (pokeValidar.vida < 1) {
                validError.vida = "La vida debe ser mayor a 1";
            }
        }
        if (!pokeValidar.altura) {
            validError.altura = "debe elegir una altura ";
        } else {
            if (pokeValidar.altura > 40) {
                validError.altura = "La altura no puede superar los 40 Mtr";
            } else if (pokeValidar.altura < 1) {
                validError.altura = "la altura debe ser mayor o igual a 1Mtr";
            }
        }
        if (!pokeValidar.peso) {
            validError.peso = "ingrese un  peso valido ";
        } else {
            if (pokeValidar.peso > 1000) {
                validError.peso = "El peso no puede ser superior a 1000kg";
            } else if (pokeValidar.peso < 1) {
                validError.peso = "el peso debe ser mayor a 1kg";
            }
        }
        // if (pokeValidar.imagen) {
        if (
            !/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/.test(
                pokeValidar.imagen
            )
        ) {
            validError.imagen = "El link de la imagen debe ser una URL";
        }

        if (pokeValidar.tipo.length === 0 || pokeValidar.tipo.length >= 3) {
            validError.tipo = "Debe tener un maximo de 2 tipos!";
        }

        setError(validError);
        handleDisable(validError);
    };

    const handleDisable = (error) => {
        if (
            error?.nombre === undefined &&
            error?.ataque === undefined &&
            error?.defensa === undefined &&
            error?.velocidad === undefined &&
            error?.vida === undefined &&
            error?.altura === undefined &&
            error?.peso === undefined &&
            error?.tipo === undefined &&
            error?.imagen === undefined
        ) {
            setDisEna(true);
        } else {
            setDisEna(false);
        }
    };

    const handleDelete = (e) => {
        const tipoID = input.tipo.filter((type) => type !== e);
        setInput({ ...input, tipo: tipoID });
        setDisEna(tipoID.length !== 0);
    };

    return (
        <div className="container">
            <form onSubmit={(e) => handleSubmit(e)} className="form">
                <div className="secun">
                    <Link to="/home">
                        <button>Volver</button>
                    </Link>
                    <h2>¡Crear Pokemon!</h2>
                </div>
                <div className="input">
                    <label>Nombre: </label>
                    <input
                        type={"text"}
                        placeholder={"Give it a name!"}
                        name="nombre"
                        value={input.nombre}
                        onChange={(e) => handleOnChange(e)}
                    />
                    <p>{error.nombre}</p>
                </div>
                <div className="input">
                    <label>Imagen: </label>
                    <label>
                        <input
                            type="url"
                            placeholder={"Put a url!"}
                            name={"imagen"}
                            value={input.imagen}
                            onChange={(e) => handleOnChange(e)}
                        />
                    </label>
                    <p>{error.imagen}</p>
                </div>
                <div className="atributos">
                    <label>Ataque: </label>
                    <input
                        type={"range"}
                        min="0"
                        max="256"
                        name={"ataque"}
                        value={input.ataque}
                        onChange={(e) => handleOnChange(e)}
                    />
                    <b>{input.ataque}</b>
                    <p>{error.ataque}</p>

                    <label>Defensa: </label>
                    <input
                        type="range"
                        min="0"
                        max="256"
                        name="defensa"
                        value={input.defensa}
                        onChange={(e) => handleOnChange(e)}
                    />
                    <b>{input.defensa}</b>
                    <p>{error.defensa}</p>

                    <label>Velocidad: </label>

                    <input
                        type="range"
                        min="0"
                        max="256"
                        name="velocidad"
                        value={input.velocidad}
                        onChange={(e) => handleOnChange(e)}
                    />
                    <b>{input.velocidad}</b>
                    <p>{error.velocidad}</p>
                </div>

                <div className="atributos2">
                    <label>Vida: </label>
                    <input
                        type="range"
                        min="0"
                        max="256"
                        name="vida"
                        value={input.vida}
                        onChange={(e) => handleOnChange(e)}
                    />
                    <b>{input.vida}</b>
                    <p>{error.vida}</p>

                    <label>Peso: </label>
                    <label>
                        <input
                            type="range"
                            placeholder={" 1 - 1000"}
                            min="1"
                            max="255"
                            name={"peso"}
                            value={input.peso}
                            onChange={(e) => handleOnChange(e)}
                        />
                        <b>{input.peso} kg</b>
                    </label>
                    <p>{error.peso}</p>

                    <label>Altura: </label>
                    <label>
                        <input
                            type="range"
                            placeholder={" 1 - 1000"}
                            min="1"
                            max="43"
                            name={"altura"}
                            value={input.altura}
                            onChange={(e) => handleOnChange(e)}
                        />
                        <b>{input.altura} kg</b>
                    </label>
                    <p>{error.altura}</p>
                </div>
                <div className="tipos">
                    <label>Tipos: </label>

                    <select onChange={(e) => handletipo(e)}>
                        {type?.map((ty, index) => {
                            return (
                                <option
                                    key={index}
                                    name={ty.name}
                                    value={ty.name}
                                >
                                    {ty.name}
                                </option>
                            );
                        })}
                    </select>
                    {input.tipo?.map((e) => {
                        return (
                            <div className="tipoSelect" key={e}>
                                <p className="ptipo">{e} ✅</p>
                                {
                                    <button
                                        className="btnDelete"
                                        onClick={() => {
                                            handleDelete(e);
                                        }}
                                    >
                                        x
                                    </button>
                                }
                            </div>
                        );
                    })}
                    <p>{input.tipo.length >= 2 ? error.tipo : ""}</p>
                    <p>
                        {input.tipo.length === 1
                            ? "Puedes agregar 1 mas si quieres!"
                            : ""}
                    </p>
                </div>
                <div className="btnCrear">
                    <button disabled={!disEna && "disabled"} type={"submit"}>
                        CREAR
                    </button>
                    {disEna ? <p></p> : <p>FALTAN INFORMACION</p>}
                </div>
            </form>
        </div>
    );
}
