
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar'
import Footer from './Footer'
import Shop from './Components/Shop/Shop'

function App() {


  return (
    <div className='relative'>
    <Router>
      {/* <div className='absolute inset-0 top-7'>
      <Navbar />
      </div> */}
      <Routes>

        <Route path='/' element={<Home/>}  />
        <Route path='/shop/create' element={<Shop/>}  />

      </Routes>
    </Router>
    {/* <Footer/> */}
    </div>
  )
}

export default App
