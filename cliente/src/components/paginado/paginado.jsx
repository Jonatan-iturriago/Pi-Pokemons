import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {setCurrentPage} from "../../redux/action/index"
import "./paginado.css";
function Paginado({ pokemonPage, totalPokemon }) {
    const setPage = useSelector((state) => state.setPage);
    const dispatch = useDispatch()
    const numeroPagina = [];
    for (let i = 1; i <= Math.ceil(totalPokemon / pokemonPage); i++) {
        numeroPagina.push(i);
    }

    const nextPage = () => {
        dispatch(setCurrentPage(setPage + 1))
    };

    const prevPage = () => {
        dispatch(setCurrentPage(setPage - 1));
    };

    const specifPage = (e) => {
        dispatch(setCurrentPage(e));
    };

    return (
        <>
            <nav className="contenedor">
                <div className="paginas">
                    <ul>
                        <div>
                            <button
                                disabled={setPage === 1 ? true : false}
                                onClick={prevPage}
                            >
                                back
                            </button>
                        </div>
                        {numeroPagina.map((Pag) => (
                            <li key={Pag}>
                                <button onClick={() => specifPage(Pag)}>
                                    {Pag}
                                </button>
                            </li>
                        ))}
                        <div>
                            <button
                                disabled={
                                    setPage >= numeroPagina.length
                                        ? true
                                        : false
                                }
                                onClick={nextPage}
                            >
                                Next
                            </button>
                        </div>
                    </ul>
                </div>
            </nav>
        </>
    );
}
export default Paginado;
