import React from 'react'
import About from '../components/About'
import Header from '../components/Header'
import Slide from '../components/Slide'
import Song from '../components/Song'

function Home() {
  return (
    <div>
        <Header />
        <Slide />
        <About />
        <Song />
        
    </div>
  )
}

export default Home