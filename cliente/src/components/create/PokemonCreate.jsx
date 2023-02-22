import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {postPokemon,getTipoPokemon } from "../../redux/action/index";
import s from "./PokemonCreate.module.css";


const CreateForm = () => {
    const [input, setInput] = useState({
        name: "",
        health: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        height: 0,
        weight: 0,
        type1: "",
        type2: "",
    });
    const [errors, setErrors] = useState({});

    let types = useSelector((state) => state.types);
    const dispatch = useDispatch();
    const history = useNavigate();

    useEffect(() => {
        dispatch(getTipoPokemon());
    }, [dispatch]);

    function validate(input) {
        let errors = {};
        if (!input.name.trim()) {
            errors.name = "Name is required";
        }
        if (input.name.search("[0-9]") !== -1) {
            errors.name = "Name must not have numbers";
        }
        if (input.name.search("[^A-Za-z0-9]") !== -1) {
            errors.name = "Name must not have symbols or spaces";
        }
        return errors;
    }

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setErrors(
            validate({
                ...input,
                [e.target.name]: e.target.value,
            })
        );
    };

    const handleSelectChange1 = (e) => {
        setInput({
            ...input,
            type1: e.target.value,
        });
    };
    const handleSelectChange2 = (e) => {
        setInput({
            ...input,
            type2: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errors.name) {
            dispatch(postPokemon(input));
            alert("Pokemon has been created");
            setInput({});
            history.push("/home");
        } else if (errors.name) {
            alert("Name is required");
            setInput({});
        }
    };

    return (
        <form onSubmit={handleSubmit} className={s.container}>
            <div className={s.input}>
                <h2 className={s.title}>Create Pókemon</h2>
                <div className={s.nameInput}>
                    <label>Name</label>
                    <input type="text" name="name" onChange={handleChange} />
                    <div className={s.errorContainer}>
                        <label
                            hidden={errors.name ? false : true}
                            className={s.required}
                        >
                            {errors.name}
                        </label>
                    </div>
                </div>
                <select className={s.selector} onChange={handleSelectChange1}>
                    <option value hidden>
                        Pokemon Type
                    </option>
                    {types &&
                        types.map((t) => (
                            <option key={t.id} value={t.name}>
                                {t.name.charAt(0).toUpperCase() +
                                    t.name.substring(1)}
                            </option>
                        ))}
                </select>
                <select className={s.selector} onChange={handleSelectChange2}>
                    <option value hidden>
                        Pokemon Type
                    </option>
                    {types &&
                        types
                            .filter((t) => t.name !== input.type1)
                            .map((filtered) => (
                                <option key={filtered.id} value={filtered.name}>
                                    {filtered.name.charAt(0).toUpperCase() +
                                        filtered.name.substring(1)}
                                </option>
                            ))}
                </select>
                <label className={s.labelImage}>
                    Pokemon Image
                    <input type="file" className={s.image} accept="image/*" />
                </label>
                <div className={s.inputsContainer}>
                    <div className={s.labels}>
                        <label>HP</label>
                        <input
                            type="number"
                            name="health"
                            min="0"
                            max="99"
                            onChange={handleChange}
                        />
                    </div>

                    <div className={s.labels}>
                        <label>Attack</label>
                        <input
                            type="number"
                            name="attack"
                            min="0"
                            max="99"
                            onChange={handleChange}
                        />
                    </div>

                    <div className={s.labels}>
                        <label>Defense</label>
                        <input
                            type="number"
                            name="defense"
                            min="0"
                            max="99"
                            onChange={handleChange}
                        />
                    </div>

                    <div className={s.labels}>
                        <label>Speed</label>
                        <input
                            type="number"
                            name="speed"
                            min="0"
                            max="99"
                            onChange={handleChange}
                        />
                    </div>

                    <div className={s.labels}>
                        <label>Height</label>
                        <input
                            type="number"
                            name="height"
                            min="0"
                            max="99"
                            onChange={handleChange}
                        />
                    </div>

                    <div className={s.labels}>
                        <label>Weight</label>
                        <input
                            type="number"
                            name="weight"
                            min="0"
                            max="99"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <button className={s.btn} type="submit">
                    Create
                </button>
            </div>
        </form>
    );
};

export default CreateForm;
