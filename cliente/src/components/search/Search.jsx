import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokeByName,setCurrentPage,resetFiltros} from "../../redux/action/index";

function Search() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    function handleChange(e) {
        e.preventDefault();
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getPokeByName(name));
        dispatch(setCurrentPage(1))
        dispatch(resetFiltros())
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
