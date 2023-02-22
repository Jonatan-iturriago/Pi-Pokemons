import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { filterOrigen, setCurrentPage } from "../../redux/action/index";

function FiltrosTipos() {
    const origen = useSelector((state)=>state.origen)
    const dispatch = useDispatch();

    // const handleFilterCreated = (e) => {
    //     e.preventDefault();
    //     dispatch(filterCreated(e.target.value));
    //     setCurrentPage(1);
    //     setCre(e.target.value)
    // };

        const handleFilterCreated = (e) => {
            e.preventDefault();
            dispatch(filterOrigen(e.target.value));
            dispatch(setCurrentPage(1));
        };
    return (
        <div>
            <h4>FILTRAR POR ORIGEN </h4>
            <select
                value={origen}
                onChange={(e) => {
                    handleFilterCreated(e);
                }}
            >
                <option value="">ALL</option>
                <option value="api">API</option>
                <option value="create">CREATED</option>
            </select>
        </div>
    );
}

export default FiltrosTipos;
