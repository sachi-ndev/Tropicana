
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Components/Home/Home'

import Login from './Components/Shop/Login'
import Verification from './Components/Shop/Verification'
import Createacc from './Components/Shop/Createacc'

function App() {


  return (
    <div className='relative'>
    <Router>
      {/* <div className='absolute inset-0 top-7'>
      <Navbar />
      </div> */}
      <Routes>

        <Route path='/' element={<Home/>}  />
        <Route path='/shop/create' element={<Createacc/>}  />
        <Route path='/shop/login' element={<Login/>}  />
        <Route path='/shop/verify' element={<Verification/>}  />

      </Routes>
    </Router>
    {/* <Footer/> */}
    </div>
  )
}

export default App
