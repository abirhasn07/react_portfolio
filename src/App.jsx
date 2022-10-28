import React from 'react'
import About from './components/About/About'
import Header from './components/Header/Header'
import MarqueeContainer from './components/Marquee/Marquee'

import Navbar from './components/Navbar/Navbar'

import ProjectsContainer from './components/ProjectContainer/ProjectsContainer'
import Skill from './components/Skills/Skill'


const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <MarqueeContainer/>
      <ProjectsContainer />
      <Skill />
      <About/>
    </div>
  )
}

export default App