import React, {useState} from 'react'
import Data from '../ResponseData.js';

export default function MemeSection() {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: ""
  });

  const [allMemeImages, setAllMemeImages] = useState(Data)
  
  function getMemeImage(){
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const imgURL = memesArray[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: imgURL
    }))
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

      <img src={meme.randomImage} className='meme--image'/>
    </main>
  )
}
