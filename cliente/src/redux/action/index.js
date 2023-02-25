import {
    ALLPOKEMONS,
    CLEARPOKEMONS,
    DETALLEPOKEMONS,
    CLEARDETALLES,
    SEARCH,
    SHOWLANDING,
    HIDELANDING,
    ALLTYPE,
    SET_ORDEN,
    SET_ORIGEN,
    SET_TIPOFILTRO,
    SET_CURRENTPAGE,
    RESET_FILTROS,
} from "./type";
import axios from "axios";

export const getPokemon = () => {
    return async function (dispatch) {
        const json = await axios.get("/pokemon");
        return dispatch({
            type: ALLPOKEMONS,
            payload: json.data,
        });
    };
};
export const clear = () => {
    return {
        type: CLEARPOKEMONS,
    };
};

export const getPokeByName = (name,alter) => {
    return async function (dispatch) {
        try {
            const json = await axios.get(
                `/pokemon?name=${name}`
            );
            alter()
            return dispatch({
                type: SEARCH,
                payload: json.data,
            });
        } catch (error) {
            alert("el nombre buscado no existe intente con otro");
            return dispatch({
                type: SEARCH,
                payload: [],
            });
        }
    };
};

export const getPokemondetalle = (id) => {
    return async function (dispatch) {
        const json = await axios.get(`/pokemon/${id}`);
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
        try {
            const json = await axios.get("/type");
            return dispatch({
                type: ALLTYPE,
                payload: json.data,
            });
        } catch (error) {
            alert(error.message);
        }
    };
};



export const postPokemon = (payload) => {
    return async () => {
        try {
            var createPoke = await axios.post(
                "/pokemon",
                payload
            );
            alert("el pokemon fue creado !");
            return createPoke;
        } catch (e) {
            alert("el pokemon no fue creado!");
        }
    };
};

export const filterOrigen = (payload) => {
    return {
        type: SET_ORIGEN,
        payload,
    };
};

export const filterTipo = (payload) => {
        return {
            type: SET_TIPOFILTRO,
            payload,
        };
};

export const filterOrden = (payload) => {
    return {
        type: SET_ORDEN,
        payload,
    };
};

export const setCurrentPage = (payload) => {
    return {
        type: SET_CURRENTPAGE,
        payload,
    };
};


export const resetFiltros = () => {
    return {
        type: RESET_FILTROS,
    };
};