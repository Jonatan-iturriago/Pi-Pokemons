import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon, showLoading, hideLoading } from "../../redux/action/index";
import Card from "../card/Card";
import style from "./Cards.module.css";
import NavBar from "../navBar/NavBar";
import Paginado from "../paginado/paginado";
import Search from "../search/Search";
import Loading from "../Loading/Loading";
import FiltrosCreate from "../filtros/FiltroTipo";
import FiltrosTipos from "../filtros/FiltroCreados";
import { filtroPokemon } from "../../redux/libreria/libreria";
import Ordenamiento from "../filtros/Ordenamiento";
import Error from "./Error";

function Cards() {
    const dispatch = useDispatch();
    const pokemon = useSelector((state) => state.pokemons);
    const origen = useSelector((state) => state.origen);
    const setPage = useSelector((state) => state.setPage);
    const tipoFiltro = useSelector((state) => state.tipoFiltro);
    const orden = useSelector((state) => state.orden);
    const nuevaListaFiltrada = filtroPokemon(
        origen,
        pokemon,
        tipoFiltro,
        orden
    );
    const totalPokemon = nuevaListaFiltrada.length;
    const lastIndex = setPage * 12;
    const firstIndex = lastIndex - 12;

    useEffect(() => {
        dispatch(showLoading());
        dispatch(getPokemon());
        setTimeout(() => {
            dispatch(hideLoading());
        }, 5000);
    }, [dispatch]);

    return (
        <>
            <NavBar />
            <div className={style.filtros}>
                <FiltrosTipos />
                <FiltrosCreate />
                <Ordenamiento />
                <Search />
            </div>
            <Paginado pokemonPage={12} totalPokemon = {totalPokemon} />
            <div className={style.contenido}>
                {nuevaListaFiltrada.length ? (
                    nuevaListaFiltrada
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
                        .slice(firstIndex, lastIndex)
                ) : (
                    <Error />
                )}
            </div>
            <Loading />
        </>
    );
}

export default Cards;
