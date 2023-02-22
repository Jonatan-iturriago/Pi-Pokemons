import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterOrden,setCurrentPage} from "../../redux/action/index";

function Ordenamiento() {
    const dispatch = useDispatch();
    const orden = useSelector((state)=>state.orden)

    const handleOrderAtaque = (e) => {
        e.preventDefault();
        dispatch(filterOrden(e.target.value));
        dispatch(setCurrentPage(1));
    };

    return (
        <div>
            <h4>ORDENAR </h4>
            <select onChange={(e) => handleOrderAtaque(e)}
                value={orden}
            >
                <option value="">All</option>
                <option value="min">Minimo</option>
                <option value="max">Maximo</option>
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
            </select>
        </div>
    );
}

export default Ordenamiento;
