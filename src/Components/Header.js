import React from 'react'
import TrollFace from '../Assets/Troll Face.png'

export default function Header() {
  return (
    <header className='header'>
        <img src={TrollFace} alt="Troll Face" className='header--image'/>
        <h2 className='header--title'>Meme Generator</h2>
    </header>
  )
}
