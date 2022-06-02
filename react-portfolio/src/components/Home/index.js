import React from 'react'
import { Link } from 'react-router-dom'
import About from '../About'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'
import './index.scss'

const Home = () => {
  return (
      <>
        <About />
        <Projects />
        <Contact />
        </>
  )
}

export default Home