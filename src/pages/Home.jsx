import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'
import Collctions from '../components/Collctions'
import ChooseUs from '../components/ChooseUs'
import Value from '../components/Value'
import Design from '../components/Design'
import Explore from '../components/Explore'
import Assistance from '../components/Assistance'
import Footer from '../components/Footer'
import Collctioncard from '../components/Collctioncard'

function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <Contact/>
    <Collctions/>
    <Collctioncard/>
    <ChooseUs/>
    <Value/>
    <Design/>
    <Explore/>
    <Assistance/>
    <Footer/>
    </>
  )
}

export default Home