import React from 'react'
import style from './Card.module.css'
import {Link} from 'react-router-dom'
function Card({ id,tipo, nombre, imagen }) {
return (
    <div className={style.container}>
        <div className={style.card}>
            <h1 className={style.titulo}>{nombre}</h1>
            <Link to={`/detalle/${id}`}>
                <img src={imagen} alt={nombre} />
            </Link>
            <h2 className={style.titulo}>
                {tipo?.map((e) => (
                    <div>
                        <span>{e + " "}</span>
                        <br />
                    </div>
                ))}
            </h2>
            
        </div>
    </div>
);
}

export default Card