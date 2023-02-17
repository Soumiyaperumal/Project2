import './App.css';
import Section from './Section'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'
import Section5 from './Components/Section5';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className='body'>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Section/>}></Route>
      <Route path='/about' element={<Section2/>}></Route>
      <Route path='/price' element={<Section3/>}></Route>
      <Route path='/contact' element={<Section5/>}></Route>
        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
