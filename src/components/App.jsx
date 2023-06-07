import '../App.css'
import { Card } from './card'

function App() {
  return (
    <main>
      <h1>Our Tours</h1>
      <hr />
      <div className="tours">
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  )
}

export default App
