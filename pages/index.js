import React, { useState } from 'react'
import { ColorExtractor } from 'react-color-extractor'
import SearchInput from '../components/SearchInput'

const Home = () => {
  const dickbuttImage = 'https://i.kym-cdn.com/entries/icons/mobile/000/001/030/DButt.jpg'
  const [colors, setColors] = useState([])
  const [urlInput, setUrlInput] = useState('');


  const renderSwatches = () => {
    return colors.map((color, index) => {
      return (
        <div
          key={index}
          style={{
            backgroundColor: color,
            borderBlockColor: 'black',
            borderBlockWidth: '2px',
            width: 100,
            height: 100,
          }}
          className='grid grid-rows-2 items-center justify-center border-2 boder-black'>
          {color}
        </div>
      )
    })
  }

  const getColors = colors => {
    setColors([...colors]);
    console.log(colors)
  }


  return (
    <div className={`flex min-h-screen flex-col items-center justify-center py-2 bg-[${colors[0]}]`} style={{ backgroundColor: colors[0] }}>
      <SearchInput setUrlInput={setUrlInput} />
      <ColorExtractor getColors={getColors}>
        <img src={urlInput === '' ? dickbuttImage : urlInput} alt="..." className='w-60' />
      </ColorExtractor>
      <div className="flex p-2">
        {renderSwatches()}
      </div>
    </div>
  )
}

export default Home
