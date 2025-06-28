import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmojiPalette from './components/EmojiPalette'
import { Dashboard } from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className=''>
      <Dashboard />
      

    </main>
  )
}

export default App
