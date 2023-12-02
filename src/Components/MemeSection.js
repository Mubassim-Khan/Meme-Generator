import React, { useEffect, useState } from 'react'
// require('dotenv').config();
// process.env.REACT_APP_MEME_API_KEY

export default function MemeSection() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: ""
  });

  const [allMemes, setAllMemes] = useState([])

  const getMemes = async () => {
    let url = "https://api.imgflip.com/get_memes";
    let data = await fetch(url);
    let parsedData = await data.json();
    setAllMemes(parsedData.data.memes)
  }

  useEffect(() => {
    getMemes()
  }, [])

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const imgURL = allMemes[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: imgURL,
      topText: "",
      bottomText: ""
    }))
  }

  function handleChange(event) {
    const { name, value } = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))

  }

  return (
    <main>
      <div className='form'>
        <input
          type="text"
          placeholder='Top Text'
          className='form--input'
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder='Bottom Text'
          className='form--input'
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className='form--button' onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>

      <div className="meme">
        <img src={meme.randomImage} alt="" className='meme--image' />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}
