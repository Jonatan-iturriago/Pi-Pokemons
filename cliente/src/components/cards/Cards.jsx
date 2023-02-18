import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon,showLoading,hideLoading} from "../../redux/action/index";
import Card from "../card/Card";
import style from "./Cards.module.css";
import NavBar from "../navBar/NavBar";
import Paginado from "../paginado/paginado";
import Search from "../search/Search";
import Loading from "../Loading/Loading";
function Cards() {
    const dispatch = useDispatch();
    const pokemon = useSelector((state) => state.pokemons);
    const totalPokemon = pokemon.length;
    const [pokemonPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);
    const lastIndex = currentPage * pokemonPage;
    const firstIndex = lastIndex - pokemonPage;

    useEffect(() => {
        dispatch(showLoading());
        dispatch(getPokemon());
        setTimeout(() => {
            dispatch(hideLoading());
        },5000)
    }, [dispatch]);

    return (
        <>
            <NavBar />
            <Search setCurrentPage={setCurrentPage} />
            <Paginado
                pokemonPage={pokemonPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPokemon={totalPokemon}
            />
            <div className={style.contenido}>
                {pokemon
                    .map((el) => {
                        return (
                            <Card
                                key={el.id}
                                id={el.id}
                                nombre={el.nombre}
                                imagen={el.imagen}
                                tipo={el.tipo}
                            />
                        );
                    })
                    .slice(firstIndex, lastIndex)}
            </div>
            <Loading />
        </>
    );
}

export default Cards;
