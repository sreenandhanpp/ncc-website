import React from 'react'
import About from '../components/About'
import Header from '../components/Header'
import Motto from '../components/Motto'
import Slide from '../components/Slide'

function Home() {
  return (
    <div>
        <Header />
        <Slide />
        <About />
        <Motto />
    </div>
  )
}

export default Home