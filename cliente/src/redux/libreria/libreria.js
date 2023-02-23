const ValidaUUID4V = ({ id }) => {
    if (
        /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(
            id
        )
    ) {
        return true;
    } else {
        return false;
    }
};

export const filtroPokemon = (origen, lista, tipoFiltro, orden) => {
    let nueva = [];

    if (origen === "create") {
        nueva = lista.filter((x) => ValidaUUID4V(x));
    } else if (origen === "api") {
        nueva = lista.filter((x) => !ValidaUUID4V(x));
    } else {
        nueva = lista.slice();
    }
    if (tipoFiltro !== "All") {
        nueva = nueva.filter((x) => x.tipo.includes(tipoFiltro));
    }
    if (orden === "asc") {
        nueva = nueva.sort(function (a, b) {
            if (a.nombre > b.nombre) {
                return 1;
            }
            if (b.nombre > a.nombre) {
                return -1;
            }
            return 0;
        });
    } else if (orden === "desc") {
        nueva = nueva.sort(function (a, b) {
            if (a.nombre > b.nombre) {
                return -1;
            }
            if (b.nombre > a.nombre) {
                return 1;
            }
            return 0;
        });
    } else if (orden === "min") {
        nueva = nueva.sort(function (a, b) {
            if (a.ataque > b.ataque) {
                return 1;
            }
            if (b.ataque > a.ataque) {
                return -1;
            }
            return 0;
        });
    } else if (orden === "max") {
        nueva = nueva.sort(function (a, b) {
            if (a.ataque > b.ataque) {
                return -1;
            }
            if (b.ataque > a.ataque) {
                return 1;
            }
            return 0;
        });
    }  
    return nueva;
};

