import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {getPokeByName} from "../../redux/action/index";

function Search({setCurrentPage}) {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    function handleChange(e) {
        e.preventDefault();
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getPokeByName(name.toLocaleLowerCase()));
        setCurrentPage(1)
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Buscar Receta...."
                onChange={(e) => handleChange(e)}
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
