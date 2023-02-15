import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon, clear } from "../../redux/action/index";
import Card from "../card/Card";
import style from "./Cards.module.css";
import NavBar from '../navBar/NavBar'
function Cards() {
    const dispatch = useDispatch();
    const pokemon = useSelector((state) => state.pokemons);

    useEffect(() => {
        dispatch(getPokemon());
        return () => dispatch(clear());
    }, [dispatch]);

    return (
        <>
            <NavBar/>
        <div className={style.contenido}>
            {pokemon.map((el) => {
                return (
                    <Card
                    key={el.id}
                    id={el.id}
                    nombre={el.nombre}
                    imagen={el.imagen}
                    tipo={el.tipo}
                    />
                    );
                })}
        </div>
        </>
    );
}

export default Cards;
