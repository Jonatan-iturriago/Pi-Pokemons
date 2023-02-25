import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './view/home/Home';
import Detalle from './components/detalle/Detalle';
import Landing from './components/Landing/Landing';
import PokemonCreate from './components/create/PokemonCreate';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path='/' element={<Landing/>}/>
        <Route path="/home" element={<Home />} />
        <Route path='/detalle/:id' element={<Detalle />} />
        <Route path='/create' element={ <PokemonCreate/>}/>
      </Routes>
    </div>
  );
}

export default App;
