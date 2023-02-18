import {
    ALLPOKEMONS,
    CLEARPOKEMONS,
    DETALLEPOKEMONS,
    CLEARDETALLES,
    SEARCH,
    SHOWLANDING,
    HIDELANDING,
    FILTERTIPOS,
    ALLTYPE,
} from "./type";
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
        try {
            const json = await axios.get(
                `http://localhost:3001/pokemon?name=${name}`
            );
            return dispatch({
                type: SEARCH,
                payload: json.data,
            });
        } catch (error) {
            alert("el nombre buscado no existe intente con otro");
        }
        
        }
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

export const showLoading = () => (dispatch) => {
    dispatch({
        type: SHOWLANDING,
    });
};

export const hideLoading = () => (dispatch) => {
    dispatch({
        type: HIDELANDING,
    });
};

export const getTipoPokemon = () => {
    return async function (dispatch) {
        const json = await axios.get("http://localhost:3001/type");
        return dispatch({
            type: ALLTYPE,
            payload: json.data,
        });
    };
};


export const filtroTipo = (dispatch) => {
    dispatch({
        type: FILTERTIPOS,
    });
}