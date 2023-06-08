import React, { useState } from 'react'

export function Card(props) {
  const { imageSrc, title, content, price, notInterested } = props
  console.log(imageSrc)
  const [words, setWord] = useState(content.substring(0, 300))
  const [less, setLess] = useState(true)
  function showMore() {
    setLess(false)
    setWord(content)
  }

  function showLess() {
    setLess(true)
    setWord(content.substring(0, 300))
  }
  return (
    <div className="container">
      <div className="image">
        <div className="price">
          <span>{price}</span>
        </div>
        <img src={imageSrc} alt={title} />
      </div>
      <h1 className="title">{title}</h1>
      <p className="content">
        {words}
        {less ? (
          <button className="textConroler" onClick={showMore}>
            {' '}
            ...show more
          </button>
        ) : (
          <button className="textConroler" onClick={showLess}>
            show less
          </button>
        )}
      </p>

      <button className="btn" onClick={notInterested}>
        Not Enterested
      </button>
    </div>
  )
}
