import {
    ALLPOKEMONS,
    CLEARPOKEMONS,
    DETALLEPOKEMONS,
    CLEARDETALLES,
    SEARCH,
    HIDELANDING,
    SHOWLANDING,
    ALLTYPE,
    POST_POKEMON,
    SET_ORDEN,
    SET_ORIGEN,
    SET_TIPOFILTRO,
    SET_CURRENTPAGE,
    RESET_FILTROS,
} from "../action/type";

const inicialstate = {
    pokemons: [],
    detalle: {},
    loading: false,
    tipos: [],
    origen: "",
    tipoFiltro: "All",
    orden: "",
    setPage: 1,
};

export default function reducer(state = inicialstate, { type, payload }) {
    switch (type) {
        case ALLPOKEMONS:
            return {
                ...state,
                pokemons: payload,
            };
        case CLEARPOKEMONS:
            return {
                ...state,
                pokemons: [],
            };
        case SHOWLANDING:
            return {
                ...state,
                loading: true,
            };
        case HIDELANDING:
            return {
                ...state,
                loading: false,
            };
        case DETALLEPOKEMONS:
            return {
                ...state,
                detalle: payload,
            };
        case CLEARDETALLES:
            return {
                ...state,
                detalle: [],
            };
        case SEARCH:
            return {
                ...state,
                pokemons: payload,
            };
        case ALLTYPE:
            return {
                ...state,
                tipos: payload,
            };
        case POST_POKEMON:
            return {
                ...state,
            };
        case SET_ORIGEN:
            return {
                ...state,
                origen: payload,
            };
        case SET_TIPOFILTRO:
            return {
                ...state,
                tipoFiltro: payload,
            };
        case SET_ORDEN:
            return {
                ...state,
                orden: payload,
            };
        case SET_CURRENTPAGE:
            return {
                ...state,
                setPage: payload,
            };
        case RESET_FILTROS:
            return {
                ...state,
                origen: "",
                tipoFiltro: "All",
                orden: "",
            };
        default:
            return {
                ...state,
            };
    }
}
