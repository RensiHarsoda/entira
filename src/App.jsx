import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style/Hero.css'
import './style/Header.css'
import './style/About.css'
import './style/Contact.css'
import './style/collctions.css'
import './style/ChooseUs.css'
import './style/Value.css'
import './style/Design.css'
import './style/Explore.css'
import './style/Assistance.css'
import './style/Footer.css'
import './style/Product.css'
import './style/Collctioncard.css'
import './style/Responsive.css'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import AllProduct from './pages/AllProduct'
import ScrollToTop from './components/ScrollToTop'



function App() {
 
  return (
    <>
   <ScrollToTop />
      <Routes>
        <Route
        path='/'
        element = {<Home/>}/>
        <Route
        path='/allproduct'
        element = {<AllProduct/>}/>
      </Routes>
    </>
  )
}

export default App
