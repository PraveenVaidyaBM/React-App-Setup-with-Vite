import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import './scss/main.scss'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
