import React, {useState} from 'react'
import Data from '../ResponseData.js';

export default function MemeSection() {

  const [memeImage, setMemeImage] = useState("");
  
  function getMemeImage(){
    const memesArray = Data.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const imgURL = memesArray[randomNumber].url
    setMemeImage(imgURL)
  }

  return (
    <main>
      <div className='form'>
        <input
          type="text"
          placeholder='Top Text'
          className='form--input'
        />
        <input
          type="text"
          placeholder='Bottom Text'
          className='form--input'
        />
        <button className='form--button' onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>

      <img src={memeImage} className='meme--image'/>
    </main>
  )
}
