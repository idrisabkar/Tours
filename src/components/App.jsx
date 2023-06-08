import '../App.css'
import React, { useState } from 'react'
import { Card } from './card'
import { tours_ } from '../tours'

function App() {
  const [tours, setTours] = useState(tours_)

  const handleNotInterested = (id) => {
    setTours(tours.filter((tour) => tour.id !== id))
  }
  function handleREfresh() {
    setTours(tours_)
  }

  return (
    <main>
      <h1>Our Tours</h1>
      <hr />
      {tours.length === 0 ? (
        <button className="btn" onClick={handleREfresh}>
          Refresh
        </button>
      ) : (
        <div className="tours">
          {tours.map((tour) => {
            const { id, imageSrc, title, content, price } = tour
            return (
              <Card
                key={id}
                imageSrc={imageSrc}
                title={title}
                content={content}
                price={price}
                notInterested={() => handleNotInterested(id)}
              />
            )
          })}
        </div>
      )}
    </main>
  )
}

export default App
