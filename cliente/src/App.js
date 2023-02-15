import './App.css';
import {Routes,Route} from 'react-router-dom'
import Cards from './components/cards/Cards';
import Detalle from './components/detalle/Detalle';
import Landing from './components/Landing/Landing';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path='/' element={<Landing/>}/>
        <Route path="/home" element={<Cards />} />
        <Route path='/detalle/:id' element={<Detalle />} />
      </Routes>
    </div>
  );
}

export default App;
