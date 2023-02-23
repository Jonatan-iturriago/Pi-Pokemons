
import React from 'react'
import Cards from '../../components/cards/Cards'
import Error from '../../components/cards/Error'
function Home() {
    return <div>
        {<Cards /> ? <Cards /> : <Error />}</div>;
}

export default Home