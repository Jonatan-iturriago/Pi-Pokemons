import React from 'react'
import  "./paginado.css"
function Paginado({ pokemonPage, currentPage, setCurrentPage, totalPokemon }) {
    const numeroPagina = [];
    for (let i = 1; i <= Math.ceil(totalPokemon / pokemonPage); i++) {
        numeroPagina.push(i);
    }

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const specifPage = (e) => {
        setCurrentPage(e);
    };

    return (
        <>
            <nav className="contenedor">
                <div className="paginas">
                    <ul>
                        <div>
                            <button
                                disabled={currentPage === 1 ? true : false}
                                onClick={prevPage}
                            >
                                Previous
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
                                    currentPage >= numeroPagina.length
                                        ? true
                                        : false
                                }
                                onClick={nextPage}
                            >
                                Next page
                            </button>
                        </div>
                    </ul>
                </div>
            </nav>
        </>
    );
}
export default Paginado;