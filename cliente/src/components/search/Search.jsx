import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokeByName } from "../../redux/action/index";

function Search({ setCurrentPage }) {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    function handleChange(e) {
        e.preventDefault();
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getPokeByName(name));
        setCurrentPage(1);
    }
    return (
        <div>
            <input
                type="text"
                placeholder="Buscar Personaje...."
                onChange={(e) => handleChange(e)}
                value={name}
            />
            <input
                type="submit"
                value="BUSCAR"
                onClick={(e) => handleSubmit(e)}
            />
        </div>
    );
}
export default Search;
