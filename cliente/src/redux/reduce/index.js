import { ALLPOKEMONS, CLEARPOKEMONS, DETALLEPOKEMONS, CLEARDETALLES, SEARCH} from '../action/type'

const inicialstate = {
    pokemons: [],
    detalle: {}
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
        default:
            return {
                ...state
            };
    }
}