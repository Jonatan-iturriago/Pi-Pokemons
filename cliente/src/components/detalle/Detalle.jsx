import React, { useEffect } from "react";
import { getPokemondetalle, clearDetalle } from "../../redux/action/index";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import st from "./Detalle.module.css";
import { Link } from "react-router-dom";
import close from "./error.png"

function Detalle() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const detalle = useSelector((state) => state.detalle);

    useEffect(() => {
        dispatch(getPokemondetalle(id));
        return () => dispatch(clearDetalle());
    }, [dispatch, id]);
    return (
        <div className={st.gr}>
            <div className={st.card}>
                <Link to="/home">
                    <img className={st.imagen} src={close} alt="cerrar" />
                </Link>
                <div className={st.details}>
                    <div className={st.head}>
                        <div>
                            <img src={detalle?.imagen} alt={detalle.nombre} />
                        </div>
                        <div className={st.texto}>
                            <div>
                                <b>ID: </b>
                                <h2>{detalle.id}</h2>
                            </div>
                            <div>
                                <b>NOMBRE: </b>
                                <h2>{detalle.nombre}</h2>
                            </div>
                            <div>
                                <b>VIDA: </b>
                                <h2>{detalle.vida}</h2>
                            </div>
                            <div>
                                <b>ATAQUE: </b>
                                <h2>{detalle.ataque}</h2>
                            </div>
                            <div>
                                <b>DEFENSA: </b>
                                <h2>{detalle.defensa}</h2>
                            </div>
                            <div>
                                <b>VELOCIDAD: </b>
                                <h2>{detalle.velocidad}</h2>
                            </div>
                            <div>
                                <b>ALTURA: </b>
                                <h2>{detalle.altura}</h2>
                            </div>
                            <div>
                                <b>PESO: </b>
                                <h2>{detalle.peso}</h2>
                            </div>
                            <div>
                                <b>ORIGEN: </b>
                                <h2>{detalle.create===true ? "creado" : "original"}</h2>
                            </div>
                            <div>
                                <b>TIPO: </b>
                                {detalle.tipo?.map((e) => (
                                    <h2 key={e}>{" " + e + ""}</h2>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detalle;
