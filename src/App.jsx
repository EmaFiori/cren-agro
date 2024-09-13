
import { BrowserRouter,Route ,Routes } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import Home from './components/Home/Home'
import Categoria from './components/Categoria/Categoria'
import Herramientas from './components/SeccionesRyH/Herramientas'
import Repuestos from './components/SeccionesRyH/Repuestos'
import Maquinarias from './components/SeccionesRyH/Maquinarias'
function App() {
  

  return (
    <BrowserRouter>
    <div className=''>
      <Navbar/>
  
     <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/herramientas'element={<Herramientas/>}/>
      <Route path='/repuestos'element={<Repuestos/>}/>
      <Route path='/maquinarias'element={<Maquinarias/>}/>
      <Route path='/repuestosyherramientas'element={<Categoria/>}/>
     </Routes>
   
   
    <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App
