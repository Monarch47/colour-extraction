import React, { useState } from 'react'
import { ColorExtractor } from 'react-color-extractor'
import SearchInput from '../components/SearchInput'

const Home = () => {
  const dickbuttImage = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cdabbfe7-bbc0-4c1e-a8df-210fc16c0029/daje1y8-bc05f401-57a9-4859-affd-c45f6e0c4a6d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NkYWJiZmU3LWJiYzAtNGMxZS1hOGRmLTIxMGZjMTZjMDAyOVwvZGFqZTF5OC1iYzA1ZjQwMS01N2E5LTQ4NTktYWZmZC1jNDVmNmUwYzRhNmQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Bc9gB6yvjMjn-lQ_HHOTYtsXOiySF8-JxZZZW8PMvqs'
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
          className='grid grid-rows-2 items-center justify-center '>
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
