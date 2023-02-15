import { ALLPOKEMONS, CLEARPOKEMONS,DETALLEPOKEMONS,CLEARDETALLES,SEARCH } from './type'
import axios from 'axios'


export const getPokemon = () => {
    return async function (dispatch) {
        const json = await axios.get("http://localhost:3001/pokemon")
        return dispatch({
            type: ALLPOKEMONS,
            payload: json.data
        })
    }
}
export const clear = () => {
    return {
        type:CLEARPOKEMONS
    }
}

export const getPokeByName = (name) => {
    return async function (dispatch) {
        const json = await axios.get(`http://localhost:3001/pokemon?name=${name}`);
        return dispatch({
            type: SEARCH,
            payload: json.data,
        });
    };
};


export const getPokemondetalle = (id) => {
    return async function (dispatch) {
        const json = await axios.get(`http://localhost:3001/pokemon/${id}`);
        return dispatch({
            type: DETALLEPOKEMONS,
            payload: json.data,
        });
    };
};
export const clearDetalle = () => {
    return {
        type: CLEARDETALLES,
    };
};