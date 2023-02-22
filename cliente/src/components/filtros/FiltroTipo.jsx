import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getTipoPokemon,
    filterTipo,
    setCurrentPage,
} from "../../redux/action/index";

function FiltrosTipos() {
    const dispatch = useDispatch();
    const tipoFiltro = useSelector((state) => state.tipoFiltro);
    const allTypes = useSelector((state) => state.tipos);
    

    useEffect(() => {
        dispatch(getTipoPokemon());
    }, [dispatch]);

    const handleFilterType = (e) => {
        e.preventDefault();
        dispatch(filterTipo(e.target.value));
        dispatch(setCurrentPage(1));
    };
    return (
        <div>
            <div>
                <h4>FILTRAR POR TIPOS</h4>
                <select
                    value={tipoFiltro}
                    onChange={(e) => {
                        handleFilterType(e);
                    }}
                >
                    <option value="All">ALL</option>
                    {allTypes?.map((e) => {
                        return (
                            <option key={e.id} value={e.name}>
                                {e.name.toUpperCase()}
                            </option>
                        );
                    })}
                </select>
            </div>
        </div>
    );
}

export default FiltrosTipos;
