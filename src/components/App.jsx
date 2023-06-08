import '../App.css'
import { Card } from './card'
import { tours } from '../tours'

function App() {
  return (
    <main>
      <h1>Our Tours</h1>
      <hr />
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
            />
          )
        })}
      </div>
    </main>
  )
}

export default App
