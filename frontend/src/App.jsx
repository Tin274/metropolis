import { useState } from 'react'
import './App.css';
import Signup from './components/pages/signup/index.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Metropolis</h1>
      <Signup />
    </div>
  )
}

export default App
