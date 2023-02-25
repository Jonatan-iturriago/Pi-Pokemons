import React from 'react'
import { useSelector } from 'react-redux'
import gif from "./pokemon.gif"

function Loading() {
    const loading = useSelector((state)=>state.loading)
    if(!loading) return null
    return (
        <div>
            <img src={gif} alt="CARGANDO..."  />

    </div>
)
}

export default Loading