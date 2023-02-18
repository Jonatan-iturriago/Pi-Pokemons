import {
    ALLPOKEMONS, CLEARPOKEMONS, DETALLEPOKEMONS, CLEARDETALLES, SEARCH, HIDELANDING,
    SHOWLANDING, ALLTYPE
} from '../action/type'

const inicialstate = {
    pokemons: [],
    detalle: {},
    loading: false,
    tipos:[]
}

export default function reducer(state = inicialstate, { type, payload }) {
    switch (type) {
        case ALLPOKEMONS:
            return {
                ...state,
                pokemons: payload
            }
        case CLEARPOKEMONS:
            return {
                ...state,
                pokemons: []
            }
        case SHOWLANDING:
            return {
                ...state,
                loading: true
            }
        case HIDELANDING:
            return {
                ...state,
                loading: false
            }
        case DETALLEPOKEMONS:
            return {
                ...state,
                detalle:payload
            }
        case CLEARDETALLES:
            return {
                ...state,
                detalle:[]
            }
        case SEARCH:
            return {
                ...state,
                pokemons:payload
            }
        case ALLTYPE:
            return {
                ...state,
                tipos:payload
            }
        default:
            return {
                ...state
            };
    }
}