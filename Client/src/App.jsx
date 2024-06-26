
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../src/Pages/Home'
import About from '../src/Pages/About'
import Login from '../src/Pages/Login'
import Register from '../src/Pages/Register'
import './App.css'
import Navbar from './Components/Navbar'
import Collection from './Pages/Collection'
import Review from './Pages/Review'
import Contact from './Pages/Contact'
import Logout from './Pages/Logout'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/review' element={<Review/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/Register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
