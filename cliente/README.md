![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# **POKEMON** | Proyecto Individual

<br />

---

## **📖 ENUNCIADO GENERAL**

La idea de este proyecto es construir una aplicación web a partir de la API
[**pokeapi**](https://pokeapi.co/) en la que se pueda:

-   Buscar pokemones.
-   Visualizar la información de los pokemones.
-   Filtrarlos.
-   Ordenarlos.
-   Crear nuevos pokemones.

⚠️ Para las funcionalidades de filtrado y ordenamiento NO se puede utilizar los
endpoints de la API externa que ya devuelven los resultados filtrados u
ordenados.

### **Únicos end-points que se pueden utilizar**

-   [**PokeApi**](https://pokeapi.co/api/v2/pokemon)
-   **Por id**: _"https://pokeapi.co/api/v2/pokemon/{id}"_
-   **Por nombre**: _"https://pokeapi.co/api/v2/pokemon/{name}"_
-   **Por tipo**: _"https://pokeapi.co/api/v2/type"_

<br />

---

## **📁 INSTRUCCIONES**

<br />
<br />

### **🖱 FRONT-END**

Se debe desarrollar una aplicación utilizando **React** y **Redux** que contenga
las siguientes vistas:

**📍 LANDING PAGE |** deberás crear una página de inicio o bienvenida con:

-   Alguna imagen de fondo representativa al proyecto.
-   Botón para ingresar a la **`home page`**.

<br />

**📍 HOME PAGE |** la página principal de tu SPA debe contener:

-   SearchBar: un input de búsqueda para encontrar pokemon por nombre. La
    búsqueda debe ser exacta, por lo que sólo lo encontrará si se lo busca con
    su nombre completo.
-   Sector en el que se vea un listado de cards con los pokemones. Al iniciar
    deberá cargar los primeros resultados obtenidos desde la ruta
    **`GET /pokemons`** y deberá mostrar su:
    -   Imagen.
    -   Nombre.
    -   Tipos.
-   Cuando se le hace click a una Card deberá redirigir al detalle de ese
    pokemon específico.
-   Botones/Opciones para **filtrar** por tipo, y por si su origen es de la API
    o de la base de datos (creados por nosotros desde el formulario).
-   Botones/Opciones para **ordenar** tanto ascendentemente como
    descendentemente los pokemones por orden alfabético y por ataque.
-   Paginado: el listado de pokemones se hará por partes. Tu SPA debe contar con
    un paginado que muestre un total de 12 pokemones por página.

<br />

**📍 DETAIL PAGE |** en esta vista se deberá mostrar toda la información
específica de un pokemon:

-   ID.
-   Nombre.
-   Imagen.
-   Vida.
-   Ataque.
-   Defensa.
-   Velocidad (si tiene).
-   Altura (si tiene).
-   Peso (si tiene).
-   Tipo.

<br />

**📍 FORM PAGE |**: en esta vista se encontrará el formulario para crear un
nuevo pokemon.

Este formulario debe ser **controlado completamente con JavaScritp**. No se
pueden utilizar validaciones HTML, ni utilizar librerías especiales para esto.
Debe contar con los siguientes campos:

-   Nombre.
-   Imagen.
-   Vida.
-   Ataque.
-   Defensa.
-   Velocidad (si tiene).
-   Altura (si tiene).
-   Peso (si tiene).
-   Posibilidad de seleccionar/agregar varios tipos en simultáneo.
-   Botón para crear el nuevo pokemon.

> [**IMPORANTE**]: es requisito que el formulario de creación esté validado sólo
> con JavaScript. Puedes agregar las validaciones que consideres. Por ejemplo:
> que el nombre del pokemon no pueda contener números, o que la defensa no pueda
> exceder determinado valor, etc.

<br />

---

<br />

### **🖱 TESTING**

Ten en cuenta que en esta instancia no es obligatorio el desarrollo de testing
para tu aplicación. De igual manera, te desafiamos a que los hagas, ¡ya que
suman puntos!

-   Al menos tener un componente del frontend con sus tests respectivos.
-   Al menos tener dos rutas del backend con sus tests respectivos.
-   Al menos tener un modelo de la base de datos con sus tests respectivos.

<br />

---

<br />

<img src="./pokemon.png" alt="" />
