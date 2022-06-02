import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
  return (
    <div
    className='container home-page'>
        <h1>HELLLLLLLLLLLLlllllLLLLLLLlLLLO</h1>
        <div className='text-zone'>
            <h1> Hi, <br />
            I'm Mateo
            <br />

            </h1>
            <Link to='/contact' className='flat-button'> CONTACT ME</Link>
        </div>
    </div>
  )
}

export default Home